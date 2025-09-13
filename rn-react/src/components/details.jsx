import { useContext, useEffect, useState } from "react";
import { Store } from "./context-store";
import { useParams } from "react-router-dom";

function Details() {
  const { search, movielist, tvshowlist, upcoming } = useContext(Store);
  const { id, type } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Separate function to find the item in the context lists
    const findItemInContext = () => {
      if (type === 'Movies') {
        return movielist.find(m => m.id === parseInt(id));
      } else if (type === 'TvShows') { // Corrected name to match App.jsx route
        return tvshowlist.find(m => m.id === parseInt(id));
      } else if (type === 'Upcoming') { // Corrected name to match App.jsx route
        return upcoming.find(m => m.id === parseInt(id));
      } else {
        // If it's a search result, the id is already a string (imdbID)
        return search.find(m => m.id === id);
      }
    };

    const foundItem = findItemInContext();

    // If a full item with plot is found, use it directly
    if (foundItem && foundItem.plot) {
      setItem(foundItem);
    } else {
      // Otherwise, it's a search result or wasn't found,
      // so we need to fetch the full details
      const fetchFullDetails = async (imdbID) => {
        try {
          const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=1f3a0e38`);
          const tojson = await response.json(); // Added 'await'

          if (tojson.Response === "True") {
            setItem({
              ...tojson,
              cardsrc: tojson.Poster,
              moviename: tojson.Title,
              rating: tojson.imdbRating,
              plot: tojson.Plot
            });
          } else {
            setItem(null); // Set to null if the API response is not valid
          }
        } catch (error) {
          console.error("Failed to fetch full details:", error);
          setItem(null); // Set to null on fetch error
        }
      };
      
      // Use the id from the URL params to fetch details
      // This works for both pre-fetched lists and search results
      if (id) {
        fetchFullDetails(id);
      }
    }
  }, [id, type, movielist, tvshowlist, upcoming, search]);

  // Conditional rendering to prevent the 'null' error
  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-8 text-white max-w-5xl mx-auto">
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
        <img
          src={item.cardsrc}
          alt={item.moviename}
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">{item.moviename}</h1>
        <div className="text-lg mb-4">
          <p className="font-semibold">
            {item.rating && item.rating !== "N/A"
              ? `Ratings: ${item.rating}`
              : "Ratings: Not available"}
          </p>
        </div>
        <div className="text-base leading-relaxed">
          <p>{item.plot || "Plot summary not available."}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;