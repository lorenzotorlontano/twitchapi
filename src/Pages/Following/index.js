import React, { useState, useEffect } from 'react'
import { getCurrentUserFollows, getStreamsById } from '../../Service/Api/Api';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import VideoDetails from '../../Components/VideoDetails'
import ReactPlayer from "react-player"


export default function Following() {
  const classes = useStyles();

  const [myFollows, setMyFollows] = useState([]);

  useEffect(() => {
    const getMyFollows = async () => {
      const res = await getCurrentUserFollows();
      setMyFollows(res.data.data);
    };
    getMyFollows();
  }, []);

  console.log('porco dio la madonna e tutit i porco dio di santi', myFollows)

  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  const browse = (id) => {
    console.log('porco dio', id)
    window.location.assign(`/detailsFollowStremer/${id}`)
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
                    // display: index > 2 && !showMore ? "none" : "block"
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
                      <Grid onClick={()=> browse(img.to_id)}  item xs={12}>
                        <VideoDetails id={img.to_id} />
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
