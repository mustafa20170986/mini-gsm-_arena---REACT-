import { useContext } from "react"
import { Store } from "./context-store"

 //ths one for movie card design 
//we will design her eand pass the props in the expected 
//area  so that if content chnages the data will 
//sit on the excpected area and designin will remain contsnt

function Moviecard(){
    const{movielist}=useContext(Store) //consuming movielist 
    
if(!movielist || movielist.length===0){//conditional rendering
    return(
        <p> lOading ....</p>
    )
}
  
   
    return(
        <div className="flex flex-wrap justify-center gap-10 mt-10">
        {movielist.map((movie)=>( //mapover the movielist array

       
        <div  key={movie.moviename} className="flex flex-col mt-10 items-center justify-center ">
            {/*key name set to movie name*/}
            <div className="h-100 w-80 ">
                <img src={movie.cardsrc} alt="image" //image link from the api 
                //which we have fetch and convert to json and get in a variable 
                className="object-cover h-full w-full relative"
                />
             </div>
            <h1 className="text-white font-semibold text-center flex">
                {movie.moviename} {/*movie name from api */}
            </h1>
            <h3 className="text-white font-semibold flex items-center text-center">
                Ratings: {movie.rating}
            </h3>
           
         </div>
        ))}
        </div>
    )
}
export default Moviecard
//some left to write