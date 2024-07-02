
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import './index.css';
import App from './App';

ReactDOM.render(
  // <Provider store={store}> // this is for later (Redux)
    <App />
  // </Provider>
  ,
  document.getElementById("root")
);

serviceWorker.unregister();
