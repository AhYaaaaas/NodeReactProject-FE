/*
 * @Date: 2022-10-21 19:38:54
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 17:55:30
 * @FilePath: \NodeReactProject-FE\src\utils\http\index.ts
 */
import axios from "axios";
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { getToken, setToken } from "../token";
import { httpConfig } from "./http.config";

const instance: AxiosInstance = axios.create(httpConfig);
instance.interceptors.request.use(
  (req: AxiosRequestConfig<any>) => {
    const token = getToken();
    if (token) {
      req.headers = {
        Authorization:token
      }
    }
    console.log("req.header",req.headers);
    return req;
  },
  (err) => console.log(err)
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { token } = res.data;
    console.log("send token",token);
    if (token) {
      setToken(token);
    }
    return res.data
  },
  (err) => console.log(err)
);
export default instance;
