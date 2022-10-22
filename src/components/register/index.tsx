/*
 * @Date: 2022-10-20 21:32:51
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 23:31:57
 * @FilePath: \NodeReactProject-FE\src\components\register\index.tsx
 */
import React, { useMemo, useState } from "react";
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
import styled from "@emotion/styled";
import _ from "lodash";
const titles = ["填写邮箱", "验证邮箱", "设置密码", "设置昵称", "完成注册"];
const labes = ["邮箱", "验证码", "密码", "昵称", ""];
const Mail = styled(MailOutlined)`
  margin-top: 1rem;
  font-size: 5rem;
  display: block;
`;
const Register = () => {
  const [current, setCurrent] = useState(0);
  const stepsAll = titles.length - 1;
  const [inputValue, setInputValue] = useState("");
  const container: Array<string> = useMemo(() => {
    return new Array(stepsAll);
  }, [stepsAll]);
  return (
    <Wrapper>
      <StepsExtend current={current}>
        {titles.map((item) => (
          <StepExtend title={item} key={item}></StepExtend>
        ))}
      </StepsExtend>
      <FormExtend>
        {current < stepsAll ? (
          <>
            <Mail></Mail>
            <div
              style={{
                position: "relative",
                left: "3rem",
                bottom: "-2rem",
              }}
            >
              {labes[current]}
            </div>
            <FormItemExtend name="uEmail">
              <InputExtend
                value={inputValue}
                onChange={_.debounce((e) => setInputValue(e.target.value))}
              ></InputExtend>
            </FormItemExtend>
            <FormItemExtend>
              <RightCircleTwoToneExtend
                onClick={() => {
                  if (current === 1) {
                    // 验证邮箱验证码
                  }
                  current < stepsAll &&
                    (container[current] = inputValue) &&
                    setCurrent(() => current + 1);
                }}
              />
              <LeftCircleTwoToneExtend
                onClick={() => current > 0 && setCurrent(() => current - 1)}
              />
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
                  position: 'absolute',
                  bottom: "4rem",
                  left: "50%",
                  transform:"translateX(-50%)"
                }}
              >注册完成请返回首页登陆</div>
          </>
        )}
      </FormExtend>
    </Wrapper>
  );
};
export default Register;
