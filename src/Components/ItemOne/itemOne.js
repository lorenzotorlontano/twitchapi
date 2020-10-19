import React, { useState, useEffect } from "react";
import {
  getVideosById,
  getUsers,
  getClips,
  getSuggestedHomeStreams,
} from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ItemOne({ id }) {
  const [videos, setVideos] = useState();
  const [usersDetails, setUsersDetails] = useState();
  const [clips, setClips] = useState();
  const [suggestedHomeStreams, setSuggestedStreams] = useState([]);

  useEffect(() => {
    const resp = getVideosById(id).then((re) => {
      setVideos(re.data.data);
    });
  }, []);

  useEffect(() => {
    const res = getUsers(id).then((re) => {
      setUsersDetails(re.data.data);
    });
  }, []);

  useEffect(() => {
    const r = getSuggestedHomeStreams().then((re) => {
      setSuggestedStreams(re.data.data[0]);
      console.log("re", re.data.data);
    });
  }, []);

  useEffect(() => {
    const re = getClips(id).then((re) => {
      setClips(re.data.data);
    });
  }, []);

  const browseToStream = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  console.log("clips", clips && clips);

  return (
    <Grid container>
      {clips &&
        clips.map((val, index) => {
          if (index < 3) {
            return (
              <Grid style={{ justifyContent: "center" }} item md={4}>
                <ReactPlayer
                  width={"382px"}
                  height={"214px"}
                  url={`https://www.twitch.tv/${val.url.replace(/\s+/g, "")}`}
                />
                <div
                  onClick={() => browseToStream(id)}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ width: "40px", height: "56px" }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={val.thumbnail_url}
                    />
                  </div>
                  <div>{val.creator_name}</div>
                </div>
              </Grid>
            );
          } else {
            return null;
          }
        })}
    </Grid>
  );
}

export default ItemOne;
