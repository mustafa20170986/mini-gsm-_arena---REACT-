import { useContext, useEffect } from "react";
import { Store } from "./context-str";
import { useParams } from "react-router-dom";
import Navbar from"./navbar"
//dynamic routing will take us the page where we can see 
// more details 
function Phonedetails(){
    const{phonest,setPhonest,loading,setLoading}=useContext(Store)

    const {brand,name}=useParams() //setting the brand and name as parameter 
//data fetching here 
    useEffect(()=>{
const fetchdata=async()=>{
    try{
const raw=await fetch(`http://localhost:3000/phones/${brand}`)
const data=await raw.json()

 const found = data.find( // find the data  according to the 
    //name 
          (p) => p.name.toLowerCase() === name.toLowerCase()
        )
setPhonest(found)
setLoading(false)
    }catch(error){
        console.log(error.message)
    }
}
fetchdata()
    },[setLoading,setPhonest,brand,name])//we are  taking the pjhones details inside 
    //an object setphonest ,phonrest 
    if(loading){
        <Navbar/>
        return <div className="loading loading-spinner"></div>
    }
    return(
        <div className="flex flex-col items-center justify-center ">
            <Navbar/>
        <h2 className="font-bold text-black">
            {phonest.name}
        </h2>
        <figure className="flex flex-col items-center justify-center">
            <img src={phonest.image} alt="image"
            className="w-1/2 rounded-lg shadow-lg "/>
            {/* just accesing the objcet*/}
            <p><strong>RAM:{phonest.ram}</strong></p>
             <p><strong>ROM:{phonest.rom}</strong></p>
              <p><strong>CAMERA:{phonest.camera}</strong></p>
               <p><strong>CHIPSET:{phonest.chipset}</strong></p>
                <p><strong>DISPLAY:{phonest.display}</strong></p>
                 
        </figure>
        </div>
    )
}
export default Phonedetails