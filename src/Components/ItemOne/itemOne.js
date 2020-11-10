import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useGetSuggestedHomeStreamsFirstSix from "../../Hooks/useGetSuggestedHomeStreamsFirstSix";
import useGetClips from "../../Hooks/useGetClips";
import { thumbnailFormatter } from "../../Utils/thumbnailFormatter";

function ItemOne({ id }) {
  const [usersDetails, setUsersDetails] = useState();
  const [suggestedHomeStreams, setSuggestedStreams] = useState([]);
  const { data } = useGetSuggestedHomeStreamsFirstSix();

  const { data: clips } = useGetClips(id);

  console.log("clips", clips && clips.data);

  const browseToStream = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  return (
    <Grid container>
      {clips &&
        clips.data.map((val, index) => {
          if (index < 3) {
            return (
              <Grid style={{ justifyContent: "center" }} item md={4}>
                <ReactPlayer
                  width={"382px"}
                  height={"214px"}
                  url={`https://www.twitch.tv/${val.url.replace(/\s+/g, "")}`}
                  light={`${thumbnailFormatter(val.thumbnail_url)}`}
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
