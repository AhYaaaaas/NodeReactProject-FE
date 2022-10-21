/*
 * @Date: 2022-10-21 16:39:58
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 17:42:50
 * @FilePath: \NodeReactProject-FE\src\components\register\index.css.tsx
 */
import styled from "@emotion/styled"
import { Steps, Form, Input, Button } from 'antd'
import { RightCircleTwoTone } from "@ant-design/icons"
const { Step } = Steps;
const FormItem = Form.Item;
const StepsExtend = styled(Steps)`
  width: 80vw;
  margin:0 auto;
  margin-top: 5vh;
`
const StepExtend = styled(Step)``
const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: #F1F2F3F4;
  display:flow-root
`
const FormExtend = styled(Form)`
  min-height: 280px;
  min-width:350px;
  width: 33vw;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 20px;
  display: flow-root;
  background-color: white;
`
const FormItemExtend = styled(FormItem)`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`
const InputExtend = styled(Input)``
const ButtonExtend = styled(Button)`
display:block;
margin:0 auto;
border-radius:50%;
width: 2rem;
height: 2rem;
visibility: hidden;
`
const RightCircleTwoToneExtend = styled(RightCircleTwoTone)`
  display:block;
  position:relative;
  left: 50%;
  font-size: 2rem;
  top:50%;
  border:none;
  margin: 0;
  padding: 0;
  transform:translateX(-50%) translateY(-50%);
  visibility: visible;
`
export {
  StepsExtend,
  StepExtend,
  Wrapper,
  FormExtend,
  FormItemExtend,
  InputExtend,
  ButtonExtend,
  RightCircleTwoToneExtend
}