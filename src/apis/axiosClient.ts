import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constants";
import { ROUTE } from "../router/routes";
import { useLocation } from "react-router-dom";
import { REFRESH_TOKEN } from "./urlConfig";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const setTokens = () => {
  const token = localStorage.getItem("accessToken");
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
setTokens();
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // setTokens()
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (error) {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      axios
        .post(
          `${BASE_URL}${REFRESH_TOKEN}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        )
        .then((res) => {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          localStorage.setItem(
            "expiresIn",
            JSON.stringify(res.data.data.expiresIn)
          );
          window.location.reload();
        })
        .catch((err) => {
          console.log("errAxiosClient: ", err);
          localStorage.clear();
          window.location.href = ROUTE.HOME;
          window.location.reload();
        });
    } else return Promise.reject(error);
  }
);

export default axiosClient;
