/*
 * @Date: 2022-10-28 15:58:34
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-28 22:19:01
 * @FilePath: \NodeReactProject-FE\src\api\module.home\uploadBook.ts
 */
import { createForm } from "@/utils/createForm"
import http from "@/utils/http"
interface IChunk{
  bookName: string,
  chunk: Blob,
  uid: string,
}
export default async function uploadBook (obj: IChunk) {
  const res:string = await http({
    method: "post",
    url: "api/upload/book",
    data: createForm(obj)
  });
  return res;
}