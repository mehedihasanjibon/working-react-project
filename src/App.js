import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  return (
    <div className='container'>
      <div className='header mb-3 mt-4'>
        <Header></Header>
      </div>

      <div className='main row'>

        <div className='home-container col-md-8'>
          <Home></Home>
        </div>
        <div className='sideCart col-md-4 card'>
          <SideCart></SideCart>
        </div>
      </div>
      
    </div>
  );
};

export default App;