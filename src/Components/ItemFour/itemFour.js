import React, { useState, useEffect } from "react";
import {
  getVideosById,
  getUsers,
  getClips,
  getSuggestedHomeStreams,
  getVideosByType,
} from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SelectFilter from "../../Components/SelectFilter/selectFilter";
import Button from "@material-ui/core/Button";
import SecondSelectFilter from "../../Components/SelectFilter/secondSelectFilter";

function ItemFour({ id }) {
  const [clips, setClips] = useState();
  const [views, setViews] = useState("highlight");
  const [videos, setVideos] = useState();
  const [secondViews, setSecondViews] = useState("time");

  const browseToStream = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  const filterCall = (event) => {
    setViews(event.target.value);
  };

  const secondFilterCall = (event) => {
    setSecondViews(event.target.value);
  };

  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  useEffect(() => {
    setVideos(null);
    if (views !== "clips") {
      const r = getVideosByType(views, id, secondViews).then((re) => {
        setVideos(re.data.data);
      });
    } else {
      const re = getClips(id).then((re) => {
        setClips(re.data.data);
      });
    }
  }, [views, secondViews]);

  return (
    <Grid style={{ justifyContent: "center", alignSelf: "center" }} container>
      <Grid
        style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        item
        md={12}
      >
        <div style={{ display: "flex", alignSelf: "center" }}>Filtra per</div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <SelectFilter filterCall={filterCall} views={views} />
          {views === "all" ? (
            <div style={{ alignSelf: "center" }}>
              <SecondSelectFilter
                secondFilterCall={secondFilterCall}
                secondViews={secondViews}
              />
            </div>
          ) : null}
        </div>
      </Grid>
      {views === "highlight" ? (
        <Grid item md={12} style={{}}>
          <span>Trasmissioni recenti</span>
          <Button
            onClick={() => setViews("all")}
            style={{ color: "white", backgroundColor: "red" }}
          >
            Vedi tutti
          </Button>
        </Grid>
      ) : null}
      {videos && views !== "clips"
        ? videos.map((val, index) => {
            if (index < 6) {
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
                    <div>{val.creator_name}</div>
                  </div>
                </Grid>
              );
            } else {
              return null;
            }
          })
        : clips &&
          clips.map((va, i) => {
            if (i < 5) {
              return (
                <Grid item md={4}>
                  <ReactPlayer
                    width={"382px"}
                    height={"214px"}
                    url={`https://www.twitch.tv/${va.url.replace(/\s+/g, "")}`}
                  />
                  <div
                    onClick={() => browseToStream(id)}
                    style={{ display: "flex", cursor: "pointer" }}
                  >
                    <div>{va.creator_name}</div>
                  </div>
                </Grid>
              );
            }
          })}
    </Grid>
  );
}

export default ItemFour;
