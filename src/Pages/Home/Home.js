import React, { useEffect, useState } from "react";
import { getGames } from "../../Service/Api/Api";
import HomeCarousel from '../../Components/HomeCarousel'
import HomeSuggestedStreams from "../../Components/HomeSuggestedStreams";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Following from "../Following";

export default function Home() {
  const [games, setGames] = useState();

  useEffect(() => {
    const resp = getGames().then((re) => {
      setGames(re.data.data);
    });
  }, []);

  return (
    <div>
      <HomeCarousel />
      <HomeSuggestedStreams />
    </div>
  );
}
