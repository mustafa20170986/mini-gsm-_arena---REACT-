import { useContext } from "react";
import { Store } from "./context-store";
import { Link } from "react-router-dom";
//here we are using another useffect,jsx like compo 
//bcz it is handling the cards section and diffeer the sections 
//with a toggle option .we will use this compo for tvshow and upcoming along side 
//movrie.jsx 

function Mrd({ isTvShow ,isUpcoming,type,isSearch}) { //make sure the name after is()exactly match
  //with the navbar options this props help for toggle option
  //here is the list of all sectionsn we will dsiplay accroding to the tab 
  const { movielist,tvshowlist,upcoming,search } = useContext(Store);
  let display; //display to navigate current state 

  if(isSearch){
    display=search
  }
  else if(isTvShow){
    display=tvshowlist
  }else if(isUpcoming){
    display=upcoming
  }else{
    display=movielist
  }

{//if everything fails then show loading
  const display= isTvShow ? tvshowlist : movielist;

  if (!display || display.length === 0) {
    return (
      <p>Loading...</p>
    );
  }
     }

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
     
      {display.map((movie) => ( //map over the display array
        //link to details page with dynamic route based on type and id
       //this one will help to navigate to details page on click of any card
         <Link 
         key={movie.imdbID}
         to={`/details/${type || movie.type}/${movie.id}`}  //the type will help to identify whether it is movie or tvshow
 className="flex flex-col mt-10 items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
         >

        <div key={movie.moviename} className="flex flex-col mt-10 items-center justify-center">
          <div className="h-100 w-80">
            <img src={movie.cardsrc} alt="image"
              className="object-cover h-full w-full relative"
            />
          </div>
          <h1 className="text-white font-semibold text-center flex">
            {movie.moviename}
          </h1>
          <h3 className="text-white font-semibold flex items-center text-center">
            Ratings: {movie.rating}
          </h3>
        </div>
        </Link> //warp up the Link component other wise will not work
      ))}
    </div>
  );
}

export default Mrd;