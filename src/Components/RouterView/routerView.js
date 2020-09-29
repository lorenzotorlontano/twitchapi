import React from "react";
import Login from "../../Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function RouterView() {
  return (
    <div style={{
      position: 'relative',
      top: '70px',
      backgroundColor: "#18181B",
      height: "100vh",
      width: "100%",
      zIndex: "-1"
    }}>
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

export default RouterView;
