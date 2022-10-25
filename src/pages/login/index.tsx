/*
 * @Date: 2022-10-20 21:32:38
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 18:36:35
 * @FilePath: \NodeReactProject-FE\src\pages\login\index.tsx
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
import { useEffect, useState } from "react";
import _login from "@/api/module.login/login";
import { LOGINTYPE } from "@/api/module.login/login";
import { useNavigate } from "react-router-dom";
import { Alert, Form } from "antd";
export default function Login() {
  const [uAccount, setAccount] = useState("默认账号");
  const [password, setPassword] = useState("默认密码");
  const [userInfo, setUserInfo] = useState({} as loginResponse["userInfo"]);
  const [isError, setError] = useState<Boolean>(false);
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const dump = (info: loginResponse["userInfo"]) => {
    setUserInfo((obj) => {
      return Object.assign(obj, info);
    });
    window.localStorage.setItem('userinfo', JSON.stringify(info));
    Navigate(`/home/homepage?uid=${info.uid}`);
  };

  useEffect(() => {
    _login({}, LOGINTYPE["TOKENLOGIN"]).then(
      (res) => {
        console.log(res);
        const { userInfo: info } = res;
        console.log(info);
        if (info) {
          dump(info);
        }
      },
      (err) => console.log(err)
    );
  }, []);

  let response = {} as loginResponse;
  const login = async () => {
    response = await _login({ uAccount, password }, LOGINTYPE["ACCOUNTLOGIN"]);
    const { userInfo: info } = response;
    if (info) {
      dump(info);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Wrapper>
        <FormExtend form={form}>
          <Circle></Circle>
          <TextBox>BOOK</TextBox>
          <div className="dataArea">
            <FormItemExtend
              label="账号"
              name="uAccount"
              extra="Notice:You can use email or account"
            >
              <InputExtend
                value={uAccount}
                onChange={_.debounce((e) => setAccount(() => e.target.value))}
              ></InputExtend>
            </FormItemExtend>
            <FormItemExtend label="密码" name="password">
              <InputExtend
                value={password}
                onChange={_.debounce((e) => setPassword(() => e.target.value))}
                required
                type="password"
              ></InputExtend>
            </FormItemExtend>
            <FormItemExtend name="buttons">
              <>
                <ButtonExtend
                  type="primary"
                  htmlType="submit"
                  onClick={async () => await login()}
                >
                  确定
                </ButtonExtend>
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "10%",
                    cursor: "pointer",
                  }}
                  onClick={() => Navigate("/register")}
                >
                  注册
                </span>
              </>
            </FormItemExtend>
          </div>
        </FormExtend>
        {isError && (
          <Alert
            message="Error Text"
            description="账号或密码错误!"
            type="error"
            closable
            style={{
              width: "30vw",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
            }}
            onClose={() => {
              form.resetFields();
            }}
          />
        )}
      </Wrapper>
    </>
  );
}
