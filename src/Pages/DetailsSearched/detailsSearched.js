import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MainDetailsSearched from "../DetailsSearched/MainDetailsSearched/mainDetailsSearched";
import useGetSearchChannels from "../../Hooks/useSearchChannels";

function DetailsSearched() {
  const [more, setMore] = useState(false);
  const [all, setAll] = useState(false);
  const [icon, setIcon] = useState(false);
  const [notifcIcon, setNotifcIcon] = useState(<NotificationsIcon />);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedNotific, setSelectedNotific] = useState("");
  const [favoriteIcon, setFavoriteIcon] = useState(true);

  const { id } = useParams();

  const { data: channels } = useGetSearchChannels(id);

  const switchIcon = (name) => {
    const strSplitted = selectedIcon.replace(`${name}&`, "");
    setSelectedIcon(strSplitted);
  };

  const handleIcon = (name) => {
    let st;
    if (selectedNotific.includes(name)) {
      const strSplit = selectedNotific.replace(`${name}&`, "");
      setSelectedNotific(strSplit);
    } else {
      st = selectedNotific.concat(name, "&");
      setSelectedNotific(st);
    }
  };

  const handleSelection = (name) => {
    let str = selectedIcon.concat(name, "&");
    setSelectedIcon(str);
  };

  const showMore = () => {
    setMore(!more);
  };

  const showAll = () => {
    setAll(!all);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid
      container
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "#0E0E10",
        color: "white",
      }}
    >
      <MainDetailsSearched
        showAll={showAll}
        showMore={showMore}
        handleSelection={handleSelection}
        handleIcon={handleIcon}
        switchIcon={switchIcon}
        channels={channels && channels?.data}
        selectedIcon={selectedIcon}
        selectedNotific={selectedNotific}
        all={all}
        more={more}
        id={id}
      />
    </Grid>
  );
}
export default DetailsSearched;
