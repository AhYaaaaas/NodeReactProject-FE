/*
 * @Date: 2022-10-26 22:33:54
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-26 22:38:47
 * @FilePath: \NodeReactProject-FE\src\api\module.home\getPersonalInfo.ts
 */
import { IPersonalInfo } from "@/pages/home/components/type";
import http from "@/utils/http"
export default async (uid:string) => {
  const res:IPersonalInfo = await http({
    method: "get",
    url:`/api/update/personalinfo?uid=${uid}`
  })
  return res;
}