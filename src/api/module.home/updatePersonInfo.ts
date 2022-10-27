/*
 * @Date: 2022-10-26 22:51:37
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-27 20:30:20
 * @FilePath: \NodeReactProject-FE\src\api\module.home\updatePersonInfo.ts
 */
import { IPersonalInfo } from "@/pages/home/components/type";
import { createForm } from "@/utils/createForm";
import http from "@/utils/http"
export default async (form:IPersonalInfo) => {
  const res = await http({
    url: "api/update/personalinfo",
    method: 'put',
    data:createForm(form)
  })
}