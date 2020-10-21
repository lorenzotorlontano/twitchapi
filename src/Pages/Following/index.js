import React, { useState, useEffect } from "react";
import {
  getCurrentUserFollows,
  getStreamsById,
  getChannel,
  getUsers,
} from "../../Service/Api/Api";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import VideoDetails from "../../Components/VideoDetails";
import ReactPlayer from "react-player";
import ImgChannel from "../Following/ImgChannel/imgChannel";
import { Link, NavLink } from "react-router-dom";
import FollowingNavigation from "../../Components/FollowingNavigation";
import { useHistory, useLocation } from "react-router-dom";

export default function Following() {
  return (
    <div>
      <FollowingNavigation />
    </div>
  );
}
