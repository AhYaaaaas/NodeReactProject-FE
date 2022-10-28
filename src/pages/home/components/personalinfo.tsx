import getPersonalInfo from "@/api/module.home/getPersonalInfo";
import {
  EnvironmentOutlined,
  HomeOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Button,message } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPersonalInfo } from "./type";
import updatePersonInfo from "@/api/module.home/updatePersonInfo";
import addUserHistory from "@/api/module.home/addUserHistory";
import { historyType } from "@/api/module.home/getUserHistory";
/*
 * @Date: 2022-10-26 22:17:20
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-26 22:36:06
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\personalinfo.tsx
 */
export default function PersonalInfo() {
  const [submitForm, setSubmitForm] = useState<IPersonalInfo>();
  const [getPs] = useSearchParams();
  const uid = getPs.get("uid")!;
  useEffect(() => {
    getPersonalInfo(uid!).then((res) => {
      setSubmitForm(() => res);
    });
  }, [uid]);
  return (
    <div className="head" style={{ width: "70%" }}>
      <header>
        <h1 style={{ fontWeight: "bolder", fontSize: "2rem" }}>
          Public profile
        </h1>
        <hr />
      </header>
      <main style={{ width: "90%", height: "100%" }}>
        <div>
          <label htmlFor="">用户名</label>
          <br />
          <Input
            placeholder="user name"
            prefix={<UserOutlined />}
            style={{ width: "80%" }}
            value={submitForm?.userName}
            onChange={(e)=>setSubmitForm({...submitForm!,userName:e.target.value})}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            margin: "10px 0",
          }}
        >
          <div>
            <label htmlFor="">Year</label>
            <Input
              value={submitForm?.year ?? ""}
              onChange={(e)=>setSubmitForm({...submitForm!,year:e.target.value})}
            ></Input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            /
          </div>
          <div>
            <label htmlFor="">Month</label>
            <Input
              value={submitForm?.month ?? ""}
              onChange={(e)=>setSubmitForm({...submitForm!,month:e.target.value})}
            ></Input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            /
          </div>
          <div>
            <label htmlFor="">Day</label>
            <Input
              value={submitForm?.day ?? ""}
              onChange={(e)=>setSubmitForm({...submitForm!,day:e.target.value})}
            ></Input>
          </div>
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="">住址</label>
          <Input
            value={submitForm?.address??""}
            placeholder="address"
            prefix={<EnvironmentOutlined />}
            onChange={(e)=>setSubmitForm({...submitForm!,address:e.target.value})}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="">公司</label>
          <Input
            placeholder="company"
            value={submitForm?.company??""}
            prefix={<HomeOutlined />}
            onChange={(e)=>setSubmitForm({...submitForm!,company:e.target.value})}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="">联系电话</label>
          <br />
          <Input
            value={submitForm?.phone??""}
            placeholder="phone number"
            prefix={<PhoneOutlined />}
            onChange={(e)=>setSubmitForm({...submitForm!,phone:e.target.value})}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="">个性签名</label>
          <br />
          <SendOutlined />
          <Input.TextArea
            value={submitForm?.signature??""}
            rows={4}
            placeholder="Personal Signature"
            onChange={(e)=>setSubmitForm({...submitForm!,signature:e.target.value})}
          />
        </div>
      </main>
      <footer>
        <Button onClick={async () => {
          await updatePersonInfo(submitForm!);
          await addUserHistory({ uid, description: "update personal info", type: historyType['UPDATE'] });
          message.success("update successfully!");
        }}>保存设置</Button>
      </footer>
    </div>
  );
};
