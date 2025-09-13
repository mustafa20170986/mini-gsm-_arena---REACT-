import { useContext, useEffect } from "react"
import { Store } from "./context-store"
import Moviedata from "./useeffect";
import Moviecard from "./movie-card";
import Mrd from "./mcrd";

function Tvshows(){

const {setTvshowlist}=useContext(Store)  
const tvshow= [
    { id: 14, name:"WandaVision" },
    { id: 15, name:"Loki" },
    { id: 22, name:"The Mandalorian" },
    { id: 16, name:"Game of Thrones" },
    { id: 17, name:"Breaking Bad" },
    { id: 18, name:"The Last of Us" },
    { id: 19, name:"Chernobyl" },
    { id: 20, name:"House of Cards" },
    { id: 21, name:"Stranger Things" },
  ];  
  {/*useEffect(()=>{
setMovielist([])
  },[setMovielist])
  */}
   useEffect(()=>{
  const fetchmovie=async()=>{
    try{
  const tvdata=tvshow.map(async(rt)=>{
    try{
    const fetchdta=await fetch(`https://www.omdbapi.com/?t=${rt.name}&apikey=1f3a0e38`)
    const tojson=await fetchdta.json()

 return {id:rt.imdbID,
            cardsrc: tojson.Poster,
            moviename: tojson.Title,
            rating: tojson.imdbRating,
            plot: tojson.Plot,
          }
        
      }catch(error){
          console.log(error.message)
        }
  })
      
      
           const alltv = await Promise.all(tvdata);
        setTvshowlist(alltv);
    }catch(error){
      console.log(error.message)
    }
       
  }
      fetchmovie()
      
      },[setTvshowlist,tvshow])

    return (
        <div className="flex flex-wrap justify-center gap-10">
          
               <Mrd isTvShow={true}/> {/* tvshow activation true*/}
            
           
        </div>
    )
}
export default Tvshows