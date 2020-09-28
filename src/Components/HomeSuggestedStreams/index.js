import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams } from '../../Service/Api/Api'
import ReactPlayer from "react-player"
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function HomeSuggestedStreams() {

    const classes = useStyles();

    const [suggestedHomeStreams, setSuggestedStreams] = useState([])

    useEffect(() => {
        const getHomeSuggested = async () => {
            const res = await getSuggestedHomeStreams()
            setSuggestedStreams(res.data.data)
        }
        getHomeSuggested()
    }, [])

    console.log("Suggested Home Streams", suggestedHomeStreams)

    return (

        <div>



            <div className={classes.root}>
                <Grid container spacing={1} className={classes.videoWrapper}>
                    {suggestedHomeStreams && suggestedHomeStreams.map((img) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} >
                                <Card className={classes.videoWrapper}>

                                    <CardMedia>
                                        {/* <ReactPlayer
                                            className={classes.gridItem}
                                            width={"380px"}
                                            height={"270px"}
                                            url={`https://www.twitch.tv/${img.user_name.replace(/\s+/g, '')}`}
                                            controls={true}
                                        // style={{ display: "flex", justifyContent: "space-evenly" }} */}
                                        {/* /> */}
                                    </CardMedia>

                                    <CardContent>
                                        <Grid container>

                                            <Grid item xs={12}>
                                                <ReactPlayer
                                                    className={classes.gridItem}
                                                    width={"380px"}
                                                    height={"270px"}
                                                    url={`https://www.twitch.tv/${img.user_name.replace(/\s+/g, '')}`}
                                                    controls={true}
                                                // style={{ display: "flex", justifyContent: "space-evenly" }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h1>Some text</h1>
                                            </Grid>
                                        </Grid>
                                    </CardContent>


                                </Card>


                            </Grid>
                        )
                    })}
                </Grid>
            </div >

        </div >
    )
}
