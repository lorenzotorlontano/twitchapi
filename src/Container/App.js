import React from "react";
import Login from "../Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
