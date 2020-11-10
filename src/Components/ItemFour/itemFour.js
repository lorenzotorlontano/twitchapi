import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SelectFilter from "../../Components/SelectFilter/selectFilter";
import Button from "@material-ui/core/Button";
import useGetClips from "../../Hooks/useGetClips";
import { thumbnailFormatter } from "../../Utils/thumbnailFormatter";
import SecondSelectFilter from "../../Components/SelectFilter/secondSelectFilter";
import useGetVideosByType from "../../Hooks/useGetVideosByType";

function ItemFour({ id }) {
  const [views, setViews] = useState("highlight");
  const [secondViews, setSecondViews] = useState("time");
  const browseToStream = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  const { data: clips } = useGetClips(id);

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

  const { data: videos } = useGetVideosByType(id, views, secondViews);

  console.log("data", videos && videos.data);

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
        ? videos.data.map((val, index) => {
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
          clips.data.map((va, i) => {
            if (i < 3) {
              return (
                <Grid item md={4}>
                  <ReactPlayer
                    width={"382px"}
                    height={"214px"}
                    url={`https://www.twitch.tv/${va.url.replace(/\s+/g, "")}`}
                    light={`${thumbnailFormatter(va.thumbnail_url)}`}
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
