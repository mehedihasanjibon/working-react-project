import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>

      <div>
        <div className='home-container'>
          <Home></Home>
        </div>
        <div className='sideCart'>

        </div>
      </div>

    </div>
  );
};

export default App;