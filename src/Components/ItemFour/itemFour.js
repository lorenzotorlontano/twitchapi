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
import SelectFilter from "../../Components/SelectFilter/selectFilter";
function ItemFour({ id }) {
  const [clips, setClips] = useState();

  useEffect(() => {
    const re = getClips(id).then((re) => {
      setClips(re.data.data);
    });
  }, []);

  const browseToStream = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  return (
    <Grid style={{ justifyContent: "center", alignSelf: "center" }} container>
      <Grid
        style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        item
        md={12}
      >
        <div style={{ display: "flex", alignSelf: "center" }}>Filtra per</div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <SelectFilter />
        </div>
      </Grid>
      {clips &&
        clips.map((val, index) => {
          if (index < 18) {
            return (
              <Grid item md={4}>
                <ReactPlayer
                  width={"382px"}
                  height={"214px"}
                  url={`https://www.twitch.tv/${val.url.replace(/\s+/g, "")}`}
                />
                <div
                  onClick={() => browseToStream(id)}
                  style={{ display: "flex", cursor: "pointer" }}
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

export default ItemFour;
