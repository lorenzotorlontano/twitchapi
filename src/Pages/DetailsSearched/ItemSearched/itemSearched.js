import React, { useEffect, useState } from "react";
import { searchCategories, searchChannels } from "../../../Service/Api/Api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffOutlinedIcon from "@material-ui/icons/NotificationsOffOutlined";
import ButtonFollow from "../ButtonFollow/buttonFollow";
function ItemSearched({
  channels,
  all,
  selectedIcon,
  handleIcon,
  selectedNotific,
  handleSelection,
  switchIcon,
  id,
}) {
  const browse = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  return (
    <>
      {channels &&
        channels.map((val, index) => {
          if (index < 5 && all === false) {
            return (
              <Grid
                style={{
                  display: "flex",
                  backgroundColor: "#0E0E10",
                  paddingTop: "20px",
                }}
                item
                md={12}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  item
                  md={3}
                  onClick={() => browse(val.id)}
                >
                  {console.log("va", val)}
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "120px",
                      height: "120px",
                    }}
                    src={val.thumbnail_url}
                  />
                </Grid>

                <Grid style={{ marginTop: "20px" }} item md={4}>
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {val.display_name}
                    </span>

                    <ButtonFollow
                      selectedIcon={selectedIcon && selectedIcon}
                      handleSelection={handleSelection}
                      selectedNotific={selectedNotific}
                      switchIcon={switchIcon}
                      handleIcon={handleIcon}
                      channels={val.display_name}
                    />
                  </div>
                </Grid>
              </Grid>
            );
          } else {
            return null;
          }
        })}
    </>
  );
}

export default ItemSearched;
