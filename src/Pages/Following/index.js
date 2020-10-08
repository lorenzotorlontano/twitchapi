import React, { useState, useEffect } from "react";
import {
  getCurrentUserFollows,
  getStreamsById,
  getChannel,
  getUsers,
} from "../../Service/Api/Api";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import VideoDetails from "../../Components/VideoDetails";
import ReactPlayer from "react-player";
import ImgChannel from "../Following/ImgChannel/imgChannel";
import DetailsChannel from '../../Pages/DetailsChannel/detailsChannel'

export default function Following() {
  const classes = useStyles();

  const [myFollows, setMyFollows] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const [usersDetails, setUsersDetails] = useState();

  useEffect(() => {
    const getMyFollows = async () => {
      const res = await getCurrentUserFollows();
      setMyFollows(res.data.data);
    };
    getMyFollows();
  }, []);

  useEffect(() => {
    const res = getUsers().then((re) => {
      setUsersDetails(re.data.data[0]);
    });
  }, []);

console.log('maledetto dio')
  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  const browse = (id) => {
    console.log(`cioa`);
    const res = getChannel(id).then((re) => {
      setVideoInfo(re.data.data[0].broadcaster_id);
      window.location.assign(
        `/detailsFollowStremer/${re.data.data[0].broadcaster_id}`
      );
    });
  };

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(
      `/detailsChannel/${id}`
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.videoWrapper}>
        {myFollows &&
          myFollows.map((img, index) => {
            return ( 
                   
              <Grid item xs={12} md={6} lg={4} className={classes.gridWrapper}>
                <Card
                  style={{
                    backgroundColor: "transparent",
                    color: "whitesmoke",
                    width: "400px",
                  }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} className={classes.gridItem}>
                        <ReactPlayer
                          width={"367px"}
                          height={"248px"}
                          url={`https://www.twitch.tv/${img.to_name.replace(
                            /\s+/g,
                            ""
                          )}`}
                          controls={false}
                          light={`${thumbnailFormatter(img.thumbnail_url)}`}
                        />
                      </Grid>
                      <Grid style={{ display: `flex` }} item xs={12}>
                        <div onClick={()=> handleBrowseToChannelDetails(img.to_id)}  >
                          <ImgChannel id={img.to_id} />
                        </div>
                        <div
                            onClick={() => browse(img.to_id)}
                        >
                          <VideoDetails
                            id={img.to_id}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
