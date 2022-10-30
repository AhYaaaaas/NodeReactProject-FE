/*
 * @Date: 2022-10-30 15:20:15
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 19:29:01
 * @FilePath: \NodeReactProject-FE\src\api\module.home\uploadMannual.ts
 */

import addUserHistory from "./addUserHistory";
import { historyType } from "./getUserHistory";
import uploadBook from "./uploadBook";
import uploadSuccess from "./uploadSuccess";

export const upload = (uid:string,callback:()=>void) => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.addEventListener("change", async (e: Event) => {
    let file = (<HTMLInputElement>e.target).files![0];
    const { name } = file;
    await uploadBook({ bookName: name, uid, chunk: file });
    const bookid = await uploadSuccess({ uid, bookName: name });
    await addUserHistory({
      uid,
      description: `upload book ${name}`,
      type: historyType["UPLOAD"],
      bookid,
    });
    callback();
  });
  fileInput.click();
};
