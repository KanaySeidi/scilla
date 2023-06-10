import axios from "axios";
const token = "testtoken";

axios.defaults.baseURL = "https://api.skilla.ru/mango/getList";

export const API = axios.create({
  baseURL: "https://api.skilla.ru/mango/getList",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = `Bearer ${token}`;
  return req;
});
