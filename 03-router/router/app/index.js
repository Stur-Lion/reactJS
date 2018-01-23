import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Alion from './lion1.js';
import Blion from './lion2.js';
import Clion from './lion3.js';

ReactDOM.render(
  <Router>
    <div>
      <Route path="jsa" />
      <Route path="jsb" />
      <Route path="jsc" />
    </div>
  </Router>
)