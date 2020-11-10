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

const getUser = async (id) => {
  const { data } = await axiosInstance.get(`/users/?id=${id}`);
  return data;
};

export default function useGetUser(id) {
  return useQuery(id, getUser);
}
