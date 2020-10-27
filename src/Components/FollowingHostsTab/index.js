import React from "react";
import Image from "../../Pictures/twitchHosts.JPG";
import { useStyles } from "./styles";

export default function FollowingHostsTab() {
  const classes = useStyles();

  const handleClick = () => {
    window.open("https://www.twitch.tv/directory/following/hosts", "_blank");
  };

  return (
    <div>
      <img
        src={Image}
        onClick={() => handleClick()}
        style={{ marginTop: "24px", cursor: "pointer", maxWidth: "777px" }}
      />
    </div>
  );
}
