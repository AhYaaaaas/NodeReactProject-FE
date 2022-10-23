/*
 * @Date: 2022-10-21 13:02:12
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 12:15:05
 * @FilePath: \NodeReactProject-FE\src\components\login\index.css.tsx
 */
import styled from "@emotion/styled"
import { Button, Form, Input } from 'antd';
const Wrapper = styled('div')`
    background: url(${require('../../assets/picture/indexpage.jpeg')});
    background-size: cover;
    width:100%;
    background-size: cover;
    height: 100%;
  `
const FormExtend = styled(Form)`
  position: absolute;
  background-color: #FEFFFE;
  border-radius: 5px;
  top:50%;
  min-height: 400px;
  min-width: 320px;
  border-radius: 10px;
  box-shadow:-5px -5px 5px #edf1f4 , 5px 5px 5px #CED2D5;
  transform: translateY(-50%) translateX(-50%);
  left:30%;
  display:flex;
  flex-direction: column;
`
const FormItemExtend = styled(Form.Item)`
width: 90%;
position:relative;
left:50%;
margin-top: 1rem;
transform:translateX(-50%);
`
const InputExtend = styled(Input)`
border-radius: 20px;
box-shadow:#edf1f4 5px 5px 5px  ;
`
const Circle = styled('div')`
  width:20vh;
  height:20vh;
  border-radius: 50%;
  background-color: #FEFFFE;
  box-shadow: #edf1f4 -5px -5px 5px 5px;
  margin:0 auto;
  margin-top: 2rem;
  background: url(${require("../../assets/picture/reactIcon.jpeg")});
  background-size:cover;
  background-position: -5px;
`
const ButtonExtend = styled(Button)`
  display:block;
  width:50%;
  margin: 0 auto;
  border-radius:20px;
`
const TextBox = styled('div')`
  font-family: STXingkai;
  margin:0 auto;
  font-size: 3rem;
`
export {
  Wrapper,
  FormExtend,
  FormItemExtend,
  Circle,
  InputExtend,
  ButtonExtend,
  TextBox
}