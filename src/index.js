import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import AppRouter3 from './routers/AppRouter3';

import {Provider} from "react-redux"
import {store} from "./store/store"

ReactDOM.render(
 
   // <AuthProvider>

  <Provider store ={store}>
     <AppRouter3/>
  </Provider>
   // </AuthProvider>
    
  ,
  document.getElementById('root')
);

