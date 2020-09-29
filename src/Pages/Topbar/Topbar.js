import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { getStreams, getMe, getUsers } from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../Topbar/topbar.css";
import { searchCategories } from "../../Service/Api/Api";

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

export default function Topbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [me, setMe] = useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [color, setColor] = useState("#333");
  const [searchCate, setSearchCatego] = useState();
  const [param, setParam] = useState();

  const [border, setBorder] = useState("0");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  useEffect(() => {
    const resp = getMe().then((re) => {
      setMe(re.data.data[0]);
    });
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const switchStyle = () => {
    setColor("black");
    setBorder("1px solid #772ce8");
  };

  const switchDefault = () => {
    setColor("#333");
    setBorder("0");
  };

  const handleWrite = (e) => {
    setParam(e.target.value);
    console.log('cioa', e.event)
    if(e.key === "Enter" || e.keyCode === 13) {
      window.location.assign(`/detailsSearched/${param}`);
    }
  };

  console.log("param ", param);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Grid style={{ position: "fixed" }} container spacing={0}>
      <AppBar style={{ backgroundColor: "#18181B" }} position="static">
        <Toolbar style={{}}>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignSelf: "center",
              alignItems: "center",
            }}
            item
            xs={4}
            sm={4}
          >
            <img
              className="iconTwitch"
              src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
            />

            <div style={{ fontSize: "19px" }}>Seguito</div>
            <div style={{ fontSize: "19px" }}>Sfoglia</div>
            <div
              style={{ backgroundColor: "white", height: "40px", width: "1px" }}
            ></div>
            <div style={{ fontSize: "19px" }}>Esports</div>
            <div style={{ fontSize: "19px" }}>Musica</div>
            <MoreHorizIcon />
          </Grid>

          <Grid item xs={4} sm={4}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ fontSize: "32px" }} />
              </div>
              <InputBase
                onKeyUp={(e) => handleWrite(e)}
                // onBlur={switchDefault}
                // onClick={switchStyle}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>

          <Grid
            style={{
              display: "flex",
              alignContent: "flex-start",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            item
            xs={4}
            sm={4}
          >
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <CardGiftcardIcon style={{ width: "20px" }} />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsNoneOutlinedIcon style={{ width: "20px" }} />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ChatBubbleOutlineOutlinedIcon style={{ width: "20px" }} />
              </Badge>
            </IconButton>

            <Button style={{ color: "white" }}>Compra Bit</Button>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {me ? (
                <img
                  src={me.profile_image_url}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              ) : null}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Grid>
  );
}
