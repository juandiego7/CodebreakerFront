import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js/dist/umd/popper.min.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import Page404 from './Components/Page404';
import Guess from './Components/Guess';
import { Route } from 'react-router';
import { BrowserRouter , Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Guess}/>
        <Route path="/Inicio" component={Guess}/>
        <Route component={Page404}/> 
      </Switch>
      </App>
    </BrowserRouter>
  ), document.getElementById('root'));

  registerServiceWorker();