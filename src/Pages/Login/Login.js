import React from 'react'
import {
    authEndpoint,
    clientId,
    redirectUri,
    responseType
  } from "../../Config/Config";

function Login() {
    return (
        <div>
              <a
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}
          id="generic-btn-premium"
          role="button"
        >
          LOGIN test
        </a>
        </div>
    )
}

export default Login
