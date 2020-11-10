import React, { useEffect, useState } from "react";
import HomeCarousel from "../../Components/HomeCarousel";
import HomeSuggestedStreams from "../../Components/HomeSuggestedStreams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Following from "../Following";
import useGetGamesTop from "../../Hooks/useGetGamesTop";

export default function Home() {
  const { data } = useGetGamesTop();

  return (
    <div>
      <HomeCarousel />
      <HomeSuggestedStreams />
    </div>
  );
}
