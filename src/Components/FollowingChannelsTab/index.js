import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useGetUser from "../../Hooks/useGetUser";
import useGetMyFollows from "../../Hooks/useGetMyFollows";
import ChannelsDetails from "../ChannelsDetails";

export default function FollowingChannelsTab() {
  const { data } = useGetMyFollows();

  return (
    <Grid style={{ position: "relative" }} container spacing={1}>
      {data &&
        data.data.map((iterator, index) => {
          return <ChannelsDetails id={iterator.to_id} key={index} />;
        })}
    </Grid>
  );
}
