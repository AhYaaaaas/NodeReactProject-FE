import { IPersonalInfo } from "@/pages/home/components/type";
import { createForm } from "@/utils/createForm";
import http from "@/utils/http"
/*
 * @Date: 2022-10-26 22:51:37
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-26 22:58:33
 * @FilePath: \NodeReactProject-FE\src\api\module.home\updatePersonInfo.ts
 */
export default async (form:IPersonalInfo) => {
  const res = await http({
    url: "api/update/personalinfo",
    method: 'put',
    data:createForm(form)
  })
  console.log(res);
}