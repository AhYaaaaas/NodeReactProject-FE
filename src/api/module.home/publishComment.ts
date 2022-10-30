
import { createForm } from "@/utils/createForm"
import http from "@/utils/http"
export default async function publishComment(obj:{uid:string,bookid:string,comment:string}) {
  const res = await http({
    method: "post",
    url: "/api/update/comment",
    data: createForm(obj)
  });
  return res;
}