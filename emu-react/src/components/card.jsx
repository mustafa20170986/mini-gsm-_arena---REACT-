import { useContext } from "react"
import { Store } from "./context-str"
//this card secction is use for home page card 
//this will be updateable when needed
function Card(){
    const{className,src,alt}=useContext(Store)
    return(
        <div className={className} > {/* classnmae card will use card compo from daisy ui */}
            <figure>
                <img src={src} alt={alt} />
            </figure>
        </div>
    )
}
export default Card