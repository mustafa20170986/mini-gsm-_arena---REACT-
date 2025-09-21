import { useContext } from "react";
import { Store } from "../components/context-str";
import { useState } from "react";
import Card from "../components/card";
import PhoneCard from "../components/phone-card";
import Navbar from "../components/navbar";

function Phonelist(){
    const {maxprice,minprice,loading,setLoading,setMinprice,setMaxprice}=useContext(Store)
const [result,setResult]=useState([])

     const fetchdaat=async()=>{
            try{
               
                const fetchdt=await fetch(`http://localhost:3000/phones?minPrice=${minprice}&maxPrice=${maxprice}`)
           const data=await fetchdt.json()
           setResult(data)
           setLoading(false)
            }catch(error){
                console.log(error.message)
            }
        }

  
    return(
        <div className=" flex flex-col  justify-center items-center" >
           <Navbar/>
            <fieldset className="mt-10 fieldset bg-base-100 gap-5">
                 <legend className="font-bold ">search for phone</legend>
            <input type="number" placeholder="enter phone name"
            value={minprice}
            onChange={(e)=>setMinprice(Number(e.target.value))}
            className="bg-base-300  rounded shadow-lg lg:h-[40px]"
            />
            <input type="number" placeholder="max" value={maxprice}
            onChange={(e)=>setMaxprice(Number(e.target.value))}
            className="bg-base-300  rounded shadow-lg lg:h-[40px]"
            />
            <button  type="button" className="btn-secondary" onClick={fetchdaat}>Search</button>
            </fieldset>
          {loading?(
            <div className="loading loading-spinner"></div>

          ):
            <div className="flex flex-col gap-4 items-center justify-center">
                
                {result.map((eel=>(
                    <PhoneCard key={eel.name}
                    
                    phone={eel}/>
                )))} 
            </div>
}
        </div>
    )
}

export default Phonelist