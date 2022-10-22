/*
 * @Date: 2022-10-21 21:45:57
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-22 11:02:21
 * @FilePath: \NodeReactProject-FE\src\api\module.login\login.ts
 */
import http from "@/utils/http"
import { loginConfig, loginResponse } from "@/components/login/type"
import { AxiosResponse } from "axios"
import { createForm } from "@/utils/createForm"
export default async function _login(loginConfig: loginConfig) {
  const form = createForm(loginConfig);
  const res: loginResponse = await http({
    method: "post",
    url: "api/account/login",
    data: form,
  });
  return res;
}