import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";

import Axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = Axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    Authorization: "Bearer " + token,
    "client-Id": "8uv5uigx4woona52bd4104ev464565",
  },
});

const getMyFollows = async () => {
  const { data } = await axiosInstance.get(`/users/follows?from_id=584434217`);
  return data;
};

export default function useGetMyFollows() {
  return useQuery("myFollows", getMyFollows);
}
