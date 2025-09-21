import { useContext, useEffect } from "react";
import { Store } from "./context-str";
import PhoneCard from "./phone-card";
// this section will get data from the backend 

function Getter({brands}){
    //the getter functoin receive 
    //brand sas a prop like samusung ,oppo ,xiaomi

    const{loading,setLoading,phones,setPhones}=useContext(Store)

    useEffect(()=>{ //fecthhing start here 
        const fectchdata=async()=>{
            try{
const data=await fetch(`http://localhost:3000/phones/${brands.toLowerCase()}`) //brands.toLowe..
// will dynamically get the brand name from object in the backend 
const tojson=await data.json()
setPhones(tojson) //phones list got from the backend 
setLoading(false) // stop loading we have got hte data 
            }catch(error){
                console.log(error.message)
            }
        }
        fectchdata() //recall the function
    },[setLoading,setPhones,brands])
    if(loading){
        return <div className="loadinf loading-spinner"></div>
    }
return( //this section will render the card-phone and including its propertty
    <div className="flex flex-col gap-5">
        {phones.map((ele,idx)=>( //map over phone array and 
        //uisng the phonecard compo 
            <PhoneCard key={idx} phone={ele}/> 
        ))}
    </div>
)
}
export default Getter