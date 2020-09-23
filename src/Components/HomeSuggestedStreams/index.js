import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams } from '../../Service/Api/Api'

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
                    <img src={`${thumbnailFormatter(img.thumbnail_url)}`}
                        alt={"Not found"} key={`${img.id}`}
                    />
                )
            })}
        </div>
    )
}
