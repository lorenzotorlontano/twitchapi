import React, { useState, useEffect } from "react";
import { getCurrentUserFollows, getUsers } from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

export default function FollowingChannelsTab() {
  const [myFollows, setMyFollows] = useState([]);
  const [myFollowedChannels, setMyFollowedChannels] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getMyFollows = async () => {
      const res = await getCurrentUserFollows();
      setMyFollows(res.data.data);
    };
    getMyFollows();
  }, []);

  useEffect(() => {
    const promises = [];
    if (!!myFollows.length) {
      myFollows.forEach(
        (val) => val.to_id && promises.push(getUsers(val.to_id))
      );
      Promise.all(promises).then((responses) => {
        const followedChannels = responses.map((res) => res.data.data[0]);
        setMyFollowedChannels(followedChannels);
      });
    }
  }, [myFollows]);

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{
          position: "relative",
          marginTop: "4px",
        }}
      >
        {myFollowedChannels &&
          myFollowedChannels.map((iterator, index) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                className={classes.channelsGridWrapper}
                onClick={() => handleBrowseToChannelDetails(iterator?.id)}
              >
                <img
                  className={classes.profileImg}
                  src={iterator?.profile_image_url}
                ></img>
                <img
                  className={classes.backgroundImg}
                  src={iterator?.offline_image_url}
                ></img>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
