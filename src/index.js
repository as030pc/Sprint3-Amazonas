import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import AppRouter from './routers/AppRouter';


ReactDOM.render(
  <React.StrictMode>
   
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

