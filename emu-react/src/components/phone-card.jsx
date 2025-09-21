//import { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "./context-str";
//this section is for phone card 
function PhoneCard({phone}){
  //it is taking phone as objcet which will have info 
// like name image etc 

    return(
        <div className=" flex flex-col justify-center items-center">
        <div className="card w-1/2 items-center justify-center bg-base-300 border border-black px-4 py-2">
            <figure>
                <img src={phone.image} alt="image"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {phone.name}
                </h2>
                <div className="card-actions flex-end">
                    {/*this is for dynamic routing*/}
                    <Link to={`/phones/${phone.brand.toLowerCase()}/${phone.name.toLowerCase()}`}> {/*dynamic routing link*/}
                    <button className="btn-primary bg-accent  rounded ">View Info</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default PhoneCard
// it is not prop drilling just normal prop use