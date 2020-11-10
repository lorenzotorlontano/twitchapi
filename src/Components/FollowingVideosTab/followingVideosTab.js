import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { getCurrentUserFollows, getVideosById } from "../../Service/Api/Api";
import ReactPlayer from "react-player";
=======
>>>>>>> 3472c6715e531e5c5d95dbed8c72871e3c5df8c0
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
