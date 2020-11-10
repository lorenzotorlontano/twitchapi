import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useGetMyFollows from "../../Hooks/useGetMyFollows";
import VideosInfoDetails from "../FollowingVideosTab/VideosInfoDetails/index";

export default function FollowingVideosTab() {
  const { data: myFollows } = useGetMyFollows();

  return (
    <Grid style={{ position: "relative" }} container spacing={1}>
      {myFollows &&
        myFollows.data.map((iterator, index) => {
          if (index < 6) {
            return <VideosInfoDetails id={iterator.to_id} key={index} />;
          } else {
            return null;
          }
        })}
    </Grid>
  );
}
