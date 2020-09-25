import React, { useState, useEffect } from 'react'
import { getSuggestedHomeStreams } from '../../Service/Api/Api'
import ReactPlayer from "react-player"

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

    console.log(suggestedHomeStreams)

    return (
        <div>
            {suggestedHomeStreams && suggestedHomeStreams.map((img) => {
                return (
                    // <img src={`${thumbnailFormatter(img.thumbnail_url)}`}
                    //     alt={"Not found"} key={`${img.id}`}
                    // />
                    <div>
                        <ReactPlayer
                            url={`https://www.twitch.tv/${img.user_name}`}
                            controls
                        />
                    </div>


                )
            })}
            {/* <div>
                <iframe
                    src="https://player.twitch.tv/js/embed/v1.js/?video=12783852&parent=localhost/home&autoplay=false"
                    // src="https://player.twitch.tv/?channel=MatteoHS"

                    height="324px"
                    width="633px"
                    frameborder={0}
                    scrolling="no"
                    allowfullscreen={true}>
                </iframe>
            </div> */}

            <div>
                <ReactPlayer
                    url={`https://www.twitch.tv/${suggestedHomeStreams[0]?.user_name}`}
                    controls
                />
            </div>


        </div>
    )
}
