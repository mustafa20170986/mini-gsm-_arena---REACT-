import { useContext, useEffect} from "react";
import {Store}  from "./context-store";


//here we are fething data from api 

function Moviedata({dt}){ //using prop dt for dynamic changing
   
const{setMovielist}=useContext(Store)

    useEffect(()=>{
       
const moviedatafetch=async()=>{
    try{
        
const fetchdata= await fetch(`https://www.omdbapi.com/?t=${dt}&apikey=1f3a0e38`)
const tojson=await fetchdata.json()

//assinging values for dynamic positioning in the card como

const  cardsrc=tojson.Poster
const moviename=tojson.Title
const rating =tojson.imdbRating
const plot=tojson.Plot

const moviestore={
    cardsrc,
    moviename,
    plot,
    rating

}
setMovielist([moviestore]) //store the data in setmovielist
//and storing them as array object for mapping over them



    }catch(error){
        console.log(error.message)
    }

}
moviedatafetch()
    },[setMovielist,dt]) //fetch runs when the props (dt) change
    return null
}
export default Moviedata
