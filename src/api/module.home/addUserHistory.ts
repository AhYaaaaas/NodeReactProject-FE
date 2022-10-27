import { createForm } from "@/utils/createForm"
import http from "@/utils/http"
import { historyType } from "./getUserHistory"
interface IAddUserHistoryType{
  uid:string,
  description: string,
  type?: historyType,
  bookid?:string
}
export default async (ctx:IAddUserHistoryType) => {
  try {
    const res = await http({
      method: "post",
      url: "api/update/actions",
      data: createForm(ctx)
    })
  } catch (e) {
    console.log(e);
  }
}