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
import ButtonFollow from '../ButtonFollow/buttonFollow'

function MainDetailsSearched({
  showAll,
  showMore,
  handleSelection,
  handleIcon,
  switchIcon,
  channels,
  selectedIcon,
  selectedNotific,
  all,
  id,
  categories,
  more,
}) {
  return (
    <>
      <div style={{ padding: "30px", fontSize: "18px", fontWeight: "bold" }}>
        Canali
      </div>
      <span
        style={{
          height: "1px",
          marginRight: "30px",
          marginLeft: "30px",
          width: "100%",
          backgroundColor: "white",
        }}
      ></span>

      <ItemSearched
        channels={channels}
        all={all}
        selectedIcon={selectedIcon}
        selectedNotific={selectedNotific}
        handleSelection={handleSelection}
        switchIcon={switchIcon}
        handleIcon={handleIcon}
      />

      <div
        style={{ backgroundColor: "#0E0E10", width: "100%", color: "white" }}
      >
        {more === true && channels
          ? channels.map((va, i) => {
              if (i >= 5 && i < 10 && all === false) {
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
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "120px",
                          height: "120px",
                        }}
                        src={va.thumbnail_url}
                      />
                    </Grid>

                    <Grid style={{}} item md={4}>
                      <div
                        style={{
                          display: "flex",
                          alignSelf: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {va.display_name}
                        </span>

                        <ButtonFollow
                          selectedIcon={selectedIcon}
                          handleSelection={handleSelection}
                          selectedNotific={selectedNotific}
                          switchIcon={switchIcon}
                          handleIcon={handleIcon}
                          channels={channels}
                        />


                      </div>
                    </Grid>
                  </Grid>
                );
              } else {
                return null;
              }
            })
          : null}
        {channels && channels.length > 5 && all === false && more === false ? (
           <ButtonShow
           showMore={showMore}
           />
        ) : null}

        {channels && channels.length > 5 && more === true && all === false ? (
         <ButtonShowMore
         showAll={showAll}
         />
        ) : null}

        {all === true && channels
          ? channels.map((v, i) => {
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
                  >
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "120px",
                        height: "120px",
                      }}
                      src={v.thumbnail_url}
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
                        {v.display_name}
                      </span>

                      <div style={{ display: "flex" }}>
                        {selectedIcon.includes(v.display_name) ? (
                          <>
                            <Button
                              onClick={() => switchIcon(v.display_name)}
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
                              onClick={() => handleIcon(v.display_name)}
                              style={{
                                backgroundColor: "#464649",
                                marginRight: "10px",
                                width: "25px",
                                height: "30px",
                                color: "white",
                              }}
                            >
                              {selectedNotific.includes(v.display_name) ? (
                                <NotificationsOffOutlinedIcon />
                              ) : (
                                <NotificationsIcon />
                              )}
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() => handleSelection(v.display_name)}
                            style={{
                              color: "white",
                              backgroundColor: "#772CE8",
                              textTransform: "capitalize",
                              fontWeight: "bold",
                            }}
                          >
                            <FavoriteIcon style={{}} />
                            Segui
                          </Button>
                        )}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              );
            })
          : null}
      </div>
    </>
  );
}

export default MainDetailsSearched;
