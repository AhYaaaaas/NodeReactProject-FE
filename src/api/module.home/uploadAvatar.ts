/*
 * @Date: 2022-10-25 20:19:44
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 20:51:33
 * @FilePath: \NodeReactProject-FE\src\api\module.home\uploadAvatar.ts
 */
import { createForm } from '@/utils/createForm'
import http from '@/utils/http'
export default async function uploadAvatar(file: any, uid: string) {
  const form = new FormData();
  form.append('file', file);
  form.append('uid', uid);
  const res = await http({
    method: 'post',
    data: form,
    url:"/api/upload/avatar"
  });
  return res;
}