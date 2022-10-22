/*
 * @Date: 2022-10-21 16:39:58
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-22 10:53:37
 * @FilePath: \NodeReactProject-FE\src\components\register\index.css.tsx
 */
import styled from "@emotion/styled"
import { Steps, Form, Input } from 'antd'
import { RightCircleTwoTone,LeftCircleTwoTone } from "@ant-design/icons"
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
  transform: translateX(-50%) translateY(-75%);
  border-radius: 20px;
  display: flow-root;
  background-color: white;
`
const FormItemExtend = styled(FormItem)`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  &:nth-of-type(2){
    position: relative;
  }
`
const InputExtend = styled(Input)``
const rowSpan = `
  position:absolute;
  font-size: 2rem;
  border:none;
  margin: 0;
  padding: 0;
  display:block;
`
const RightCircleTwoToneExtend = styled(RightCircleTwoTone)`
  ${rowSpan}
  right:10%;
`
const LeftCircleTwoToneExtend = styled(LeftCircleTwoTone)`
  ${rowSpan}
  left:10%;
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