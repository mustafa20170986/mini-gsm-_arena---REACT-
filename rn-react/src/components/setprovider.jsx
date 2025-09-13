 import { useState } from "react"
import { Store } from "./context-store"
//we are defining each state lik e
//for moive ,tvshow,search,upcoming 
//and they all have dedicated array 
//without searh as it is using ""
 export const Storeprovider=({children})=>{

const [movielist,setMovielist]=useState([])
 //now making state for the tv show
 const [tvshowlist,setTvshowlist]=useState([])
 //state for upcoming 
 const[upcoming,setUpcoming]=useState([])
 //state for managing search
 const[search,setSearch]=useState([])
//state formanaging bthe search 
 const [srhquery,setSrhquery]=useState("")

 //function for seaech result  from the api 
 const fetchsearch=async(query)=>{ //run async task for search item (query)
    if(!query){ //if there is no quer find set the 
        //state to blank
        setSearch([])
        return //return nothinng
    } try{
        //if not failed then try to fetch 
        const fetchqeury= await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=1f3a0e38`)
const tojson= await fetchqeury.json()
//we have used encodeURIComponent for protecting serach 
//from broken or malformed by any space 

 if(tojson.Response === "True"){ //if respone is okay

const mapresult=tojson.Search.map(item=>({//search for this dats and store them in tho this object
     id:item.imdbID,
     cardsrc:item.Poster,
     moviename:item.Title,
     year:item.Year,
     type:item.Type
   }))
   setSearch(mapresult) //set the setseacrh to the objcet
 }else{
    setSearch([])
 }
    }
    catch(error){
        console.log(error.message)
    }

   
 }
 return( //pass the all datas including the funciton used in the 
    //fecthing api through childrens to providde them acess
    <Store.Provider value={{movielist,setMovielist,tvshowlist,setTvshowlist
        ,upcoming,setUpcoming,search,setSearch,srhquery,setSrhquery,fetchsearch
    }}>
        {children}
    </Store.Provider>
 )
 
}
