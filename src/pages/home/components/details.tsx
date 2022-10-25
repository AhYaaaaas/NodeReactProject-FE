/*
 * @Date: 2022-10-23 22:11:54
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 20:51:38
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\details.tsx
 */

import { Avatar, Button, Upload } from "antd";
import { useSearchParams } from "react-router-dom";
import { httpConfig } from "@/utils/http/http.config";
import getAvatarAddress from "@/api/module.home/getAvatarAddress";
import uploadAvatar from "@/api/module.home/uploadAvatar";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
//个人信息
export default function SelfDetails() {
  const [getParams, setParams] = useSearchParams();
  const uuid = getParams.get("uid");
  const [avatarAddress, setAvatarAddress] = useState<string>(
    httpConfig.baseURL + "/avatar/default.jpeg"
  );
  const getAvatar = async () => {
    const res = await getAvatarAddress(getParams.get("uid")!)
    console.log("res" + res);
    setAvatarAddress(() => res);
  }
  useEffect(() => {
    getAvatar();
  }, []);
  return (
    <>
      <div
        className="left"
        style={{
          width: "50%",
        }}
      >
        <div
          className="avatar"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={avatarAddress}
            style={{
              width: "30rem",
              height: "30rem",
            }}
          />
          <Upload
            onChange={async (e) => {
              console.log(e.file);
              const res = await uploadAvatar(e.file, uuid!);
              if(res) await getAvatar();
            }}
            beforeUpload={()=>false}
            showUploadList={false}
            action=''
          >
            <Button
              style={{
                marginLeft: "15rem",
                marginTop: "1rem",
                transform: "translateX(-50%)",
              }}
              icon={<UploadOutlined />}
            >
              Upload Avatar
            </Button>
          </Upload>
        </div>
      </div>
      <div className="right"></div>
    </>
  );
}
