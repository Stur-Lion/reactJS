import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Liona from './child/liona.js'
import Lionb from './child/lionb.js'
import Lionc from './child/lionc.js'
import Nav from './child/nav.js'
import './index.css';
//import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <div>
        <Nav/>
        <Route path="/" exact component={Liona}/>
        <Route path="/lionb"  component={Lionb}/>
        <Route path="/lionc"  component={Lionc}/>
      </div>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
