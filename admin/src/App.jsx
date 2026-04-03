import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return ( 
    <div>
    <Navbar/>
    <hr/>
    <div className='app-content'>
    <Sidebar/>
    </div>
    </div>
   );
}

export default App;