import { Link } from "react-router-dom";
import Card from "../components/card";
import { Store } from "../components/context-str";
import Navbar from "../components/navbar";

function Brand(){

    const phone_redirect=[
    { to:'/samusung',
        className:" mt-10 bg-base-200 border border-indio-500 px-4 py-4",
        src:"https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$",
        alt:"samusung"
    },
       { to:'/oppo',
        className:"bg-base-300 border border-teal-500 px-4 py-4",
        src:"https://static.vecteezy.com/system/resources/previews/020/336/425/non_2x/oppo-logo-oppo-icon-free-free-vector.jpg",
        alt:"oppo"
    },
      {to:'/vivo',
        className:"bg-base-300 border border-indigo-500 px-4 py-4",
        src:"https://img.etimg.com/thumb/width-420,height-315,imgsize-29606,resizemode-75,msid-75741298/tech/hardware/vivo-unveils-new-made-in-india-logo-for-devices/vivo-agencies.jpg",
        alt:"vivo"
    }
      ,{ to:'/xiaomi',
        className:"bg-base-300 border border-orange-500 px-4 py-4",
        src:"http://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png",
        alt:"xiaomi"
    }
      ,{to:'/iphone',
        className:"bg-base-300 border border-black px-4 py-4",
        src:"http://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        alt:"iphone"
    }
]
    return(
        <div className="flex flex-col justify-center items-center gap-5">
<Navbar/>
 
 {phone_redirect.map((ele,idx)=>(
     <div className="flex flex-col w-1/2 justify-center items-center">
    <Link to={ele.to} key={idx}>
        <Store.Provider value={ele}>
            <Card/>
        </Store.Provider>
    </Link>
    </div>
 ))}
       
</div>
    )
}
export default Brand