/*
 * @Date: 2022-10-21 16:39:58
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 10:06:09
 * @FilePath: \NodeReactProject-FE\src\components\register\index.css.tsx
 */
import styled from "@emotion/styled"
import { Steps, Form, Input } from 'antd'
import { RightOutlined as RightCircleTwoTone,LeftOutlined as LeftCircleTwoTone } from "@ant-design/icons"
const { Step } = Steps;
const FormItem = Form.Item;
const StepsExtend = styled(Steps)`
  width: 80vw;
  margin:0 auto;
  margin-top: 5vh;
`
const StepExtend = styled(Step)`
  width: 3rem;
  height: 3rem;
`
const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: #F1F2F3F4;
  display:flow-root
`
const FormExtend = styled(Form)`
  min-height: 280px;
  min-width:350px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 20px;
  display: flow-root;
  background-color: white;
  height: 50vh;
  width:30vw;
`
const FormItemExtend = styled(FormItem)`
  font-size: 3rem;
  position: absolute;
  width:80%;
  top: 50%;
  left: 50%;
  transform:translateX(-50%) translateY(-50%);
`
const InputExtend = styled(Input)`
  width:80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translateX(-50%) translateY(-50%);
`
const RightCircleTwoToneExtend = styled(RightCircleTwoTone)`
  font-size: 2rem;
  float:right;
`
const LeftCircleTwoToneExtend = styled(LeftCircleTwoTone)`
  float:left;
  font-size: 2rem;
`
export {
  StepsExtend,
  StepExtend,
  Wrapper,
  FormExtend,
  FormItemExtend,
  InputExtend,
  RightCircleTwoToneExtend,
  LeftCircleTwoToneExtend
}