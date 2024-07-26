import***REMOVED***axios***REMOVED***from***REMOVED***"axios";***REMOVED***//import***REMOVED***axis***REMOVED***
***REMOVED***
//for***REMOVED***getting***REMOVED***ip
//***REMOVED***const***REMOVED***machine***REMOVED***=***REMOVED***window.location.href.replace('http://','').replace('https://','').split('/')[0].split(':')[0]

const***REMOVED***apiMachineAddress***REMOVED***=***REMOVED***'/'
***REMOVED***//default***REMOVED***for***REMOVED***calls***REMOVED***is***REMOVED***this***REMOVED***machine
axios.defaults.baseURL***REMOVED***=***REMOVED***apiMachineAddress
***REMOVED***//takes***REMOVED***the***REMOVED***token***REMOVED***and***REMOVED***adds***REMOVED***it***REMOVED***to***REMOVED***every***REMOVED***request
const***REMOVED***setAuthToken***REMOVED***=***REMOVED***token***REMOVED***=>***REMOVED***{

***REMOVED******REMOVED***if***REMOVED***(token)***REMOVED***{

***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***Apply***REMOVED***authorization***REMOVED***token***REMOVED***to***REMOVED***every***REMOVED***request***REMOVED***if***REMOVED***logged***REMOVED***in

***REMOVED******REMOVED******REMOVED******REMOVED***axios.defaults.headers.common["Authorization"]***REMOVED***=***REMOVED***token;

***REMOVED******REMOVED***}***REMOVED***else***REMOVED***{

***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***Delete***REMOVED***auth***REMOVED***header

***REMOVED******REMOVED******REMOVED******REMOVED***delete***REMOVED***axios.defaults.headers.common["Authorization"];

***REMOVED******REMOVED***}

};
***REMOVED***
export***REMOVED***default***REMOVED***setAuthToken;

***REMOVED***