// we are making nav bar as like we can navigate the pages through it 

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex  flex-wrap items-center justify-center w-full"> {/*the outer div*/}
    {/*this will  style the list*/}
      <ul className="flex text-white  gap-4 font-bold">
        <li className="flex text-white text-3xl font-bold mr-8">RN Movies</li>
        <li className="list-none">
          {/*we are linking through nav as we want to navigate qith navbar*/}
          <Link to="/">Home</Link>
        </li>
        <li className="list-none">
          <Link to="/TvShows">Tv Shows</Link>
        </li>
        <li className="list-none">
          <Link to="/Movies">Movies</Link>
        </li>
        <li className="list-none">
          <Link to="/Upcoming">Upcoming</Link>
        </li>
        <li className="list-none">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;