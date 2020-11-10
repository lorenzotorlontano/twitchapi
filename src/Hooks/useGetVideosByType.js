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
const getVideosByType = async (key, id, views, secondViews) => {
  console.log("id , views , secondViews", id, views, secondViews);
  const { data } = await axiosInstance.get(
    `/videos?user_id=${id}&type=${views}&sort=${secondViews}`
  );
  return data;
};

export default function useGetVideosByType(id, views, secondViews) {
  return useQuery(["videosByType", id, views, secondViews], getVideosByType, {
    enabled: id,
  });
}
