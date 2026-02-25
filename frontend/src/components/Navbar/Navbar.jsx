import React,{useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';

function Navbar() {
    const [menu, setmenu] = useState("home");
    return (  
        <div className='navbar'>
            <img src={Logo} alt="logo" className='logo'/>
            <ul className='navbar-menu'>
                <li onClick={()=>setmenu('home')} className={menu==="home"?"active":""}>Home</li>
                <li onClick={()=>setmenu('menu')} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setmenu('mobile-app')} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
                <li onClick={()=>setmenu('contact-us')} className={menu==="contact-us"?"active":""}>Contact Us</li>
                </ul>
                <div className='navbar-right'>
                    <img src={search_icon} alt=''/>
                    <div className='navbar-search-icon'>
                        <img src={basket_icon} alt='basket'/>
                        <div className='dot'></div>
                    </div>
                    <button>Sign in </button>
                </div>
            
        </div>
    );
}

export default Navbar;