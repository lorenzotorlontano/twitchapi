import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleCall = () => {
    window.location.replace(
      "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=8uv5uigx4woona52bd4104ev464565&redirect_uri=http://localhost:3000/hash&scope=channel:read:stream_key"
    );
  };

  return (
    <div style={{ marginTop: "500px", textAlign: "center" }}>
      <h1 style={{ color: "whitesmoke" }} onClick={handleCall}>
        LOGIN
      </h1>
    </div>
  );
}

export default Login;
