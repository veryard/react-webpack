import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import App from './js/components/app';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>

        <Route path="/test">
          Hello
        </Route>
      </Switch>

      <Link to="/">Home</Link>
      <Link to="/test">test</Link>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));