import axios from "axios";
import { BASE_URL } from "../constants";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    // "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosApi;
