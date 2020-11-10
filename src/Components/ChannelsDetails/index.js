import React, { useEffect } from "react";
import useGetUser from "../../Hooks/useGetUser";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";

export default function ChannelsDetails({ id }) {
  const classes = useStyles();

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  const { data } = useGetUser(id);

  return (
    <Grid
      item
      md={6}
      lg={4}
      className={classes.channelsGridWrapper}
      onClick={() => handleBrowseToChannelDetails(data?.data[0]?.id)}
    >
      <img
        className={classes.profileImg}
        src={data?.data[0]?.profile_image_url}
      ></img>
      <img
        className={classes.backgroundImg}
        src={data?.data[0]?.offline_image_url}
      ></img>
    </Grid>
  );
}
