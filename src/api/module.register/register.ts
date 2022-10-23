import { createForm } from "@/utils/createForm";
import http from "@/utils/http"
interface IuserInfo{
  userName: string,
  password: string,
  uEmail: string,
}
interface IregisterResponse{
  "userName":string,
  "uAccount":string,
  "password":string,
  "uid":string,
  "uEmail":string,
}

export default async function account_register(userInfo: IuserInfo) {
  console.log(userInfo);
  
  try {
    const res: IregisterResponse = await http({
      url:"api/account/register",
      method: "post",
      data: createForm(userInfo),
    })
    return res;
  } catch (e) {
    console.log(e);
  }
}