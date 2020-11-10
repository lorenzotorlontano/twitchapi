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
import Grid from "@material-ui/core/Grid";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../Topbar/topbar.css";
import MainTopBar from "../Topbar/MainTopBar/mainTopBar";
import useStyles from "../Topbar/StyleCustom/useStyles";
import Switch from "@material-ui/core/Switch";
import useGetMe from "../../Hooks/useGetMe";

export default function Topbar() {
  const classes = useStyles();

  const { data } = useGetMe();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [color, setColor] = useState("#333");
  const [searchCate, setSearchCatego] = useState();
  const [param, setParam] = useState();

  const [online, setOnline] = useState("Offline");

  const [border, setBorder] = useState("0");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

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
    if (e.key === "Enter" || e.keyCode === 13) {
      window.location.assign(`/detailsSearched/${param}`);
    }
  };

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
      <Grid container>
        <Grid style={{ display: "flex", margin: "5px" }} item md={12}>
          {data ? (
            <img
              src={data.data.profile_image_url}
              style={{ width: "30px", borderRadius: "50%" }}
            />
          ) : null}
          <div>
            <span>{data && data.data.display_name}</span>
            <div>{online}</div>
          </div>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "center",
          }}
          item
          md={12}
        >
          <div style={{ display: "flex", alignSelf: "center" }}>
            <span>{online}</span>
          </div>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
        </Grid>
      </Grid>
    </Menu>
  );

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
      <MainTopBar
        renderMobileMenu={renderMobileMenu}
        renderMenu={renderMenu}
        handleWrite={handleWrite}
        switchDefault={switchDefault}
        switchStyle={switchStyle}
        handleMobileMenuOpen={handleMobileMenuOpen}
        border={border}
        param={param}
        searchCate={searchCate}
        classes={classes}
        useStyles={useStyles}
        color={color}
        data={data}
        menuId={menuId}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Grid>
  );
}
