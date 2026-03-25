import React, { useState } from 'react';
import './FoodItem.css';
import {assets} from './../../assets/assets.js';
function FoodItem({id, name ,price, description , image}){
    const [itemcount , setitemcount] = useState(0);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} alt={name} />
                {!itemcount
                    ?<img onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_white}/>
                    :<div className="food-item-counter">
                        <img onClick={()=>setitemcount(prev=>prev-1)} src={assets.remove_icon_red}/>
                        <p>{itemcount}</p>
                        <img onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_green}/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts}/>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;