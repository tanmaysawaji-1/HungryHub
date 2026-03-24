import React from 'react';
import './Menu.css';
import {menu_list} from '../../assets/assets.js';
function Menu() {
    return ( 
        <div className='menu' id='menu'>
            <h1>Explore our menu</h1>
            <p className='menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience.one delicious meal at a time</p>
            <div className='menu-list'>
                {menu_list.map((item, index)=>{
                    return(
                       <div key={index} className='menu-list-item'>
                        <img src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p> 
                       </div>
                    )
                })}
            </div>
            <hr/>
            <br></br>
        </div>
     );
}

export default Menu;