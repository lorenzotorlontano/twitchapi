import React, { useState, useEffect } from "react";
import {
  getSuggestedHomeStreams,
  getChannel,
  getUsers,
  getCurrentUserFollows,
} from "../../Service/Api/Api";
import { useStyles } from "./styles";

export default function VideoDetails({ id }) {
  const [videoInfo, setVideoInfo] = useState([]);
  const [suggestedHomeStreams, setSuggestedStreams] = useState([]);
  const [myFollows, setMyFollows] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getVideoInfo = async () => {
      const res = await getChannel(id);
      setVideoInfo(res.data.data);
    };
    getVideoInfo();
  }, []);

  useEffect(() => {
    const getMyFollows = async () => {
      const res = await getCurrentUserFollows();
      setMyFollows(res.data.data);
    };
    getMyFollows();
  }, []);

  useEffect(() => {
    const getHomeSuggested = async () => {
      const res = await getSuggestedHomeStreams();
      setSuggestedStreams(res.data.data);
    };
    getHomeSuggested();
  }, []);

  return (
    <div style={{ marginTop: "6px", cursor: "pointer" }}>
      <div style={{ display: `flex` }}>
        {" "}
        <span>{videoInfo[0]?.title}</span>
      </div>
      <br />
      <div>
        {videoInfo[0]?.broadcaster_name}
        <br />
        {videoInfo[0]?.game_name}
      </div>
    </div>
  );
}
