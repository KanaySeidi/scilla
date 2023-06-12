import axios from "axios";
const token = "testtoken";

axios.defaults.baseURL = "https://api.skilla.ru/mango/getList";

export const APIFilter = axios.create({
  baseURL: "https://api.skilla.ru/mango/getList?date_start=2023-06-09",
  headers: {
    "Content-Type": "application/json",
  },
});

APIFilter.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = `Bearer ${token}`;
  return req;
});
