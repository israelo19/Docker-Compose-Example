import axios from 'axios';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';




const App = () => {

  const [count, setCount] = useState(0)
  const updateCounter = () => {
    axios.get('/api/count').then((result) => {
      if(result.data && result.data.count){
        setCount(result.data.count)
      }
      //console.log({ details: result });
      console.log({count});
    }).catch((e) => {
      console.log('Error Connecting', e)
    });
  }


  const reset = () => {
    axios.delete('/api/count').then((result) => {
      if(result.data && !Number.isNaN(+result.data.count)){
        setCount(result.data.count)
      }
      //console.log({ details: result });
      console.log({count});
    }).catch((e) => {
      console.log('Error Connecting', e)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SSPA-Israel    <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={updateCounter}>{`Current Count ${count}`}</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}



export default App;
