import { useContext, useEffect } from "react";
import { Store } from "./context-store";

function Upcommineffect({et}){
    const{setUpcomming}=useContext(Store)
    useEffect(()=>{
        const upcomiigfetch=async()=>{
            try{
                const upcomingdata=await fetch(`https://www.omdbapi.com/?t=${et}&apikey=1f3a0e38`)
                const tojson=upcomingdata.json()

                const upsrc=tojson.Poster
                const upname=tojson.Title

                const upstore={
                    upname,
                    upsrc
                }
                setUpcomming(upstore)
            } catch(error){
                console.log(error.message)
            }
        }
        upcomiigfetch()
    },[setUpcomming,et])
}
export default Upcommineffect