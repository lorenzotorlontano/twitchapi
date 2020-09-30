import React, { useEffect, useState, setState } from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ReactPlayer from "react-player"


export default function HomeCarousel() {

    const Gallery = () => {
        const handleOnDragStart = (e) => e.preventDefault()
        return (
            <AliceCarousel

                mouseTrackingEnabled>
                <ReactPlayer
                    width={"370px"}
                    height={"250px"}
                    url={`https://www.twitch.tv/stpeach`}
                />
                <ReactPlayer
                    width={"370px"}
                    height={"250px"}
                    url={`https://www.twitch.tv/deernadia`}
                />
                <ReactPlayer
                    width={"370px"}
                    height={"250px"}
                    url={`https://www.twitch.tv/pokimane`}
                />
            </AliceCarousel>
        )
    }

    return (
        <div>

            <Gallery />

        </div>
    )
}