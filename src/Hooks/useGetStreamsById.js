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

const getStreamsById = async (id) => {
  return axiosInstance.get(`/streams?user_id=${id}`);
};

const getAllStreams = async (ids) => {
  const promises = [];
  if (!!ids.length) {
    ids.forEach((val) => val.to_id && promises.push(getStreamsById(val.to_id)));
    return Promise.all(promises).then((res) =>
      res.map((singleRes) => singleRes.data.data[0]).filter(Boolean)
    );
  }
};

export default function useGetStreamsById(id) {
  return useQuery("allStreams", () => getAllStreams(id));
}
