/*
 * @Date: 2022-10-23 22:11:54
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-27 21:54:20
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\details.tsx
 */

import ShowAvatar from "./showAvatar";
import Personalinfo from "./personalinfo";
import EditRecord from "./editRecord";
import { useEffect, useState } from "react";
//个人信息
export default function SelfDetails() {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div
        className="left"
        style={{
          width: "30%",
          height: "100%",
          position: "absolute",
          left: 0,
        }}
      >
        <ShowAvatar></ShowAvatar>
      </div>
      <div
        className="right"
        style={{
          position: "absolute",
          width: "70%",
          right: 0,
          display: "flex",
        }}
      >
        <Personalinfo></Personalinfo>
        <EditRecord></EditRecord>
      </div>
    </div>
  );
}
