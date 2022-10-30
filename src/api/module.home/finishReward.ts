import { createForm } from "@/utils/createForm";
import http from "@/utils/http";

export default async function finishReward(rewardid:string) {
  const res = await http({
    method: "put",
    url: "/api/reward/tag",
    data: createForm({ rewardid })
  });
  return res;
}