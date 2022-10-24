/*
 * @Date: 2022-10-24 19:36:04
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-24 19:41:19
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\type.ts
 */
import { loginResponse } from "@/pages/login/type";
export interface Icomment{
  comment: string,
  date:string,
  userInfo: loginResponse['userInfo'],
}