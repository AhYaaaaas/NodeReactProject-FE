/*
 * @Date: 2022-10-30 10:45:23
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 10:51:36
 * @FilePath: \NodeReactProject-FE\src\api\module.home\getComments.ts
 */
import { loginResponse } from '@/pages/login/type';
import http from "@/utils/http" 
type temp = loginResponse['userInfo']
export interface ICommentsResponse{
  "indexid": number,
  "bookid": string,
  "userid": string,
  "content": string,
  "commenttime": string,
  "userInfo": Pick<temp,"userName" | "uid" | "avatar" | "uAccount">
}
export default async function getComments(bookid:string) {
  const result:ICommentsResponse[] | [] = await http({
    method: 'get',
    url:`/api/update/comment?bookid=${bookid}`
  })
  return result;
}