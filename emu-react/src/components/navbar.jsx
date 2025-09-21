import{Link} from"react-router-dom"

function Navbar(){
  return(
    <nav className="bg-base-300 flex justify-center items-center w-full">
      <ul className="flex justify-between xs:gap-8 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-24 items-center">
      
      <li>
 <Link to="/"> home </Link> 
      </li>
    
      
        <li>
          <Link to="/Brands"> 
          Brands</Link> 
          </li>
          
        <li>
          <Link to="price">Price range </Link>
          </li>
        
      </ul>
    </nav>
  )
}
export default Navbar