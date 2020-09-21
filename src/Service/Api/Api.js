import Axios from "axios";

const bracketsToken = localStorage.getItem("token");


let strArrayToken;
let token;

if (bracketsToken !== null) {
  strArrayToken = bracketsToken.split('"');
  token = strArrayToken[1];
  console.log();
  console.log(strArrayToken);
}

console.log("di token", token);

const axiosInstance = Axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    Authorization: "Bearer" + " " + token,
    "client-Id": "8uv5uigx4woona52bd4104ev464565",
  },
});

const secondInstance = Axios.create({
  baseURL: "https://id.twitch.tv/oauth2/token?client_id=8uv5uigx4woona52bd4104ev464565&client_secret=wylnlq7zqrnq4fwtpm757y6wbtirlc&grant_type=client_credentials",
});

export async function getGames() {
  return axiosInstance.get(`/games/top`);
}

export async function getToken() {
  return secondInstance.post();
}