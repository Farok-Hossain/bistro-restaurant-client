import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-restaurant-server-puce.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
