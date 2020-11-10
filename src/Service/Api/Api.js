import Axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = Axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    Authorization: "Bearer " + token,
    "client-Id": "8uv5uigx4woona52bd4104ev464565",
  },
});

const secondInstance = Axios.create({
  baseURL:
    "https://id.twitch.tv/oauth2/token?client_id=8uv5uigx4woona52bd4104ev464565&client_secret=wylnlq7zqrnq4fwtpm757y6wbtirlc&grant_type=client_credentials",
});

export async function searchChannels(param) {
  return axiosInstance.get(`/search/channels?query=${param}`);
}
