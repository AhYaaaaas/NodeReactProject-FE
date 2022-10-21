/*
 * @Date: 2022-10-20 21:32:38
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 21:13:42
 * @FilePath: \NodeReactProject-FE\src\components\login\index.tsx
 */
import {
  Wrapper,
  FormExtend,
  FormItemExtend,
  Circle,
  InputExtend,
  ButtonExtend,
  TextBox,
} from "./index.css";
import _ from "lodash"
// import http from "@/utils/http/index";
// import { loginConfig } from "./type";
// import { createForm } from "@/utils/createForm";
import { useState } from "react";
// async function _login(loginConfig: loginConfig) {
//   const form = createForm(loginConfig);
//   const res = await http({
//     method: "post",
//     data: form,
//   });
//   return res;
// }
export default function Login() {
  const [uAccount,setAccount] = useState("默认账号");
  const [password, setPassword] = useState("默认密码");
  return (
    <>
      <Wrapper>
        <FormExtend>
          <Circle></Circle>
          <TextBox>BOOK</TextBox>
          <div className="dataArea">
            <FormItemExtend label="账号" name="uAccount">
              <InputExtend value={uAccount} onChange={_.debounce((e)=>setAccount(()=>e.target.value))}></InputExtend>
            </FormItemExtend>
            <FormItemExtend label="密码" name="password">
              <InputExtend value={password} onChange={_.debounce((e)=>setPassword(()=>e.target.value))}></InputExtend>
            </FormItemExtend>
            <FormItemExtend>
              <ButtonExtend type="primary" htmlType="submit" >
                确定
              </ButtonExtend>
            </FormItemExtend>
          </div>
        </FormExtend>
      </Wrapper>
    </>
  );
}
