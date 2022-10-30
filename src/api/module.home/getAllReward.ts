/*
 * @Date: 2022-10-30 12:50:42
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 13:18:42
 * @FilePath: \NodeReactProject-FE\src\api\module.home\getAllReward.ts
 */
import http from "@/utils/http"
import getPersonalInfo from "./getPersonalInfo";
export default async function getAllReward(keyWord:string) {
  const res: IRewardResponse[] = await http({
    method: "get",
    url:`api/reward/rwd?keyWord=${keyWord}`
  })
  const queue = res.map((item) => {
    return getPersonalInfo(item.uid);
  })
  const info = await Promise.all(queue);
  
  return res.map((item,index) => {
    return {...item,userName:info[index]['userName']}
  });
}
export interface IRewardResponse{
  "uid": string,
  "rewardid": string,
  "bookname": string,
  "description": string,
  "start": string,
  "end": string,
  "isTimeOut": Boolean,
  "isFinished":Boolean
}