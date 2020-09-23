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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import RouterView from "../../Components/RouterView/routerView";
import { getStreams, getMe, getUsers } from "../../Service/Api/Api";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  },
  drawerOpen: {
    width: drawerWidth,
    top: "65px",
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
    width: theme.spacing(7) + 1,
    top: "65px",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "10px",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [streams, setStreams] = useState();
  const [users, setUsers] = useState();
  const [currentId, setCurrentId] = useState();
  const [currentUrl, setCurrentUrl] = useState(null);

  const [me, setMe] = useState();

  useEffect(() => {
    const resp = getStreams().then((re) => {
      setStreams(re.data.data);
      console.log("sto facendo il console log STREAMS   ", re.data.data);
    });
  }, []);

  useEffect(() => {
    const resp = getMe().then((re) => {
      setMe(re.data);
      console.log("sto facendo il console log di MEEE   ", re.data.data);
    });
  }, []);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let arrayUrl = [];
    console.log("dabfv", streams !== undefined ? streams[0].user_id : null);
    if (streams !== undefined) {
      streams.map((va, i) => {
        let resp = getUsers(va.user_id && va.user_id).then((re) => {
          console.log(re.data.data[0].profile_image_url);
          arrayUrl.push(re.data.data[0].profile_image_url);
        });
        setCurrentUrl(arrayUrl);
      });
    }
  }, [streams]);

  console.log(currentUrl);
  return streams !== undefined ? (
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {currentUrl &&
            streams.map((text, index) =>
              index < 6 ? (
                <ListItem key={index} button>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={currentUrl[index]}
                  />

                  <ListItemText primary={text.user_name} />
                  <ListItemText primary={text.viewer_count} />
                </ListItem>
              ) : null
            )}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <RouterView />
    </div>
  ) : null;
}
