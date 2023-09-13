import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <Header></Header>
      </div>
    </div>
  );
};

export default App;