import React, { useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';

function Loginpopup({setshowlogin}) {
    const [currstate,setcurrstate] = useState('Signup');
    return ( 
        <>
        <div className="login-popup">
            <form  className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={()=>setshowlogin(false)} src={assets.cross_icon}/>
                </div>
                <div className="login-popup-inputs">
                    {currstate==="Login"?<></>:<input type='text' placeholder='Your Name' required></input>}
                    <input type='email' placeholder='Your Email' required/>
                    <input type='passward' placeholder='Enter The Passward'></input>
                </div>
                <button>{currstate==="Signup"?'Create account':'Login'}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currstate==='Login'
                 ?<p>Create a new account? <span onClick={()=>setcurrstate('Signup')}>Click here</span></p>
                 : <p>Already have an account?<span onClick={()=>setcurrstate('Login')}>Login here</span></p>
                }
            </form>
        </div>
        </>
     );
}

export default Loginpopup;