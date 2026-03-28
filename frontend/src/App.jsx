import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import './App.css';
import Footer from './pages/Home/Footer';
import Loginpopup from './pages/Home/Loginpopup';

function App() {
  const[showlogin, setshowlogin] = useState(false);
  return (  
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}

    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;