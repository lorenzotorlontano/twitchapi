import React, { useEffect, useState } from "react";
import {
  getSuggestedHomeStreams,
  getStreamsById,
  getChannel,
  getStreamsDetails,
  getUsers,
} from "../../Service/Api/Api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";

function DetailsChannel() {
  const [usersChannelInformations, setUsersChannelInformations] = useState();
  const [streamsDetails, setStreamsDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    const res = getUsers(id).then((re) => {
      setUsersChannelInformations(re.data.data[0]);
    });
  }, []);

  useEffect(() => {
    const resp = getStreamsById(id).then((re) => {
      setStreamsDetails(re.data.data[0]);
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ReactPlayer
        playing={true}
        controls={false}
        volume={null}
        loop={true}
        width={"100%"}
        height={"50%"}
        url={`https://www.twitch.tv/${streamsDetails?.user_name.replace(
          /\s+/g,
          ""
        )}`}
      />
    </div>
  );
}
export default DetailsChannel;
