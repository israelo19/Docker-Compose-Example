import axios from 'axios';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import setAuthToken from './setAuthToken';

const App = () => {
  const [logs, setLog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [count, setCount] = useState(0)
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
  

  if(localStorage.jwttoken){
    setAuthToken(localStorage.jwttoken)
  }else{
    
  }
  console.log({logs});

  const checkDatabase = () => {
      axios.get('/api/db/test').then((data) => {

          console.log({details:data});

      }).catch((e) => {

          console.log('Error Connecting', e)

      });     

  }
 checkDatabase()

  const getPosts = () => {
    axios.get('/api/posts') 
    .then((posts) => {
      console.log({posts})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  const login = () => {
    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwttoken', result.data.accessToken )
        localStorage.setItem('userId', result.data.userId)  // Store the user ID
        setLog(true)
        console.log({ logs: result.data.loggedIn });
      })
      .catch((e) => {
        console.log('Error Connecting', e);
      });
  }

  const logout = () => {
    localStorage.removeItem('jwttoken')
    setLog(false)
    // window.location.reload()
  }


  // Add this function in App.js
const getUserIdFromToken = () => {
  const token = localStorage.getItem('jwttoken');
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload).id;  // Assuming 'id' is the key for user ID in your token payload
  }
  return null;
}

  // let isLoggedIn = localStorage.jwttoken ? true : false
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SSPA-Israel    <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={updateCounter}>{`Current Count ${count}`}</button>
        <button onClick={deleteUser}>Delete User</button>

        {(!logs && (
          <>
              <div className="textBox">
                <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="textBox">
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <button className="loginBtn" onClick={login}>Login</button>
          </>
        )) || null} 

        {(logs && (
          <>  
              <button className="logoutBtn" onClick={logout}>Logout</button>
              <button className="getPostsBtn" onClick={getPosts}>Get Posts</button>
          </>
        )) || null} 

        
        <h2>{`Logged In: ${logs}`}</h2>
      </header>
    </div>
  );
}

export default App;
