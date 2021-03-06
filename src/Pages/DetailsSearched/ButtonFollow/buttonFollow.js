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
import ItemSearched from "../ItemSearched/itemSearched";
import ButtonShowMore from '../ButtonShowMore/buttonShowMore'
import ButtonShow from '../ButtonShow/buttonShow'

function ButtonFollow({selectedIcon, handleSelection , selectedNotific, switchIcon, handleIcon, channels}) {
  
  return (
    <>
      <div style={{ display: "flex" }}>
        {selectedIcon.includes(channels) ? (
          <>
            <Button
              onClick={() => switchIcon(channels)}
              style={{
                backgroundColor: "#464649",
                marginRight: "10px",
                width: "25px",
                height: "30px",
                color: "white",
              }}
            >
              <FavoriteIcon />
            </Button>
            <Button
              onClick={() => handleIcon(channels)}
              style={{
                backgroundColor: "#464649",
                marginRight: "10px",
                width: "25px",
                height: "30px",
                color: "white",
              }}
            >
              {selectedNotific.includes(channels) ? (
                <NotificationsOffOutlinedIcon />
              ) : (
                <NotificationsIcon />
              )}
            </Button>
          </>
        ) : (
          <Button
            onClick={() => handleSelection(channels)}

            style={{
              color: "white",
              backgroundColor: "#772CE8",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {console.log('channels', channels)}
            <FavoriteIcon style={{}} />
            Segui
          </Button>
        )}
      </div> 
    </>
  );
}

export default ButtonFollow;
