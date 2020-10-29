import React, { useEffect, useState } from "react";
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
import StreamList from "../../../Components/StreamList/index";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import Grid from "@material-ui/core/Grid";
import "../../Sidebar/StyleSidebar/sidebar.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

function MainSideBar({
  firstValue,
  i,
  j,
  handleHideUserIcon,
  handleUserIcon,
  handleDelete,
  handleSearch,
  handleChange,
  switchDefault,
  switchStyle,
  handleDrawerClose,
  classes,
  theme,
  open,
  isOver,
  users,
  myUser,
  currentId,
  color,
  border,
  param,
  userIcon,
  overUserIcon,
  drawerWidth,
  streams,
  currentUrl,
}) {
  const [more, setMore] = useState(false);
  const [moreDown, setMoreDown] = useState(false);

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  return (
    <>
      {users === null ? (
        <>
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
                display: "flex",
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
        </>
      ) : (
        <div style={{ display: "flex", color: "white" }}>
          {users && (
            <Grid container style={{ marginBottom: "30px" }}>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                RISULTATI
              </div>
              {users &&
                users.map((val, index) => {
                  if (index > 10) {
                    return null;
                  } else {
                    return (
                      <Grid
                        onMouseOver={() => handleUserIcon(val.display_name)}
                        onMouseOut={() => handleHideUserIcon(val.display_name)}
                        style={{
                          alignSelf: "center",
                          display: "flex",
                          marginLeft: "10px",
                        }}
                        item
                        md={12}
                      >
                        {console.log("dio", val)}
                        <Grid
                          onClick={() => handleBrowseToChannelDetails(val.id)}
                          item
                          md={2}
                        >
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              alignSelf: "center",
                              borderRadius: "50%",
                            }}
                            src={val.thumbnail_url}
                          />
                        </Grid>
                        <Grid
                          item
                          md={8}
                          style={{ alignSelf: "center", marginLeft: "10px" }}
                        >
                          <span>{val.display_name}</span>
                        </Grid>
                        <Grid
                          md={2}
                          item
                          style={{ alignSelf: "center", right: "0px" }}
                        >
                          {overUserIcon.includes(val.display_name) ? (
                            <GroupAddOutlinedIcon />
                          ) : null}
                        </Grid>
                      </Grid>
                    );
                  }
                })}
            </Grid>
          )}
        </div>
      )}
      <>
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
              value={param}
              onChange={handleChange}
              onKeyUp={(e) => handleSearch(e)}
              onBlur={switchDefault}
              onClick={switchStyle}
              style={{ color: "white", fontSize: "13px", width: "100%" }}
              placeholder="Cerca a aggiungi i tuoi amici"
              classes={{}}
              inputProps={{ "aria-label": "search" }}
            />
            <ClearOutlinedIcon
              onClick={() => handleDelete()}
              style={{
                width: "18px",
                alignSelf: "center",
                color: "blue",
                paddingRight: "5px",
              }}
            />
          </div>
        ) : null}
      </>
    </>
  );
}

export default MainSideBar;
