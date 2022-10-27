/*
 * @Date: 2022-10-27 20:31:50
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-27 21:45:32
 * @FilePath: \NodeReactProject-FE\src\api\module.home\getUserHistory.ts
 */
import http from "@/utils/http"
export interface IHistory extends Object{
  "description": string,
  "actionstime": string,
  "type": historyType,
  "bookid": string
}
export enum historyType{
  UPLOAD = 'upload',DOWNLOAD = 'download',UPDATE = 'update'
}
export default async (uid: string) => {
  const result: IHistory[] = await http({
    method: "get",
    url:`/api/update/actions?uid=${uid}`
  })
  return result;
}