import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams, getChannel } from '../../Service/Api/Api'
import ReactPlayer from "react-player"
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import VideoDetails from '../../Components/VideoDetails'

export default function HomeSuggestedStreams() {

    const classes = useStyles();

    const [suggestedHomeStreams, setSuggestedStreams] = useState([])
    const [suggestedHomeStreamsInfo, setSuggestedStreamsInfo] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [buttonStatus, setButtonStatus] = useState(true)

    useEffect(() => {
        const getHomeSuggested = async () => {
            const res = await getSuggestedHomeStreams()
            setSuggestedStreams(res.data.data)
        }
        getHomeSuggested()
    }, [])

    const handleClick = () => {
        setShowMore(true)
        setButtonStatus(false)
    }


    // useEffect(() => {
    //     const getHomeSuggestedInfo = async () => {
    //         let tempArrayUsersId = []
    //         suggestedHomeStreams && suggestedHomeStreams.map((iterator) => {
    //             tempArrayUsersId.push(iterator.user_id)
    //         })

    //         // let user_id = 36029255;
    //         let user_id = suggestedHomeStreams.user_id;
    //         // let res = await getChannel(user_id)
    //         tempArray.push(res.data.data)
    //         setSuggestedStreamsInfo(tempArray)
    //     }
    //     getHomeSuggestedInfo()
    // }, [suggestedHomeStreams])

    console.log("Suggested Home Streams Info", suggestedHomeStreamsInfo)

    const thumbnailFormatter = (url) => {
        let formattedImg = url?.replace("{width}", "370");
        let formattedImgFinal = formattedImg?.replace("{height}", "250");
        return formattedImgFinal;
    }

    return (

        <div className={classes.root} >
            <Grid container spacing={1} className={classes.videoWrapper} >
                {suggestedHomeStreams && suggestedHomeStreams.map((img, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} className={classes.gridWrapper} >
                            <Card style={{ backgroundColor: "transparent", color: "whitesmoke", width: "400px", display: index > 2 && !showMore ? "none" : "block" }} >
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={12} className={classes.gridItem}>
                                            <ReactPlayer
                                                width={"370px"}
                                                height={"250px"}
                                                url={`https://www.twitch.tv/${img.user_name.replace(/\s+/g, '')}`}
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
                    )
                })}
            </Grid>

            {buttonStatus ? (
                <Button
                    style={{ borderRadius: "6px", marginTop: "6px" }}
                    onClick={() => handleClick()}
                    variant="contained">Show more
                </Button>)
                :
                null}

        </div >

    )
}
