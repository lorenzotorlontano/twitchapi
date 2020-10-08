import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import {
  getSuggestedHomeStreams,
  getStreamsById,
  getChannel,
  getStreamsDetails,
  getUsers,
} from "../../Service/Api/Api";
import ReactPlayer from "react-player";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Grid from "@material-ui/core/Grid";
import ButtonFollow from "../DetailsSearched/ButtonFollow/buttonFollow";

function DetailsFollowStremer() {
  const [streamsKey, setStreamsKey] = useState();
  const [channel, setChannel] = useState();
  const [streamsDetails, setStreamsDetails] = useState();
  const [usersDetails, setUsersDetails] = useState();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedNotific, setSelectedNotific] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const resp = getStreamsById(id).then((re) => {
      setStreamsDetails(re.data.data[0]);
    });
  }, []);

  useEffect(() => {
    const res = getUsers(id).then((re) => {
      setUsersDetails(re.data.data[0]);
    });
  }, []);

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

  return (
    <Grid
      style={{
        display: "flex",
        width: "956.2px",
        color: "white",
        alignSelf: "center",
      }}
      container
    >
      <ReactPlayer
        width={"100%"}
        height={"537.86px"}
        url={`https://www.twitch.tv/${streamsDetails?.user_name.replace(
          /\s+/g,
          ""
        )}`}
      />

      <Grid item md={6} style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{ width: "64px", height: "64px", borderRadius: "50%" }}
            src={usersDetails && usersDetails.profile_image_url}
          />
          <div style={{}}>
            <span>{streamsDetails && streamsDetails.type}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <span>{streamsDetails && streamsDetails.user_name}</span>{" "}
            <VerifiedUserIcon />
          </div>
          <span>{streamsDetails && streamsDetails.title}</span>
          <div style={{ display: "flex" }}>
            <Link>Quattro chiacchiere</Link>
            <span>{streamsDetails && streamsDetails.language}</span>
          </div>
        </div>
      </Grid>

      <Grid style={{ display: "flex", justifyContent: "flex-end" }} item md={6}>
        <div>
          <ButtonFollow
            selectedIcon={ selectedIcon}
            handleSelection={handleSelection}
            selectedNotific={selectedNotific}
            switchIcon={switchIcon}
            handleIcon={handleIcon}
            channels={streamsDetails && streamsDetails.user_name}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default DetailsFollowStremer;
