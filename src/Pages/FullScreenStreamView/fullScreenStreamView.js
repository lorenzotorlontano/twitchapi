import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import useGetStreamById from "../../Hooks/useGetStreamById";
import useGetUser from "../../Hooks/useGetUser";
import ReactPlayer from "react-player";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Grid from "@material-ui/core/Grid";
import ButtonFollow from "../DetailsSearched/ButtonFollow/buttonFollow";
import MoreIcon from "@material-ui/icons/MoreVert";
import ButtonLive from "../../Components/ButtonLive/buttonLive";
import TabsFullScreen from "../../Components/TabsFullScreenView/tabsFullScreen";

function DetailsFollowStremer() {
  const { id } = useParams();
  const { data: streamsDetails } = useGetStreamById(id);
  const { data } = useGetUser(id);
  const [streamsKey, setStreamsKey] = useState();
  const [channel, setChannel] = useState();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedNotific, setSelectedNotific] = useState("");

  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "50");
    let formattedImgFinal = formattedImg?.replace("{height}", "50");
    return formattedImgFinal;
  };

  const handleSelection = (name) => {
    let str = selectedIcon.concat(name, "&");
    setSelectedIcon(str);
  };

  const switchIcon = (name) => {
    const strSplitted = selectedIcon.replace(`${name}&`, "");
    setSelectedIcon(strSplitted);
  };

  const handleIcon = (name) => {
    let st;
    if (selectedNotific.includes(name)) {
      const strSplit = selectedNotific.replace(`${name}&`, "");
      setSelectedNotific(strSplit);
    } else {
      st = selectedNotific.concat(name, "&");
      setSelectedNotific(st);
    }
  };

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  return (
    <>
      {streamsDetails && streamsDetails?.data[0] !== undefined ? (
        <Grid
          style={{
            display: "flex",
            width: "100%",
            height: "80%",
            color: "white",
            alignSelf: "center",
          }}
          container
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url={`https://www.twitch.tv/${
                streamsDetails &&
                streamsDetails?.data[0]?.user_name.replace(/\s+/g, "")
              }`}
            />
          </div>
          <Grid style={{ width: "100%", backgroundColor: "#0E0E10" }} container>
            <Grid item md={6} style={{ display: "flex" }}>
              <div
                onClick={() => handleBrowseToChannelDetails(id)}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                }}
              >
                <div style={{ margin: "20px" }}>
                  <img
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                    }}
                    src={data && data.data[0]?.profile_image_url}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    position: "absolute",
                    paddingTop: "70px",
                  }}
                >
                  <ButtonLive id={id} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span>
                    {streamsDetails && streamsDetails?.data[0]?.user_name}
                  </span>{" "}
                  <VerifiedUserIcon
                    style={{ color: "#9147FF", marginLeft: "10px" }}
                  />
                </div>
              </div>
            </Grid>

            <Grid
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignSelf: "center",
              }}
              item
              md={6}
            >
              <div>
                <ButtonFollow
                  selectedIcon={selectedIcon}
                  handleSelection={handleSelection}
                  selectedNotific={selectedNotific}
                  switchIcon={switchIcon}
                  handleIcon={handleIcon}
                  channels={
                    streamsDetails && streamsDetails?.data[0]?.user_name
                  }
                />
              </div>
              <div style={{ display: "flex", alignSelf: "center" }}>
                <MoreIcon />
              </div>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TabsFullScreen id={id} />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid
          style={{ width: "100%", backgroundColor: "#0E0E10", color: "white" }}
          container
        >
          <Grid item md={6} style={{ display: "flex" }}>
            <div
              onClick={() => handleBrowseToChannelDetails(id)}
              style={{
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
              }}
            >
              <div style={{ margin: "20px" }}>
                <img
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                  }}
                  src={data && data.data[0].profile_image_url}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  position: "absolute",
                  paddingTop: "70px",
                }}
              >
                <ButtonLive id={id} />
              </div>
            </div>

            <div
              style={{
                alignSelf: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <div style={{ display: "flex" }}>
                <span>{data && data.data[0].display_name}</span>{" "}
                <VerifiedUserIcon
                  style={{ color: "#9147FF", marginLeft: "10px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span>{data && data.data[0].view_count}</span>
                <div style={{ marginLeft: "10px" }}>
                  <span>view count</span>
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignSelf: "center",
            }}
            item
            md={6}
          >
            <div>
              <ButtonFollow
                selectedIcon={selectedIcon}
                handleSelection={handleSelection}
                selectedNotific={selectedNotific}
                switchIcon={switchIcon}
                handleIcon={handleIcon}
                channels={streamsDetails && streamsDetails?.data[0]?.user_name}
              />
            </div>
            <div style={{ display: "flex", alignSelf: "center" }}>
              <MoreIcon />
            </div>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TabsFullScreen id={id} />
          </div>
        </Grid>
      )}
    </>
  );
}

export default DetailsFollowStremer;
