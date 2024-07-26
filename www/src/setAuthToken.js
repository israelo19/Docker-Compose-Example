import axios from "axios"; //import axis 
 
//for getting ip
// const machine = window.location.href.replace('http://','').replace('https://','').split('/')[0].split(':')[0]

const apiMachineAddress = '/'
 //default for calls is this machine
axios.defaults.baseURL = apiMachineAddress
 //takes the token and adds it to every request
const setAuthToken = token => {

  if (token) {

    // Apply authorization token to every request if logged in

    axios.defaults.headers.common["Authorization"] = token;

  } else {

    // Delete auth header

    delete axios.defaults.headers.common["Authorization"];

  }

};
 
export default setAuthToken;

 