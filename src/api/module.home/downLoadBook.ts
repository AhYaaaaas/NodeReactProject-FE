/*
 * @Date: 2022-10-29 20:52:57
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-29 21:16:05
 * @FilePath: \NodeReactProject-FE\src\api\module.home\downLoadBook.ts
 */
import http from "@/utils/http";
export default async function downLoadBook(fileName: string) {
  try {
    const blob: Blob = await http({
      method: "get",
      url: "api/download/book?bookName=" + fileName,
      responseType: "blob",
    });
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  } catch (e) {
    throw e;
  }
}
