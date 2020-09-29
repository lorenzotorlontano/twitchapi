import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams } from '../../Service/Api/Api'
import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function HomeSuggestedStreams() {

    const [suggestedHomeStreams, setSuggestedStreams] = useState([])

    useEffect(() => {
        const getHomeSuggested = async () => {
            const res = await getSuggestedHomeStreams()
            setSuggestedStreams(res.data.data)
        }
        getHomeSuggested()
    }, [])

    const thumbnailFormatter = (url) => {
        let formattedImg = url?.replace("{width}", "224");
        let formattedImgFinal = formattedImg?.replace("{height}", "224");
        return formattedImgFinal;
    }

    return (
        <div>
            {suggestedHomeStreams && suggestedHomeStreams.map((img) => {
                return (

                    // <img src={`${thumbnailFormatter(img.thumbnail_url)}`}
                    //     alt={"Not found"} key={`${img.id}`}
                    // />

                    <div>
                        <ReactPlayer
                            url={`https://www.twitch.tv/${img.user_name.replace(/\s+/g, '')}`}
                            controls
                        />
                    </div>

                )
            })}

        </div>
    )
}
