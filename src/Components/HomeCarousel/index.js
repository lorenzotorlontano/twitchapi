import React, { useEffect, useState, setState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player";
import { useStyles } from "./styles";
import { getSuggestedHomeStreamsCarousel } from "../../Service/Api/Api";

export default function HomeCarousel() {
  const classes = useStyles();

  const [suggestedHomeStreams, setSuggestedStreams] = useState([]);
  const [randomTrio, setRandomTrio] = useState([]);

  useEffect(() => {
    const getHomeSuggested = async () => {
      const res = await getSuggestedHomeStreamsCarousel();
      setSuggestedStreams(res.data.data);
    };
    getHomeSuggested();
  }, []);

  useEffect(() => {
    let tempArray = [];

    let random_index1 = Math.floor(Math.random() * 20);
    let random_index2 = Math.floor(Math.random() * 20);
    let random_index3 = Math.floor(Math.random() * 20);

    tempArray.push(suggestedHomeStreams[random_index1]);
    tempArray.push(suggestedHomeStreams[random_index2]);
    tempArray.push(suggestedHomeStreams[random_index3]);

    setRandomTrio(tempArray);
  }, [suggestedHomeStreams]);

  const Gallery = () => {
    const handleOnDragStart = (e) => e.preventDefault();
    return (
      <div className={classes.carouselRoot}>
        <div className={classes.carouselWrapper}>
          <AliceCarousel className={classes.aliceCarousel} mouseTrackingEnabled>
            {randomTrio &&
              randomTrio.map((iterator) => {
                return (
                  <div className={classes.carouselItem}>
                    <ReactPlayer
                      width={"372px"}
                      height={"252px"}
                      url={`https://www.twitch.tv/${iterator?.user_name.replace(
                        /\s+/g,
                        ""
                      )}`}
                      playing={true}
                    />
                  </div>
                );
              })}
          </AliceCarousel>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Gallery />
    </div>
  );
}
