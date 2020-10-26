import React from "react";
import { NavLink } from "react-router-dom";
import HomeCarousel from "../HomeCarousel";
import Login from "../../Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import DetailsSearched from "../../Pages/DetailsSearched/detailsSearched";
import Following from "../../Pages/Following";
import DetailsFollowStremer from "../../Pages/DetailsFollowStremer/detailsFollowStremer";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FollowingPage from "../../Components/FollowingPage";
import { RootRef } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import FollowingVideosTab from "../FollowingVideosTab/followingVideosTab";
import FollowingLiveTabs from "../../Components/FollowingLiveTabs/followingLiveTabs";
import FollowingChannelsTab from "../../Components/FollowingChannelsTab";

export default function FollowingNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Router>
        <h1
          style={{
            color: "whitesmoke",
            textAlign: "left",
            marginLeft: "17px",
          }}
        >
          Following
        </h1>
        <div className={classes.followingCategoriesWrapper}>
          <Grid
            container
            spacing={0}
            className={classes.followingCategoriesGrid}
          >
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following"
                activeClassName="active"
              >
                Overview
              </NavLink>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following/live"
                activeClassName="active"
              >
                Live
              </NavLink>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following/videos"
                activeClassName="active"
              >
                Videos
              </NavLink>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following/hosts"
                activeClassName="active"
              >
                Hosts
              </NavLink>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following/categories"
                activeClassName="active"
              >
                Categories
              </NavLink>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              className={classes.followingCategories}
            >
              <br />
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  fontSize: "normal",
                }}
                to="/following/channels"
                activeClassName="active"
              >
                Channels
              </NavLink>
            </Grid>
          </Grid>
        </div>
        <Switch>
          <Route
            path="/following/live"
            exact
            component={FollowingLiveTabs}
          ></Route>
          <Route
            path="/following/videos"
            exact
            component={FollowingVideosTab}
          ></Route>
          <Route path="/following/hosts"></Route>
          <Route path="/following/categories"></Route>
          <Route
            path="/following/channels"
            component={FollowingChannelsTab}
          ></Route>
          <Route path="/following" exact component={FollowingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}
