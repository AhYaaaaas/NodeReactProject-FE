/*
 * @Date: 2022-10-23 10:36:45
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-27 20:45:40
 * @FilePath: \NodeReactProject-FE\src\api\module.register\register.ts
 */
import { createForm } from "@/utils/createForm";
import http from "@/utils/http"
interface IuserInfo{
  userName: string,
  password: string,
  uEmail: string,
}
interface IregisterResponse{
  "userName":string,
  "uAccount":string,
  "password":string,
  "uid":string,
  "uEmail":string,
}

export default async function account_register(userInfo: IuserInfo) {
  try {
    const res: IregisterResponse = await http({
      url:"api/account/register",
      method: "post",
      data: createForm(userInfo),
    })
    return res;
  } catch (e) {
    console.log(e);
  }
}