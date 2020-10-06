import Axios from "axios";

const token = localStorage.getItem("token");

/* const bracketsToken = localStorage.getItem("token");

let strArrayToken;
let token;

if (bracketsToken !== null) {
  strArrayToken = bracketsToken.split('"');
  token = strArrayToken[1];
} */


const axiosInstance = Axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    Authorization: "Bearer " +token,
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

export async function getSuggestedHomeStreams() {
  return axiosInstance.get(`/streams?first=6`);
}

export async function getSuggestedHomeStreamsCarousel() {
  return axiosInstance.get(`/streams?first=20`);
}

export async function getVideos() {
  return axiosInstance.get(`/videos`);
}

export async function getMe() {
  return axiosInstance.get(`/users?login=lorenzotorlontano`);
}

export async function getMyUser() {
  return axiosInstance.get(`/users?id=584434217`);
}

export async function getUsers(id) {
  return axiosInstance.get(`/users/?id=${id}`);
}

export async function getStreams() {
  return axiosInstance.get(`/streams`);
}

export async function searchCategories(param) {
  return axiosInstance.get(`/search/categories?query=${param}`);
}
export async function searchChannels(param) {
  return axiosInstance.get(`/search/channels?query=${param}`);
}

export async function getChannel(user_id) {
  return axiosInstance.get(`/channels?broadcaster_id=${user_id}`);
}

export async function getUsersSearched(param) {
  return axiosInstance.get(`/users/?login=${param}`);
}

export async function getCurrentUserFollows() {
  return axiosInstance.get(`/users/follows?from_id=584434217`)
}

export async function getStreamsDetails(id) {
  return axiosInstance.get(`/streams?user_id=${id}`);
}