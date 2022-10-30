/*
 * @Date: 2022-10-30 14:28:18
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 14:29:51
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\publishReward.ts
 */
import { createForm } from "@/utils/createForm";
import http from "@/utils/http"
export default async function publishReward(obj: {
  uid: string;
  bookname: string;
  end: string;
  description: string;
}) {
  const res = await http({
    method: 'post',
    url: '/api/reward/rwd',
    data:createForm(obj)
  })
  return res;
}
