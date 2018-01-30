import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom';
import Liona from './child/liona.js';
import Lionb from './child/lionb.js';
import Lionc from './child/lionc.js';
import Error from './child/error.js';
import Nav from './child/nav.js';
import './index.css';

//import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router basename="api">
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Liona}/>
          <Route path="/lionb"  component={Lionb}/>
          <Route path="/lionc/:react" exact component={Lionc}/>
          <Redirect from="/redirct" to="/lionb" />
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
