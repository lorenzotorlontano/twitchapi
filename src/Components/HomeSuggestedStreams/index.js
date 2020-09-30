import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams, getChannel } from '../../Service/Api/Api'
import ReactPlayer from "react-player"
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

    console.log("Suggested Home Streams", suggestedHomeStreams)

    useEffect(() => {
        const getHomeSuggestedInfo = async () => {
            const user_id = 36029255;  //attempt
            const res = await getChannel(user_id)
            setSuggestedStreamsInfo(res.data.data)
        }
        getHomeSuggestedInfo()
    }, [])

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
                            <Card style={{ width: "400px", display: index > 2 && !showMore ? "none" : "block" }} >
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
