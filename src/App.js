import './App.css';
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
      <Device name="uPhone" price="13000"></Device>
      <Device name="Samsung" price="11000"></Device>
    </div>
  );
}

export default App;