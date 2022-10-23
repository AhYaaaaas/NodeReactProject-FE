/*
 * @Date: 2022-10-21 21:45:57
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 12:00:19
 * @FilePath: \NodeReactProject-FE\src\api\module.login\login.ts
 */
import http from "@/utils/http";
import { loginConfig, loginResponse } from "@/pages/login/type";
import { createForm } from "@/utils/createForm";
const loginMethods = {
  TokenLogin: async (loginConfig:loginConfig | {}) => {
    const form = createForm(loginConfig);
    const res: loginResponse = await http({
      method: "post",
      url: "api/account/login",
      data: form,
    });
    return res;
  },
  AccountLogin: async (loginConfig:loginConfig | {}) => {
    const form = createForm(loginConfig);
    const res: loginResponse = await http({
      method: "post",
      url: "api/account/login",
      data:form
    });
    return res;
  }
};
export enum LOGINTYPE{
  TOKENLOGIN = "TokenLogin",
  ACCOUNTLOGIN = "AccountLogin"
}
export default async function _login(loginConfig: loginConfig | {},loginType:LOGINTYPE) {
  const res: loginResponse = await loginMethods[loginType](loginConfig);
  return res;
}
