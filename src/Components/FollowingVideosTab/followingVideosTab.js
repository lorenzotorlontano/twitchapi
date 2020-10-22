import React, { useState, useEffect } from "react";
import {
  getCurrentUserFollows,
  getUsers,
  getVideosById,
} from "../../Service/Api/Api";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";

export default function FollowingVideosTab() {
  const [myFollows, setMyFollows] = useState([]);
  const [myFollowedChannels, setMyFollowedChannels] = useState([]);

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
        (val) => val.to_id && promises.push(getVideosById(val.to_id))
      );
      Promise.all(promises).then((responses) => {
        const followedChannels = responses.map((res) => res.data.data[0]);
        setMyFollowedChannels(followedChannels);
      });
    }
  }, [myFollows]);

  return (
    <Grid container>
      {myFollowedChannels &&
        myFollowedChannels.map((val, index) => {
          console.log("val", val);
          if (val !== undefined && index < 6) {
            return (
              <Grid style={{ color: "white" }} item md={4}>
                <ReactPlayer
                  width={"367px"}
                  height={"248px"}
                  url={`https://www.twitch.tv/${
                    val && val.url.replace(/\s+/g, "")
                  }`}
                />
                <span>{val.user_name}</span>
              </Grid>
            );
          } else {
            return null;
          }
        })}
    </Grid>
  );
}
