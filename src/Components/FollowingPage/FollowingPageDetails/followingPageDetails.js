import React, { useEffect, useState } from "react";
import useGetUser from "../../../Hooks/useGetUser";
import useGetVideosById from "../../../Hooks/useGetVideosById";
import ReactPlayer from "react-player";
import { thumbnailFormatter } from "../../../Utils/thumbnailFormatter";
import ImgChannel from "../../../Pages/Following/ImgChannel/imgChannel";
import VideoDetails from "../../VideoDetails/index";
import { useStyles } from "../styles";
import Grid from "@material-ui/core/Grid";
import useGetStreamsById from "../../../Hooks/useGetStreamsById";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FollowingCategoriesTab from "../../FollowingCategoriesTab";
import FollowingVideosTab from "../../FollowingVideosTab/followingVideosTab";

export default function VideosInfoDetails({ id, myFollows }) {
  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };
  const browse = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  const { data: streams } = useGetStreamsById(myFollows);

  const classes = useStyles();

  return (
    <Grid container>
      {streams &&
        streams.map((val, index) => {
          if (index < 6) {
            return (
              <Grid item md={4}>
                <ReactPlayer
                  width={"367px"}
                  height={"248px"}
                  url={`https://www.twitch.tv/${val.user_name.replace(
                    /\s+/g,
                    ""
                  )}`}
                  light={`${thumbnailFormatter(val.thumbnail_url)}`}
                />
                <div style={{ display: "flex", color: "white" }}>
                  <div
                    onClick={() => handleBrowseToChannelDetails(val.user_id)}
                  >
                    <ImgChannel id={val.user_id} />
                  </div>
                  <div onClick={() => browse(val.user_id)}>
                    <VideoDetails id={val.user_id} />
                  </div>
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
