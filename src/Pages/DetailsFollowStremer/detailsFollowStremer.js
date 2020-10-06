import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { getSuggestedHomeStreams, getChannel , getStreamsDetails } from '../../Service/Api/Api'


function DetailsFollowStremer() {
  const [streamsKey, setStreamsKey] = useState();
  const [channel, setChannel] = useState();
  const [streamsDetails, setStreamsDetails] = useState();

  const { id } = useParams();


  return <div></div>;
}

export default DetailsFollowStremer;
