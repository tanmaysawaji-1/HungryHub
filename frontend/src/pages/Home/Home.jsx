import React from 'react';
import './Home.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';
import Foodisplay from './Foodisplay/Foodisplay';
import Appdownload from './Appdownload';

function Home() {
    const [category, setcategory] = useState('all');
    return (  
        <>
        <Header/>
        <Menu category={category} setcategory={setcategory}/>
        <Foodisplay category={category}/>
        <Appdownload/>
        </>
    );
}

export default Home;