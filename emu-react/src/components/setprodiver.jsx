import { useState } from "react";
import { Store } from "./context-str";
//declare the states and making them 
//available for all {children}
 export function Setprovider({children}){
    //setting for phones 
    const[phones,setPhones]=useState([])
    const[loading,setLoading]=useState(true)
const [phonest,setPhonest]=useState([])
//the price sections
const[minprice,setMinprice]=useState("")
    const[maxprice,setMaxprice]=useState("")
    return(
        <Store.Provider value={{phones,setPhones,loading,setLoading,minprice,maxprice,setMaxprice,setMinprice,setPhonest,phonest}}>

            {children}
        </Store.Provider>
    )
}