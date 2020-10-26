import React, { useEffect, useState } from "react";
import { getStreamsById, getCurrentUserFollows } from "../../Service/Api/Api";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import ImgChannel from "../../Pages/Following/ImgChannel/imgChannel";

function FollowingLiveTabs() {
  const [streams, setStreams] = useState([]);
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
        (val) => val.to_id && promises.push(getStreamsById(val.to_id))
      );
      Promise.all(promises).then((responses) => {
        const followedChannels = responses.map((res) => res.data.data[0]);
        setMyFollowedChannels(followedChannels);
      });
    }
  }, [myFollows]);

  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  return (
    <Grid container style={{ color: "white" }}>
      {myFollowedChannels &&
        myFollowedChannels.map((val, index) => {
          if (val?.type === "live") {
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
                <div onClick={() => handleBrowseToChannelDetails(val.user_id)}>
                  <ImgChannel id={val.user_id} />
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

export default FollowingLiveTabs;
