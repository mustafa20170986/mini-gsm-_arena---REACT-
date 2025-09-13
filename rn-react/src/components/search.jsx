import { useContext } from "react";
import { Store } from "./context-store";

function Search(){
    //search ,setsearch and fetchsearch from context api
    const{srhquery,setSrhquery,fetchsearch}=useContext(Store)

    const handleclick=()=>{ //if click on the button
        fetchsearch(srhquery)//fetch the search result 

    }
    const handlekeypress=(e)=>{ //if press enter key run the handle click funciton
        if(e.key==="Enter"){
            handleclick()
        }
    }
    return(
        <div className="flex justify-center items-center">
            {/*controllled value feild*/}
            <input type="text" value={srhquery}
            onChange={(e)=>setSrhquery(e.target.value)}
            onKeyDown={handlekeypress}
             className="w-full max-w-md p-3 rounded-full border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button onClick={handleclick}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
                Search
            </button>
        </div>
    )
}
export default Search
