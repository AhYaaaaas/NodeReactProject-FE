/*
 * @Date: 2022-10-22 10:54:36
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-22 11:15:44
 * @FilePath: \NodeReactProject-FE\src\api\module.register\code.ts
 */
import { createForm } from '@/utils/createForm'
import http from '@/utils/http/index'
export async function getCode(uEmail:string) {
  const res = await http({
    method: 'get',
    url: 'api/account/code',
    params: {
      uEmail
    }
  })
  return res
}
export async function identifyCode(uEmail:string,uCode:string) {
  const res = await http({
    method: 'post',
    url: "api/account/code",
    data:createForm({uEmail,uCode})
  })
  return res;
}