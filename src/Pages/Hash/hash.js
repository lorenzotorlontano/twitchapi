import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

function Hash() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const accessTokenArr = location.hash.split("=");
    console.log(accessTokenArr[1]);
    const accessTokenArrReal = accessTokenArr[1].split("&");
    const accessToken = accessTokenArrReal[0];
    localStorage.setItem("token", accessToken);
    history.push("/home");
  }, []);

  return <div style={{ marginTop: "500px", textAlign: "center" }} />;
}

export default Hash;
