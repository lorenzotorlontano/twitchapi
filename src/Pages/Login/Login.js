import React, { useState } from "react";
import { getToken } from "../../Service/Api/Api";
import { useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  const handleCall = () => {
    const resp = getToken().then((re) => {
      const accessToken = JSON.stringify(re.data.access_token);
      localStorage.setItem("token", accessToken);
    });
    history.push('/home');
  };

  return (
    <div style={{marginTop: '500px', textAlign: 'center'}}>
      <h1 style={{}} onClick={handleCall}>LOGIN</h1>
    </div>
  );
}

export default Login;
