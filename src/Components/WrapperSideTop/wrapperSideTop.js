import React from "react";
import Topbar from "../../Pages/Topbar/Topbar";
import Sidebar from "../../Pages/Sidebar/Sidebar";

function WrapperSideTop() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%" }}>
        <Topbar />
      </div>
      <div style={{}}>
        <Sidebar />
      </div>
    </div>
  );
}

export default WrapperSideTop;
