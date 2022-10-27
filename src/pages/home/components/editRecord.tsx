/*
 * @Date: 2022-10-26 22:24:23
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-27 21:49:15
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\editRecord.tsx
 */
import { Timeline } from "antd";
import getUserHistory, { IHistory } from "@/api/module.home/getUserHistory";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default () => {
  const [getPs] = useSearchParams();
  const uid = getPs.get('uid');
  const [records, setRecords] = useState<IHistory[]>();
  useEffect(() => {
    getUserHistory(uid!).then(res => {
      setRecords(res);
      console.log(res);
      
    });

  }, [])
  return (
    <div
      style={{
        height: "100%",
        width: "30%",
        position: "absolute",
        right: 0,
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "lighter" }}>Travel Footprint</h1>
      <hr />
      <Timeline style={{marginTop:"2rem"}}>
        {
          records && records.map((item,index) => {
            return <Timeline.Item key={index + 1}>{item.description} &nbsp; {item.actionstime }</Timeline.Item>
          })
        }
      </Timeline>
    </div>
  );
};
