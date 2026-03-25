import React from 'react';
import './Home.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';
import Foodisplay from './Foodisplay/foodisplay';

function Home() {
    const [category, setcategory] = useState('all');
    return (  
        <>
        <Header/>
        <Menu category={category} setcategory={setcategory}/>
        <Foodisplay category={category}/>
        </>
    );
}

export default Home;