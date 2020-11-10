import React, { useEffect, useState } from "react";
import Topbar from "../../Pages/Topbar/Topbar";
import Sidebar from "../../Pages/Sidebar/Sidebar";
import useGetStreams from "../../Hooks/useGetStreams";
import useGetUsers from "../../Hooks/useGetUsers";

function WrapperSideTop() {
  const { data: streams } = useGetStreams();

  const { data: currentUrl } = useGetUsers(streams?.data);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <Topbar />
      </div>
      <div style={{}}>
        <Sidebar streams={streams?.data} currentUrl={currentUrl} />
      </div>
    </div>
  );
}

export default WrapperSideTop;
