import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import {Provider} from "react-redux"
import {store} from "./store/store"

ReactDOM.render(
 
   <AuthProvider>

  <Provider store ={store}>
     <AppRouter/>

  </Provider>
    

   </AuthProvider>
    
  ,
  document.getElementById('root')
);

