/*
 * @Date: 2022-10-29 19:21:10
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-29 19:36:07
 * @FilePath: \NodeReactProject-FE\src\api\module.home\searchBook.ts
 */

import http from "@/utils/http"
export interface ISearchBookResponse{
  "bookid": string,
  "bookname": string,
  "uploaderid": string,
  "uploadtime": string,
  "imgUrl": string,
  "bookUrl": string
}
export default async function searchBook(keyWord:string) {
  const res:ISearchBookResponse[] | "Not Exist" = await http({
    method: "get",
    url:`/api/upload/book?keyWord=${keyWord}`
  })
  if (res === "Not Exist") {
    return []
  }
  return res;
}