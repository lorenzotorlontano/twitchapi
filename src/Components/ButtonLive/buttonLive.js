import React, { useEffect, useState } from "react";
import {
  getSuggestedHomeStreams,
  getStreamsById,
  getChannel,
  getStreamsDetails,
  getUsers,
} from "../../Service/Api/Api";

function ButtonLive({ id }) {
  const [streamsDetails, setStreamsDetails] = useState();

  useEffect(() => {
    const resp = getStreamsById(id).then((re) => {
      setStreamsDetails(re.data.data[0]);
    });
  }, []);
  return (
    <div style={{ height: "23px", width: "43px" }}>
      <button
        style={{
          backgroundColor: "#E91916",
          outlineStyle: "none",
          border: "2px solid black",
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "3px",
          borderBottomRightRadius: "3px",
        }}
      >
        {streamsDetails && streamsDetails.type}
      </button>
    </div>
  );
}

export default ButtonLive;
