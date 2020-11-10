import React, { useEffect, useState } from "react";
import useGetUser from "../../../Hooks/useGetUser";
import useGetVideosById from "../../../Hooks/useGetVideosById";
import ReactPlayer from "react-player";
import { thumbnailFormatter } from "../../../Utils/thumbnailFormatter";
import ImgChannel from "../../../Pages/Following/ImgChannel/imgChannel";
import VideoDetails from "../../VideoDetails/index";
// import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";

export default function VideosInfoDetails({ id }) {
  const handleBrowseToChannelDetails = (id) => {
    window.location.assign(`/fullScreenStreamView/${id}`);
  };
  const browse = (id) => {
    window.location.assign(`/detailsFollowStremer/${id}`);
  };

  const { data } = useGetVideosById(id);

  return (
    <>
      <Grid item md={4} style={{ color: "white" }}>
        <ReactPlayer
          width={"367px"}
          height={"248px"}
          url={`https://www.twitch.tv/${
            data && data?.data[0]?.url?.replace(/\s+/g, "")
          }`}
          // light={`${thumbnailFormatter(
          //   data && data.data[0]?.thumbnailFormatter
          // )}`}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleBrowseToChannelDetails(data && data?.data[0]?.user_id)
            }
          >
            <ImgChannel id={data && data?.data[0]?.user_id} />
          </div>

          <div onClick={() => browse(data?.data[0]?.user_id)}>
            <VideoDetails id={data && data?.data[0]?.user_id} />
          </div>
        </div>
      </Grid>
    </>
  );
}
