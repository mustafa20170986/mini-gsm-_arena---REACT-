import { useContext, useEffect } from "react"
import { Store } from "./context-store"
import Mrd from "./mcrd"

function Upcoming(){

const{setUpcoming}=useContext(Store)
const upcominglist=[
{ id: 1, name: "Deadpool & Wolverine" },
    { id: 2, name: "Captain America: Brave New World" },
    { id: 3, name: "Blade" },
    { id: 4, name: "The Fantastic Four" },
    { id: 5, name: "Thunderbolts" },
]
useEffect(()=>{
    const fetchup=async()=>{
        try{
const updt=upcominglist.map(async(et)=>{
    try{
const ftdata=await fetch(`https://www.omdbapi.com/?t=${et.name}&apikey=1f3a0e38`)
const tojson=await ftdata.json()

return{
    id:et.imbdID,
    cardsrc:tojson.Poster,
    moviename:tojson.Title
}
    }catch(error){
        console.log(error.message)
    }
})
const allup=await Promise.all(updt)
setUpcoming(allup)
        }catch(error){
            console.log(error.message)
        }
    }
    fetchup()
},[setUpcoming,upcominglist])
    return (
        <div className="flex flex-wrap justify-center items-center gap-10">
           <Mrd isUpcoming={true}/> {/* upcoming activation true*/}
        </div>
    )
}
export default Upcoming