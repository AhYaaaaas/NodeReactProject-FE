/*
 * @Date: 2022-10-21 19:38:54
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 19:57:43
 * @FilePath: \NodeReactProject-FE\src\utils\http\index.ts
 */
import axios from "axios";
import {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse
} from "axios"
import { httpConfig } from "./http.config";

const instance:AxiosInstance = axios.create(httpConfig);
instance.interceptors.request.use((req: AxiosRequestConfig<any>) => {
  return req;
}, err => console.log(err));

instance.interceptors.response.use((res: AxiosResponse) => {
  return new Promise((resolve) => {
    resolve(res.data);
  })
}, err => console.log(err));
export default instance;