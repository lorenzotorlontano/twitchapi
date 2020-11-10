import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import useGetChannels from "../../Hooks/useGetChannels";

export default function VideoDetails({ id }) {
  const classes = useStyles();

  const { data: videoInfo } = useGetChannels(id);

  return (
    <div style={{ marginTop: "6px", cursor: "pointer" }}>
      <div style={{ display: `flex` }}>
        {" "}
        <span>{videoInfo && videoInfo?.data[0]?.title}</span>
      </div>
      <br />
      <div>
        {videoInfo && videoInfo?.data[0]?.broadcaster_name}
        <br />
        {videoInfo && videoInfo?.data[0]?.game_name}
      </div>
    </div>
  );
}
