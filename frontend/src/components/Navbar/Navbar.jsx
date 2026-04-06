import React,{useContext, useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

function Navbar({setshowlogin}) {
    const [menu, setmenu] = useState("home");
    const {getTotalCartAmount,token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (  
        <div className='navbar'>
            <Link to='/'><img src={Logo} alt="logo" className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setmenu('home')} className={menu==="home"?"active":""}>Home</Link>
                <a  href='#menu' onClick={()=>setmenu('menu')} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setmenu('mobile-app')} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setmenu('contact-us')} className={menu==="contact-us"?"active":""}>Contact Us</a>
                </ul>
                <div className='navbar-right'>
                    <img src={search_icon} alt=''/>
                    <div className='navbar-search-icon'>
                        <Link to='/cart'><img src={basket_icon} alt='basket'/></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    {!token?<button onClick={()=>setshowlogin(true) }>Sign in </button>
                    :<div className='navbar-profile'>
                        <img src={assets.profile_icon}/>
                        <ul className="nav-profile-dropdown">
                           <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                           <hr />
                           <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li> 
                        </ul>
                        </div>}
                </div>
            
        </div>
    );
}

export default Navbar;