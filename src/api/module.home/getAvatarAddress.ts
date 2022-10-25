/*
 * @Date: 2022-10-25 19:52:39
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 19:57:16
 * @FilePath: \NodeReactProject-FE\src\api\module.home\getAvatarAddress.ts
 */
import http from "@/utils/http"
export default async function getAvatarAddress(uid: string) {
  const res = await http({
    method: 'get',
    url:`/api/upload/avatar?uid=${uid}`
  })
  console.log(res);
  
  return res.toString();
}