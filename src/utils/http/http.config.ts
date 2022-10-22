/*
 * @Date: 2022-10-21 19:40:04
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-22 12:26:51
 * @FilePath: \NodeReactProject-FE\src\utils\http\http.config.ts
 */
import {CreateAxiosDefaults} from "axios"
export const httpConfig: CreateAxiosDefaults<any> = {
  baseURL: "http://127.0.0.1:8080",
  timeout: 5000,
  headers: {
  }
}