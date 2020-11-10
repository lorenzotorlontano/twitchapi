import React, { useEffect, useState, setState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import VideoDetails from "../../Components/VideoDetails";
import ReactPlayer from "react-player";
import ImgChannel from "../../Pages/Following/ImgChannel/imgChannel";
import { Link, NavLink } from "react-router-dom";
import FollowingVideosTab from "../FollowingVideosTab/followingVideosTab";
import FollowingCategoriesTab from "../FollowingCategoriesTab";
import useGetUser from "../../Hooks/useGetUser";
import useGetMyFollows from "../../Hooks/useGetMyFollows";
import FollowingPageDetails from "../FollowingPage/FollowingPageDetails/followingPageDetails";
export default function FollowingPage() {
  const { data: myFollows } = useGetMyFollows();

  const [videoThumbs, setVideoThumbs] = useState([]);

  const [videoInfo, setVideoInfo] = useState([]);

  const [showMore, setShowMore] = useState(false);

  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };

  return (
    <>
      <div>
        {myFollows &&
          myFollows?.data?.map((iterator, index) => {
            if (index < 1) {
              return (
                <FollowingPageDetails
                  id={iterator.to_id}
                  key={index}
                  myFollows={myFollows.data}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
}
