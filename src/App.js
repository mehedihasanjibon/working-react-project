import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className='container'>
      <div className='header m-auto mb-3'>
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