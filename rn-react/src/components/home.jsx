import Moviedata from "./useeffect"
//this is the basic design for home page 
function Home(){
  return(
    <div className="flex mt-10"> 
      <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/03/maxresdefault-1-2-1200x675.jpg?height=399&width=711&fit=bounds" alt="movie image"
      className="h-full w-full object-cover relative bg-black opacity-50"
      />
      {/*reusing moviedata compo with prop*/}
      <Moviedata dt="Avengers: Infinity War"/>
"
    </div>
  )
}
export default Home

//we are using useeeffct.jsx for just this home page 