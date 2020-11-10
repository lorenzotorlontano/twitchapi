import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import ReactPlayer from "react-player";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Grid from "@material-ui/core/Grid";
import ButtonFollow from "../DetailsSearched/ButtonFollow/buttonFollow";
import MoreIcon from "@material-ui/icons/MoreVert";
import ButtonLive from "../../Components/ButtonLive/buttonLive";
import useGetUser from "../../Hooks/useGetUser";
import useGetStreamById from "../../Hooks/useGetStreamById";

function DetailsFollowStremer() {
  const { id } = useParams();

  const { data: streamsDetails } = useGetStreamById(id);

  const [streamsKey, setStreamsKey] = useState();
  const [channel, setChannel] = useState();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedNotific, setSelectedNotific] = useState("");
  const { data: usersDetails } = useGetUser(id);
  const [streamWidth, setStreamWidth] = useState("956.2px");
  const [control, setControl] = useState(false);

  const [streamHeight, setStreamHeight] = useState("537.86px");

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

  const browseToFullScreenView = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  return (
    <>
      {usersDetails !== undefined ? (
        <Grid
          style={{
            display: "flex",
            width: "70%",
            height: "537px",
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
                usersDetails &&
                usersDetails.data[0]?.display_name.replace(/\s+/g, "")
              }`}
            />
          </div>
          <Grid item md={6} style={{ display: "flex" }}>
            <div
              onClick={() => browseToFullScreenView(id)}
              style={{
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
              }}
            >
              <div style={{}}>
                <img
                  style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                  src={usersDetails && usersDetails.data[0]?.profile_image_url}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  position: "absolute",
                  paddingTop: "50px",
                }}
              >
                <ButtonLive id={id} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <span>
                  {usersDetails && usersDetails.data[0]?.display_name}
                </span>{" "}
                <VerifiedUserIcon />
              </div>
              <div style={{ display: "flex" }}>
                <Link>Quattro chiacchiere</Link>
              </div>
            </div>
          </Grid>

          <Grid
            style={{ display: "flex", justifyContent: "flex-end" }}
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
          </Grid>
        </Grid>
      ) : (
        <h1 style={{ color: "white" }}>son tutti undefined dio can</h1>
      )}{" "}
    </>
  );
}

export default DetailsFollowStremer;
