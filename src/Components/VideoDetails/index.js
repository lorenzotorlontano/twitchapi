import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams, getChannel } from '../../Service/Api/Api'
import { useStyles } from './styles';

export default function VideoDetails({ id }) {

    const [videoInfo, setVideoInfo] = useState([])

    const classes = useStyles();

    useEffect(() => {
        const getVideoInfo = async () => {
            const res = await getChannel(id)
            setVideoInfo(res.data.data)
        }
        getVideoInfo()
    }, [])

    console.log("jnowdqcjionfniqericfvnihbqericfbih", videoInfo)

    return (
        <div style={{ marginTop: "6px" }}>
            {videoInfo[0]?.title}
            <br />
            {videoInfo[0]?.broadcaster_name}
            <br />
            {videoInfo[0]?.game_name}
        </div>
    )
}
