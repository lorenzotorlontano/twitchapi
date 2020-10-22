import React, { useEffect, useState } from "react";
import { getCurrentUserFollows, getVideosById } from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

function FollowingVideosTab() {
  const [myUsers, setMyUsers] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    const resp = getCurrentUserFollows().then((re) => {
      setMyUsers(re.data.data);
    });
  }, []);

  let arr = [];

  myUsers &&
    myUsers.map((val, index) => {
      arr.push(val.to_id);
    });

  console.log("myuser", myUsers && myUsers);

  console.log("arr", arr);

  useEffect(() => {
    arr.map((va, i) => {
      const res = getVideosById(va).then((re) => {
        setVideos(re.data.data);
      });
    });
  }, []);

  console.log("videos", videos && videos);

  return (
    <Grid container style={{ color: "white", display: "flex" }}>
      {videos &&
        videos.map((val, index) => {
          return (
            <Grid item md={3}>
              <ReactPlayer
                width={"367px"}
                height={"248px"}
                url={`https://www.twitch.tv/${val.url.replace(/\s+/g, "")}`}
              />
              <span>{val.user_name}</span>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default FollowingVideosTab;
