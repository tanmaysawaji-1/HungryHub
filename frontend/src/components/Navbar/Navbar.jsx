import React,{useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';
import {Link} from 'react-router-dom';

function Navbar({setshowlogin}) {
    const [menu, setmenu] = useState("home");
    return (  
        <div className='navbar'>
            <img src={Logo} alt="logo" className='logo'/>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setmenu('home')} className={menu==="home"?"active":""}>Home</Link>
                <a  href='#menu' onClick={()=>setmenu('menu')} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setmenu('mobile-app')} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setmenu('contact-us')} className={menu==="contact-us"?"active":""}>Contact Us</a>
                </ul>
                <div className='navbar-right'>
                    <img src={search_icon} alt=''/>
                    <div className='navbar-search-icon'>
                        <img src={basket_icon} alt='basket'/>
                        <div className='dot'></div>
                    </div>
                    <button onClick={()=>setshowlogin(true)}>Sign in </button>
                </div>
            
        </div>
    );
}

export default Navbar;