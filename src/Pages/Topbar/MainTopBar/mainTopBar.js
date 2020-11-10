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
import "../../Topbar/topbar.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function MainTopBar({
  renderMenu,
  handleWrite,
  switchDefault,
  switchStyle,
  handleMobileMenuOpen,
  border,
  param,
  searchCate,
  classes,
  useStyles,
  color,
  data,
  menuId,
  handleProfileMenuOpen,
  renderMobileMenu,
}) {
  const toFollowing = () => {
    window.location.assign("/following");
  };

  const returnHome = () => {
    window.location.assign("/home");
  };

  return (
    <>
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
              onClick={() => returnHome()}
              style={{ cursor: "pointer" }}
            />
            <div
              style={{ fontSize: "19px", cursor: "pointer" }}
              onClick={() => toFollowing()}
            >
              Seguito
            </div>
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
              {data ? (
                <img
                  src={data.data[0].profile_image_url}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              ) : null}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default MainTopBar;
