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

const getUsers = async (id) => {
  return axiosInstance.get(`/users/?id=${id}`);
};

const getUserPromise = async (key, id) => {
  const promises = [];
  if (!!id.length) {
    id.forEach((val) => val.user_id && promises.push(getUsers(val.user_id)));
    return Promise.all(promises).then((res) =>
      res.map((singleRes) => singleRes.data.data[0]).filter(Boolean)
    );
  }
};

export default function useGetUsers(id) {
  return useQuery(["currentUrl", id], getUserPromise, { enabled: id });
}
