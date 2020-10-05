
import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";


 const useStyles = makeStyles((theme) => ({
    grow: {
      position: "fixed",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: "5px 5px 5px 5px",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
  
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "400px",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      right: "0px",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#29292C",
      borderRadius: "0px 5px 5px 0px",
      padding: "4px",
      color: "#8B8B8D",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      paddingLeft: "10px",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));

  export default useStyles