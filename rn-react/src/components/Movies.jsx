
import { useContext, useEffect } from "react";
import { Store } from "./context-store";
import Mrd from "./mcrd";


function Movie() {
  //using context api here
  const {setMovielist}=useContext(Store)
  //list of movie titles to fetch data for
  const movieTitles = [
    {id:1,name:"Iron Man"},
    {id:2,name:"Avengers: Endgame"},
  {id:3,name:"Captain America: The Winter Soldier"},
    {id:4,name:"Guardians of the Galaxy"},
  { id:5,name:"Avengers: Age of Ultron "},
    {id:6,name:"Captain America: Civil War"},
    {id:7,name:"Doctor Strange "},
    {id:8,name:"Guardians of the Galaxy Vol. 2"},
    {id:9,name:"Black Panther"},
    {id:10,name:"Spider-Man: No Way Home"},
    {id:11,name:"Doctor Strange in the Multiverse of Madness "},
  {id:13,name:"Thor: Love and Thunder"}
  ];
 //using hook here
 useEffect(()=>{
  const fetchmovie=async()=>{
    try{
      //mapping over the movie titles array to fetch data for each title
  const moviedata=movieTitles.map(async(dt)=>{
    try{
    const fetchdta=await fetch(`https://www.omdbapi.com/?t=${dt.name}&apikey=1f3a0e38`)
    //parsing the data to json
    const tojson=await fetchdta.json()
//returning the required data as an object
 return {id:dt.imbdID,
            cardsrc: tojson.Poster,
            moviename: tojson.Title,
            rating: tojson.imdbRating,
            plot: tojson.Plot,
          }
        
      }catch(error){
          console.log(error.message)
        }
  })
      
      //using promise.all to wait for all the promises to resolve
           const allMovies = await Promise.all(moviedata);
        setMovielist(allMovies);
    }catch(error){
      console.log(error.message)
    }
       
  }
      fetchmovie()
      
      },[setMovielist,movieTitles]) //fetch runs when the setMovielist function or movieTitles array change


  return(
  <div className="flex flex-wrap justify-center gap-10">

    <Mrd/> {/* By default movie activation is true */}
  </div>
  )
}

export default Movie;