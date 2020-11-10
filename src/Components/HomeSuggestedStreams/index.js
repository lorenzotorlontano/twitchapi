import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import VideoDetails from "../../Components/VideoDetails";
import useGetSuggestedHomeStreamsFirstSix from "../../Hooks/useGetSuggestedHomeStreamsFirstSix";

export default function HomeSuggestedStreams() {
  const classes = useStyles();

  const [suggestedHomeStreamsInfo, setSuggestedStreamsInfo] = useState([]);
  const { data } = useGetSuggestedHomeStreamsFirstSix();
  const [showMore, setShowMore] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleClick = () => {
    setShowMore(true);
    setButtonStatus(false);
  };

  const thumbnailFormatter = (url) => {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.videoWrapper}>
        {data &&
          data.data.map((img, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} className={classes.gridWrapper}>
                <Card
                  style={{
                    backgroundColor: "transparent",
                    color: "whitesmoke",
                    width: "400px",
                    display: index > 2 && !showMore ? "none" : "block",
                  }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} className={classes.gridItem}>
                        <ReactPlayer
                          width={"367px"}
                          height={"248px"}
                          url={`https://www.twitch.tv/${img.user_name.replace(
                            /\s+/g,
                            ""
                          )}`}
                          // controls={false}
                          light={`${thumbnailFormatter(img.thumbnail_url)}`}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <VideoDetails id={img.user_id} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>

      {buttonStatus ? (
        <Button
          style={{
            borderRadius: "6px",
            marginTop: "6px",
            marginBottom: "12px",
          }}
          onClick={() => handleClick()}
          variant="contained"
        >
          Show more
        </Button>
      ) : null}
    </div>
  );
}
