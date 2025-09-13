import './App.css'
import { Storeprovider } from './components/setprovider'
import Home from './components/home'
import Moviecard from './components/movie-card'

import  Navbar from './components/navbar'
import Moviedata from './components/useeffect'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Tvshows from './components/tv-swhows'
import Movies from './components/Movies'
import Upcoming from './components/upcoming'
import SearchPage from './components/searchpage'
import Details from './components/details'

function App(){

  

  return (
 <>
 <Storeprovider>
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TvShows" element={<Tvshows />} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Upcoming" element={<Upcoming />} />
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/detail" element={<Details/>}/>
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>




{/*dont use moviecard and movie data here it show the 
sam econtent in the home apsge and the movies section*/}



  </Storeprovider>
 </>
  )
}


export default App
