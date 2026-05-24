import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://compaany-review-be.onrender.com/api",
});

export default axiosInstance;