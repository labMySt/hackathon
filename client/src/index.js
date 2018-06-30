import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

//------------------------------------------------------------------------------
import rootReduser from "./redusers";
import PrivateRoute from "./components/PrivateRoute";
import App from "./components/App";
import Main from "./components/landing/Main";
import SignUp from "./components/landing/SignUp";
import LognIn from "./components/landing/LognIn";
import Testing from "./components/testing/Testing";
import TraineeCabinet from "./components/landing/cabinet/trainee/TraineeCabinet";

import Aboutus from "./components/aboutus/Aboutus";

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReduser, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={SignUp} />
          <Route path="/lognin" component={LognIn} />
          <Route path="/test" component={Testing} />
          <Route path="/trainee_cabinet" component={TraineeCabinet} />
          <Route exact path="/aboutus" component={Aboutus} />
        </Switch>
      </App>
    </Router>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
