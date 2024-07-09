import axios from 'axios';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [logs, setLog] = useState(false);
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const updateCounter = () => {
    axios.get('/api/count').then((result) => {
      if (result.data && result.data.count) {
        setCount(result.data.count)
      }
      //console.log({ details: result });
      console.log({ count });
    }).catch((e) => {
      console.log('Error Connecting', e)
    });
  }


  const reset = () => {
    axios.delete('/api/count').then((result) => {
      if (result.data && !Number.isNaN(+result.data.count)) {
        setCount(result.data.count)
      }
      //console.log({ details: result });
      console.log({ count });
    }).catch((e) => {
      console.log('Error Connecting', e)
    });
  }

  console.log({logs});

  // const login = () => {
  //   axios.get('/api/login').then((result) => {
  //     console.log({logs});

  //     // if (result === false) {
  //       // logs.data = true;
  //       setLog(result.data.loggedIn);
  //     // }


  //     console.log({logs});
  //   }).catch((e) => {
  //     console.log('Error Connecting', e)
  //   });

  // }


  const login = () => {
    axios.post('/api/login', { username, password })
      .then((result) => {
        setLog(result.data.loggedIn);
        console.log({ logs: result.data.loggedIn });
      })
      .catch((e) => {
        console.log('Error Connecting', e);
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

        <div className="textBox">
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="textBox">
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginBtn" onClick={login}>Login</button>
        
        <h2>{`Logged In: ${logs}`}</h2>
      </header>
    </div>
  );
}

export default App;
