import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';


ReactDOM.render(
 
   <AuthProvider>
     <AppRouter/>

   </AuthProvider>
    
  ,
  document.getElementById('root')
);

