import './App.css';
import Device from './components/Device/Device';
import Knob from './components/Knob/Knob';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Knob steps="456"></Knob>
      <Device name="uPhone" price="13000"></Device>
      <Device name="Samsung" price="11000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;