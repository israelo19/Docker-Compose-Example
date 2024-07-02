
import***REMOVED***React***REMOVED***from***REMOVED***"react";
import***REMOVED***ReactDOM***REMOVED***from***REMOVED***"react-dom";

import***REMOVED*******REMOVED***as***REMOVED***serviceWorker***REMOVED***from***REMOVED***"./serviceWorker";

import***REMOVED***'./index.css';
import***REMOVED***App***REMOVED***from***REMOVED***'./App';

ReactDOM.render(
***REMOVED******REMOVED***//***REMOVED***<Provider***REMOVED***store={store}>***REMOVED***//***REMOVED***this***REMOVED***is***REMOVED***for***REMOVED***later***REMOVED***(Redux)
***REMOVED******REMOVED******REMOVED******REMOVED***<App***REMOVED***/>
***REMOVED******REMOVED***//***REMOVED***</Provider>
***REMOVED******REMOVED***,
***REMOVED******REMOVED***document.getElementById("root")
);

serviceWorker.unregister();
