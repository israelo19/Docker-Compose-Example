import***REMOVED***axios***REMOVED***from***REMOVED***'axios';
import***REMOVED***React,***REMOVED***{***REMOVED***useState***REMOVED***}***REMOVED***from***REMOVED***'react';
import***REMOVED***logo***REMOVED***from***REMOVED***'./logo.svg';
import***REMOVED***'./App.css';

const***REMOVED***App***REMOVED***=***REMOVED***()***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED***const***REMOVED***[logs,***REMOVED***setLog]***REMOVED***=***REMOVED***useState(false);
***REMOVED******REMOVED***const***REMOVED***[count,***REMOVED***setCount]***REMOVED***=***REMOVED***useState(0);
***REMOVED******REMOVED***const***REMOVED***[username,***REMOVED***setUsername]***REMOVED***=***REMOVED***useState('');
***REMOVED******REMOVED***const***REMOVED***[password,***REMOVED***setPassword]***REMOVED***=***REMOVED***useState('');


***REMOVED******REMOVED***const***REMOVED***updateCounter***REMOVED***=***REMOVED***()***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***axios.get('/api/count').then((result)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***if***REMOVED***(result.data***REMOVED***&&***REMOVED***result.data.count)***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***setCount(result.data.count)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//console.log({***REMOVED***details:***REMOVED***result***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({***REMOVED***count***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED***}).catch((e)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error***REMOVED***Connecting',***REMOVED***e)
***REMOVED******REMOVED******REMOVED******REMOVED***});
***REMOVED******REMOVED***}


***REMOVED******REMOVED***const***REMOVED***reset***REMOVED***=***REMOVED***()***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***axios.delete('/api/count').then((result)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***if***REMOVED***(result.data***REMOVED***&&***REMOVED***!Number.isNaN(+result.data.count))***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***setCount(result.data.count)
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//console.log({***REMOVED***details:***REMOVED***result***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({***REMOVED***count***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED***}).catch((e)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error***REMOVED***Connecting',***REMOVED***e)
***REMOVED******REMOVED******REMOVED******REMOVED***});
***REMOVED******REMOVED***}

***REMOVED******REMOVED***console.log({logs});

***REMOVED******REMOVED***//***REMOVED***const***REMOVED***login***REMOVED***=***REMOVED***()***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED***axios.get('/api/login').then((result)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({logs});

***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***if***REMOVED***(result***REMOVED***===***REMOVED***false)***REMOVED***{
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***logs.data***REMOVED***=***REMOVED***true;
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***setLog(result.data.loggedIn);
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***}


***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({logs});
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED***}).catch((e)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error***REMOVED***Connecting',***REMOVED***e)
***REMOVED******REMOVED***//***REMOVED******REMOVED******REMOVED***});

***REMOVED******REMOVED***//***REMOVED***}


***REMOVED******REMOVED***const***REMOVED***login***REMOVED***=***REMOVED***()***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***axios.post('/api/login',***REMOVED***{***REMOVED***username,***REMOVED***password***REMOVED***})
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.then((result)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***setLog(result.data.loggedIn);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({***REMOVED***logs:***REMOVED***result.data.loggedIn***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***})
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***.catch((e)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log('Error***REMOVED***Connecting',***REMOVED***e);
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***});
***REMOVED******REMOVED***}



***REMOVED******REMOVED***return***REMOVED***(
***REMOVED******REMOVED******REMOVED******REMOVED***<div***REMOVED***className="App">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<header***REMOVED***className="App-header">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<img***REMOVED***src={logo}***REMOVED***className="App-logo"***REMOVED***alt="logo"***REMOVED***/>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<p>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***SSPA-Israel***REMOVED******REMOVED******REMOVED******REMOVED***<code>src/App.js</code>***REMOVED***and***REMOVED***save***REMOVED***to***REMOVED***reload.
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</p>

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<button***REMOVED***onClick={updateCounter}>{`Current***REMOVED***Count***REMOVED***${count}`}</button>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<button***REMOVED***onClick={reset}>Reset</button>

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<div***REMOVED***className="textBox">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<input***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type="text"***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***placeholder="Enter***REMOVED***Username"***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***value={username}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***onChange={(e)***REMOVED***=>***REMOVED***setUsername(e.target.value)}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***/>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</div>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<div***REMOVED***className="textBox">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<input***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type="password"***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***placeholder="Enter***REMOVED***Password"***REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***value={password}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***onChange={(e)***REMOVED***=>***REMOVED***setPassword(e.target.value)}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***/>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</div>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<button***REMOVED***className="loginBtn"***REMOVED***onClick={login}>Login</button>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<h2>{`Logged***REMOVED***In:***REMOVED***${logs}`}</h2>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</header>
***REMOVED******REMOVED******REMOVED******REMOVED***</div>
***REMOVED******REMOVED***);
}

export***REMOVED***default***REMOVED***App;
