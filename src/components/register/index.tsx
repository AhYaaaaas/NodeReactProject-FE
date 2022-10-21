/*
 * @Date: 2022-10-20 21:32:51
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 18:05:07
 * @FilePath: \NodeReactProject-FE\src\components\register\index.tsx
 */
import React, { useState } from "react";
import {
  StepExtend,
  StepsExtend,
  Wrapper,
  FormItemExtend,
  FormExtend,
  InputExtend,
  ButtonExtend,
  RightCircleTwoToneExtend
} from "./index.css";
import {MailOutlined} from "@ant-design/icons"
import styled from "@emotion/styled";
const titles = {
  step1: "验证邮箱",
  step2: "填写基本信息",
  step3:"完成注册",
}
const Mail = styled(MailOutlined)`
  margin-top:1rem;
 font-size:5rem;
 display:block
`
const Register =  ()=> {
  const [current,setCurrent] = useState(1);
  return (
    <Wrapper>
      <StepsExtend current={current}>
        <StepExtend title={titles["step1"]}></StepExtend>
        <StepExtend title={titles["step2"]}></StepExtend>
        <StepExtend title={titles["step3"]}></StepExtend>
      </StepsExtend>
      <FormExtend>
          <Mail></Mail>
        <FormItemExtend label="邮箱" name="uEmail">
          <InputExtend ></InputExtend>
        </FormItemExtend>
        <FormItemExtend>
          <ButtonExtend>
            <RightCircleTwoToneExtend onClick={()=>setCurrent(()=>current+1)}/>
          </ButtonExtend>
        </FormItemExtend>
      </FormExtend>
    </Wrapper>
  );
}
export default Register
