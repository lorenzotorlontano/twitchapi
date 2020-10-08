import React from "react";
import Login from "../../Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Hash from "../../Pages/Hash/hash"
import DetailsSearched from '../../Pages/DetailsSearched/detailsSearched'
import Following from '../../Pages/Following'
import DetailsFollowStremer from '../../Pages/DetailsFollowStremer/detailsFollowStremer'
import DetailsChannel from '../../Pages/DetailsChannel/detailsChannel'


function RouterView() {
  return (
    <div style={{
      position: 'relative',
      top: '64px',
      backgroundColor: "#18181B",
      height: "100vh",
      width: "100%",
      maxWidth: "100%",
      zIndex: "-1"
    }}>
      <Router>
        <Switch>
        <Route path="/hash">
            <Hash />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
          <Route path="/detailsSearched/:id">
            <DetailsSearched />
          </Route>
          <Route path="/detailsFollowStremer/:id">
            < DetailsFollowStremer/>
          </Route>
          <Route path="/detailsChannel/:id">
            < DetailsChannel/>
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
