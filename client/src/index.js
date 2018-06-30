import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

//------------------------------------------------------------------------------
import rootReduser from './redusers';
import PrivateRoute from './components/PrivateRoute';
import App from './components/App';
import Main from './components/landing/Main';
import SignUp from './components/landing/SignUp';

import Aboutus from './components/aboutus/Aboutus';


const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReduser, middleware);

ReactDOM.render(
  <Provider store = {store}>
  <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route  path="/signup" component={SignUp}/>

          <Route exact path="/aboutus" component={Aboutus}/>
        </Switch>
      </App>
    </Router>
</Provider>,

  document.getElementById('root'));
registerServiceWorker();