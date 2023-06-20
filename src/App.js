import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Noakhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="moyna and moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  padding: '20px',
  borderRadius: '20px',
  margin:'20px'
}

function District(props){
  const [power, setPower] =  useState(1);

  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }

  return(
    <div style={districtStyle}>
      <h2> Name: {props.name}</h2>
      <p> Specialty: {props.special}</p>
      <h4> Power: {power}</h4>
      <button onClick={boostPower}> Boost The Power </button>
    </div>
  )
}

export default App;
