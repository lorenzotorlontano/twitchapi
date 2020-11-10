import React, { useState, useEffect } from "react";
import { getCurrentUserFollows, getVideosById } from "../../Service/Api/Api";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import ImgChannel from "../../Pages/Following/ImgChannel/imgChannel";
import VideoDetails from "../../Components/VideoDetails";

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

  const thumbnailFormatter = (url) => {
    console.log("Munch url", url);
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  const browse = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

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
                  // light={`${thumbnailFormatter(val && val.thumbnail_url)}`}
                  url={`https://www.twitch.tv/${
                    val && val.url.replace(/\s+/g, "")
                  }`}
                />
                <div style={{ display: "flex" }}>
                  <div
                    style={{ cursor: "pointer" }}
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
