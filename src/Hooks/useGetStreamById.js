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
const getStreamById = async (key, id) => {
  const { data } = await axiosInstance.get(`/streams?user_id=${id}`);
  return data;
};

export default function useGetStreamById(id) {
  return useQuery(["streamById", id], getStreamById, { enabled: id });
}
