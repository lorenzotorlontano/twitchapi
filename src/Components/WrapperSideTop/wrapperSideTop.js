import React, { useEffect, useState } from "react";
import Topbar from "../../Pages/Topbar/Topbar";
import Sidebar from "../../Pages/Sidebar/Sidebar";
import { getStreams, getMe, getUsers } from "../../Service/Api/Api";

function WrapperSideTop() {
  const [streams, setStreams] = useState([]);
  const [currentUrl, setCurrentUrl] = useState();

  useEffect(() => {
    getStreams().then((re) => {
      setStreams(re.data.data);
    });
  }, []);

  useEffect(() => {
    const promises = [];
    if (!!streams.length) {
      streams.forEach(
        (va) => va.user_id && promises.push(getUsers(va.user_id))
      );
      Promise.all(promises).then((responses) => {
        const imagesUrl = responses.map(
          (res) => res.data.data[0]?.profile_image_url
        );
        setCurrentUrl(imagesUrl);
      });
    }
  }, [streams]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <Topbar />
      </div>
      <div style={{}}>
        <Sidebar streams={streams} currentUrl={currentUrl} />
      </div>
    </div>
  );
}

export default WrapperSideTop;
