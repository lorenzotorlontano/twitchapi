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

    const [myFollows, setMyFollows] = useState([])

    const [videoThumbs, setVideoThumbs] = useState([])

    useEffect(() => {

        const getMyFollows = async () => {
            const res = await getCurrentUserFollows()
            setMyFollows(res.data.data)
        }
        getMyFollows()

    }, [])

    const getVideoThumbs = async (streamerId) => {
        const res = await getStreamsById(streamerId)
        setVideoThumbs(res.data.data)
        let thumbUrl = videoThumbs[0]?.thumbnail_url
        if (thumbUrl !== undefined) {
            console.log("ijnsdincrec", thumbUrl)
        }
        // return (
        //     thumbUrl
        // )
    }

    useEffect(() => {

        const promises = [];
        if (!!myFollows.length) {
            myFollows.forEach(
                (val) => val.to_id && promises.push(getStreamsById(val.to_id))
            );
            Promise.all(promises).then((responses) => {
                const thumbsImages = responses.map(
                    (res) => res.data.data[0]?.thumbnail_url
                );
                setVideoThumbs(thumbsImages);
                console.log("thumbs", thumbsImages)
                console.log("my followsss", myFollows)
            });
        }

    }, [myFollows])

    const thumbnailFormatter = (url) => {
        console.log("Munch url", url)
        let formattedImg = url?.replace("{width}", "367");
        let formattedImgFinal = formattedImg?.replace("{height}", "248");
        return formattedImgFinal;
    }

    return (

        <div className={classes.root} >
            <Grid container spacing={1} className={classes.videoWrapper} >
                {myFollows && myFollows.map((iterator, index) => {
                    return (
                        videoThumbs[index] === undefined ? null : (
                            <Grid item xs={12} md={6} lg={4} className={classes.gridWrapper} >
                                <Card style={{
                                    backgroundColor: "transparent", color: "whitesmoke", width: "400px",
                                    // display: index > 2 && !showMore ? "none" : "block" 
                                }} >
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={12} className={classes.gridItem}>
                                                <ReactPlayer
                                                    width={"367px"}
                                                    height={"248px"}
                                                    url={`https://www.twitch.tv/${iterator.to_name.replace(/\s+/g, '')}`}
                                                    light={`${thumbnailFormatter(videoThumbs[index])}`}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <VideoDetails id={iterator.to_id} />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    )
                })}
            </Grid>
        </div>
    )
}
