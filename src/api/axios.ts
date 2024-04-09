import axios from "axios";

export const axiosT = axios.create({
  baseURL: "https://reqres.in/",
});