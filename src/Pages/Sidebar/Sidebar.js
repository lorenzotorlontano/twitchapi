import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StreamList from "../../Components/StreamList/index";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import RouterView from "../../Components/RouterView/routerView";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import Grid from "@material-ui/core/Grid";
import { searchChannels } from "../../Service/Api/Api";
import "../Sidebar/StyleSidebar/sidebar.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MainSideBar from "../Sidebar/MainSideBar/mainSideBar";
import useGetMyUser from "../../Hooks/useGetMyUser";
import useSearchChannels from "../../Hooks/useSearchChannels";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    padding: "0px",
  },
  drawerOpen: {
    width: drawerWidth,
    top: "65px",

    paddingBottom: "70px",
    color: "white",
    backgroundColor: "#1f1f23",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    margin: "0px",
    padding: "0px",
    backgroundColor: "#1f1f23",
    color: "white",
    width: theme.spacing(7) + 1,
    top: "65px",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "10px",
    color: "white",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({ streams, currentUrl }) {
  const classes = useStyles();
  const { data } = useGetMyUser();
  const theme = useTheme();
  const [isOver, setIsOver] = useState(false);
  const [users, setUsers] = useState(null);
  const [moreDown, setMoreDown] = useState(false);
  const [more, setMore] = useState(false);
  const [color, setColor] = useState("#333");
  const [border, setBorder] = useState("0");
  const [param, setParam] = useState("");
  const [userIcon, setUserIcon] = useState(null);
  const [overUserIcon, setOverUserIcon] = useState("");

  const handleDrawerClose = () => {
    return (
      setOpen(!open),
      open === false ? (setMore(false), setMoreDown(false)) : null
    );
  };

  const [open, setOpen] = useState(true);

  const switchStyle = () => {
    setColor("black");
    setBorder("1px solid #772ce8");
  };

  const switchDefault = () => {
    setColor("#333");
    setBorder("0");
  };

  const handleChange = (e) => {
    setParam(e.target.value);
  };

  const handleSearch = (e) => {
    searchChannels(param).then((re) => {
      setUsers(re.data.data);
    });
  };

  const handleDelete = () => {
    setUsers(null);
    setParam("");
  };

  const handleUserIcon = (name) => {
    let str = overUserIcon.concat(name, "&");
    setOverUserIcon(str);
  };

  const handleHideUserIcon = (name) => {
    const strSplit = overUserIcon.replace(`${name}&`, "");
    setOverUserIcon(strSplit);
  };

  let firstValue =
    Math.floor(streams?.length / 4) < 1 ? 1 : Math.floor(streams?.length / 4); //5

  let i = Math.floor(streams?.length / 2); // 10

  let j = Math.floor(streams?.length / 2 + streams?.length / 4); // 15

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <MainSideBar
          firstValue={firstValue}
          i={i}
          j={j}
          handleHideUserIcon={handleHideUserIcon}
          handleUserIcon={handleUserIcon}
          handleDelete={handleDelete}
          handleSearch={handleSearch}
          handleChange={handleChange}
          switchDefault={switchDefault}
          switchStyle={switchStyle}
          handleDrawerClose={handleDrawerClose}
          classes={classes}
          theme={theme}
          open={open}
          isOver={isOver}
          moreDown={moreDown}
          users={users}
          more={more}
          myUser={data}
          color={color}
          border={border}
          param={param}
          userIcon={userIcon}
          overUserIcon={overUserIcon}
          drawerWidth={drawerWidth}
          streams={streams}
          currentUrl={currentUrl}
        />
      </Drawer>
      <RouterView />
    </div>
  );
}
