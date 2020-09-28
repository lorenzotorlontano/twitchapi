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
import { getStreams, getMe, getUsers, getMyUser } from "../../Service/Api/Api";
import "../Sidebar/StyleSidebar/sidebar.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({ streams, currentUrl }) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState();
  const [moreDown, setMoreDown] = useState(false);
  const [more, setMore] = useState(false);
  const [myUser, setMyUser] = useState();
  const [currentId, setCurrentId] = useState();
  const [color, setColor] = useState("#333");
  const [border, setBorder] = useState("0");

  useEffect(() => {
    const resp = getMyUser().then((re) => {
      setMyUser(re);
    });
  }, []);

  const handleDrawerClose = () => {
    return (
      setOpen(!open),
      open === false ? (setMore(false), setMoreDown(false)) : null
    );
  };

  const switchStyle = () => {
    setColor("black");
    setBorder("1px solid #772ce8");
  };

  const switchDefault = () => {
    setColor('#333')
    setBorder('0')
  }

  let firstValue =
    Math.floor(streams.length / 4) < 1 ? 1 : Math.floor(streams.length / 4); //5

  let i = Math.floor(streams.length / 2); // 10

  let j = Math.floor(streams.length / 2 + streams.length / 4); // 15

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
        <div style={{ display: "flex" }}>
          {open === true ? (
            <div
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "12px",
                padding: "10px",
                alignSelf: "center",
              }}
            >
              Canali che segui
            </div>
          ) : null}

          <IconButton
            style={{
              color: "white",
              diplay: "flex",
              marginLeft: open === true ? "55px" : null,
            }}
            onClick={handleDrawerClose}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {open === true ? (
          <div style={{ padding: "0px" }}>
            <List style={{ padding: "0px" }}>
              {currentUrl &&
                streams.map((text, index) =>
                  index < firstValue ? (
                    <StreamList
                      text={open === true ? text : null}
                      index={index}
                      currentUrl={currentUrl[index]}
                    />
                  ) : null
                )}

              {more
                ? streams.map((text, index) =>
                    index + firstValue < i ? (
                      <StreamList
                        text={open === true ? text : null}
                        index={index + firstValue}
                        currentUrl={currentUrl[index + firstValue]}
                      />
                    ) : null
                  )
                : null}

              {!more && streams.length > 3 ? (
                <button
                  className="showMoreButton"
                  onClick={() => setMore(true)}
                >
                  Mostra di più
                </button>
              ) : null}
              {more && streams.length > 3 ? (
                <div>
                  <button
                    className="showMoreButton"
                    onClick={() => setMore(false)}
                  >
                    Mostra di meno
                  </button>
                </div>
              ) : null}
            </List>
            <Divider />
            <List style={{}}>
              {currentUrl &&
                streams.map((text, index) =>
                  index + i < j ? (
                    <StreamList
                      text={open === true ? text : null}
                      index={index + i}
                      currentUrl={currentUrl[index + i]}
                    />
                  ) : null
                )}

              {moreDown && streams
                ? streams.map((text, index) =>
                    index + j < streams.length ? (
                      <StreamList
                        text={open === true ? text : null}
                        index={index + j}
                        currentUrl={currentUrl[index + j]}
                      />
                    ) : null
                  )
                : null}

              {!moreDown && streams.length >= 3 ? (
                <div>
                  <button
                    className="showMoreButton"
                    onClick={() => setMoreDown(true)}
                  >
                    Mostra di meno
                  </button>
                </div>
              ) : null}

              {moreDown && streams.length >= 3 ? (
                <div>
                  <button
                    className="showMoreButton"
                    onClick={() => setMoreDown(false)}
                  >
                    Mostra di meno
                  </button>
                </div>
              ) : null}
            </List>
          </div>
        ) : (
          <div>
            {currentUrl && streams
              ? streams.map((text, index) =>
                  index < i ? (
                    <StreamList
                      text={open === true ? text : null}
                      index={index}
                      currentUrl={currentUrl[index]}
                    />
                  ) : null
                )
              : null}
            <Divider />
            {currentUrl && streams
              ? streams.map((text, index) =>
                  index + i < streams.length ? (
                    <StreamList
                      text={open === true ? text : null}
                      index={index + i}
                      currentUrl={currentUrl[index + i]}
                    />
                  ) : null
                )
              : null}
          </div>
        )}
        <Divider style={{ marginBottom: "20px" }} />
        {open === true ? (
          <div
            style={{
              display: "flex",
              position: "fixed",
              bottom: "5px",
              backgroundColor: color,
              color: "white",
              alignSelf: "center",
              borderRadius: "5px",
              height: "30px",
              marginTop: "10px",
              width: "220px",
              border: border,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                color: "#ADADB8",
                padding: "2px",
              }}
            >
              <SearchIcon />
            </div>
            <InputBase
            onBlur={switchDefault}
              onClick={switchStyle}
              style={{ color: "white", fontSize: "13px", width: "100%" }}
              placeholder="Cerca a aggiungi i tuoi amici"
              classes={{}}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        ) : null}
      </Drawer>

      <RouterView />
    </div>
  );
}
