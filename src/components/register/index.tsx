/*
 * @Date: 2022-10-20 21:32:51
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 11:23:57
 * @FilePath: \NodeReactProject-FE\src\components\register\index.tsx
 */
import React, { useMemo, useState } from "react";
import { getCode, identifyCode } from "@/api/module.register/code";
import {
  StepExtend,
  StepsExtend,
  Wrapper,
  FormItemExtend,
  FormExtend,
  InputExtend,
  RightCircleTwoToneExtend,
  LeftCircleTwoToneExtend,
} from "./index.css";
import { MailOutlined, CheckSquareTwoTone } from "@ant-design/icons";
import { Form, Button } from "antd";
import styled from "@emotion/styled";
import _ from "lodash";
import { inputStatusMap, placeholderMap } from "./type";
import account_register from "@/api/module.register/register";
const titles = ["填写邮箱", "验证邮箱", "设置密码", "设置昵称", "完成注册"];

const labels = ["Email", "Code", "Password", "昵称", ""];

const Mail = styled(MailOutlined)`
  margin-top: 1rem;
  font-size: 5rem;
  display: block;
`;

const Register = () => {
  const [current, setCurrent] = useState(0);
  const stepsAll = titles.length - 1;
  const [inputValue, setInputValue] = useState("");
  const [isAbled, setIsAbled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [form] = Form.useForm();
  const [inputStatus, setInputStatus] = useState<inputStatusMap>(
    inputStatusMap["SUCCESS"]
  );
  const [placeStatus, setPlaceholderStatus] = useState<placeholderMap>(
    placeholderMap["INPUT"]
  );
  const container: Array<string> = useMemo(() => {
    return new Array(stepsAll);
  }, [stepsAll]);

  const timeCallback = function () {
    const t = setInterval(() => {
      if (timer > 1) setTimer((timer) => timer - 1);
      else clearInterval(t);
    }, 1000);
  };

  const settingInput = (placeholderErrorType: placeholderMap) => {
    setInputStatus(inputStatusMap["ERROR"]);
    setPlaceholderStatus(placeholderErrorType);
    setTimeout(() => {
      setInputStatus(inputStatusMap["SUCCESS"]);
      setPlaceholderStatus(placeholderMap["INPUT"]);
    }, 2000);
  };

  const rightButton = async () => {
    let isNext: boolean = true;
    switch (current) {
      case 0:
        //检验邮箱合法性
        const reg = new RegExp(
          /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        );
        if (reg.test(inputValue)) {
          //获取验证码
          const { status: _get } = await getCode(inputValue);
          //status!==200 邮箱已注册
          isNext = _get === 200;
          // 倒计时
          if (isNext) {
            setIsAbled(() => true);
            timeCallback();
          } else {
            settingInput(placeholderMap["EMAIL_EXIST"]);
          }
        } else {
          isNext = false;
          settingInput(placeholderMap["EMAIL_ERROR"]);
        }
        break;
      case 1:
        //验证验证码是否正确
        const { status: _identify } = await identifyCode(
          container[0],
          inputValue
        );
        isNext = _identify === 200;
        if (!isNext) {
          settingInput(placeholderMap["IDENTIFY_CODE_ERROR"]);
        }
        break;
      //提交注册
      case 3:
        container[current] = inputValue
        const registerResponse = await account_register({
          uEmail: container[0],
          password: container[2],
          userName: container[3],
        });
        console.log(registerResponse);
        break;
    }
    // 验证通过，放行
    if (isNext) {
      if (current < stepsAll) {
        container[current] = inputValue;
        setCurrent((current) => current + 1);
      }
    } else {
      console.log("error");
    }
    // 重置input框
    form.resetFields();
  };
  const leftButton = () => {
    if (current > 0) {
      setCurrent((current) => current - 1);
      form.resetFields();
    }
  };
  return (
    <Wrapper>
      <StepsExtend current={current}>
        {titles.map((item) => (
          <StepExtend title={item} key={item}></StepExtend>
        ))}
      </StepsExtend>
      <FormExtend form={form} name="registerform">
        {current < stepsAll ? (
          <>
            <Mail></Mail>
            <FormItemExtend name="mid">
              <FormItemExtend name="input" style={{ width: "100%" }}>
                <InputExtend
                  prefix={labels[current]}
                  value={inputValue}
                  onChange={_.debounce((e) => setInputValue(e.target.value))}
                  status={inputStatus}
                  placeholder={placeStatus}
                />
              </FormItemExtend>
              {current === 1 ? (
                <Button
                  size="small"
                  disabled={isAbled}
                  style={{
                    position: "absolute",
                    display: "block",
                    top: "50%",
                    height: "100%",
                    transform: "translateY(-50%)",
                    right: 0,
                  }}
                >
                  {!isAbled ? "重发" : timer + "s"}
                </Button>
              ) : (
                ""
              )}
            </FormItemExtend>
            <FormItemExtend
              name="buttons"
              style={{
                margin: 0,
                top: "90%",
              }}
            >
              <RightCircleTwoToneExtend onClick={rightButton} />
              <LeftCircleTwoToneExtend onClick={leftButton} name="left" />
            </FormItemExtend>
          </>
        ) : (
          <>
            <CheckSquareTwoTone
              style={{
                fontSize: "2.5rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
              }}
              twoToneColor="#CCFF01"
            />
            <div
              style={{
                position: "absolute",
                bottom: "4rem",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              注册完成请返回首页登陆
            </div>
          </>
        )}
      </FormExtend>
    </Wrapper>
  );
};
export default Register;
