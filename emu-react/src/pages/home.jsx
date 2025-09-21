
import Navbar from "../components/navbar"
import { Store } from "../components/context-str"
import Card from "../components/card"

const value={
className:"card mt-10 bg-base-300",
 src:"https://mcsolution.com.bd/wp-content/uploads/2024/12/Samsung-Galaxy-S25-Ultra.webp",
            alt:"samusung"
}



function Home(){
    return(
        <div className="flex flex-col ">

            <Store.Provider value={value}>
        <Navbar/>
        <h2 className="text-gray-600 text-3xl font-bold mt-10">
            THE NEW GALAXY S25 ULTRA
        </h2>
       <Card />
        </Store.Provider>
<h2 className="text-3xl font-bold mt-5 text-black">GET MORE FLAGSHIPS</h2>

<div className="carousel mt-17 bg-base-300">

    <div className="carousel-item w-full">
<img 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f3e786207750939.66e2c343bae71.jpg"
            alt="i-phone"
className="w-full"/>
 
    </div>
<div className="carousel-item w-full">
     <img src="https://xiaomitime.com/wp-content/uploads/2024/08/Xiaomi-15-Ultra-codename-spotted-in-Mi-Code-1024x558.jpg"
            alt="xiaomi"
            className="w-full"/>          
</div>

<div className="carousel-item w-full">
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUn7JrU_KOY3PCD9V45XFUFR2Rw_gDb7ubhw&s"
            alt="vivo"
            className="w-full"
            />
</div>

<div className="carousel-item w-full">
    <img   src="https://amateurphotographer.com/wp-content/uploads/sites/7/2025/01/13Series_No-Tagline_Dark_Horizontal.jpg?w=1024"
            alt="oneplus"
            className="w-full"/>
</div>
<div className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvN8PfADUD0-jgy06wRbhGT2ntSMxOq61zew&s"
            alt="oppo"
            className="w-full"/>
</div>




</div>

        </div>
    )
}
export default Home 