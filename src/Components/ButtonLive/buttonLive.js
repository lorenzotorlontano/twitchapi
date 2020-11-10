import React, { useEffect, useState } from "react";
import useGetStreamById from "../../Hooks/useGetStreamById";

function ButtonLive({ id }) {
  const { data: streamsDetails } = useGetStreamById(id);

  return (
    <>
      {streamsDetails && streamsDetails.data[0] ? (
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
            {streamsDetails && streamsDetails?.data[0]?.type}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ButtonLive;
