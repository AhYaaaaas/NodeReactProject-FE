/*
 * @Date: 2022-10-28 19:44:50
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-28 19:46:05
 * @FilePath: \NodeReactProject-FE\src\api\module.home\uploadSuccess.ts
 */
import { createForm } from "@/utils/createForm"
import http from "@/utils/http"
export default async function (obj:{uid:string,bookName:string}) {
  const bookid:string = await http({
    method: "post",
    url: "/api/upload/success",
    data:createForm(obj)
  })
  return bookid;
}