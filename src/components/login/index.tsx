/*
 * @Date: 2022-10-20 21:32:38
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 21:49:39
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
import _ from "lodash";
import { loginResponse } from "./type";
import { useState } from "react";
import { setToken } from "@/utils/token"
import  _login  from "@/api/module.login/login"
export default function Login() {
  const [uAccount, setAccount] = useState("默认账号");
  const [password, setPassword] = useState("默认密码");
  const [userInfo,setUserInfo] = useState({} as loginResponse["userInfo"])
  let response = {} as loginResponse;
  const login = async () => {
    response = await _login({ uAccount, password });
    const { token, userInfo:info } = response;
    setToken(token);
    setUserInfo(() => info);
};
  return (
    <>
      <Wrapper>
        <FormExtend>
          <Circle></Circle>
          <TextBox>BOOK</TextBox>
          <div className="dataArea">
            <FormItemExtend label="账号" name="uAccount">
              <InputExtend
                value={uAccount}
                onChange={_.debounce((e) => setAccount(() => e.target.value))}
              ></InputExtend>
            </FormItemExtend>
            <FormItemExtend label="密码" name="password">
              <InputExtend
                value={password}
                onChange={_.debounce((e) => setPassword(() => e.target.value))}
              ></InputExtend>
            </FormItemExtend>
            <FormItemExtend>
              <ButtonExtend
                type="primary"
                htmlType="submit"
                onClick={async () => await login()}
              >
                确定
              </ButtonExtend>
            </FormItemExtend>
          </div>
        </FormExtend>
      </Wrapper>
    </>
  );
}
