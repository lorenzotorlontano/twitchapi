import React from "react";
import Image from "../../Pictures/twitchCategories.JPG";
import { useStyles } from "./styles";

export default function FollowingCategoriesTab() {
  const classes = useStyles();

  const handleClick = () => {
    window.open("https://www.twitch.tv/directory/following/games", "_blank");
  };

  return (
    <div>
      {/* <iframe
        src="http://player.twitch.tv/?channel=oyelatinos&parent=localhost:3000"
        width="400"
        height="400"
      /> */}
      {/* <h3
        style={{ color: "whitesmoke", textAlign: "center", marginLeft: "17px" }}
      >
        Categories
      </h3> */}
      <img
        src={Image}
        onClick={() => handleClick()}
        style={{ marginTop: "24px", cursor: "pointer" }}
      />
    </div>
  );
}
