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
const getSearchChannels = async (key, id) => {
  const { data } = await axiosInstance.get(`/search/channels?query=${id}`);
  return data;
};

export default function useGetSearchChannels(id) {
  return useQuery(["channels", id], getSearchChannels, { enabled: id });
}
