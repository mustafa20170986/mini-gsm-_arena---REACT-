

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Brand from './pages/brands'
import PhoneCard from './components/phone-card'
import Samusung from './pages/samusung'
import { Setprovider } from './components/setprodiver'
import Oppo from './pages/oppo'
import Vivo from './pages/vivo'
import Xiaomi from './pages/xiaomi'
import Iphone from './pages/iphone'
import Phonedetails from './components/phone-details'
import Phonelist from './pages/find-phone'



function App() {


  return (
   
    <div data-theme="nord">
      <Setprovider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/brands" element={<Brand/>}></Route>
<Route path="/samusung" element={<Samusung/>}></Route>
<Route path="/oppo" element={<Oppo/>}></Route>
<Route path="/vivo" element={<Vivo/>}></Route>
<Route path="/xiaomi" element={<Xiaomi/>}></Route>
<Route path="/iphone" element={<Iphone/>}></Route>
<Route path="/phones/:brand/:name" element={<Phonedetails/>}></Route>
<Route path="/price" element={<Phonelist/>}></Route>
      </Routes>
  
      </BrowserRouter>
 </Setprovider>
    </div>
    
  )
}

export default App
