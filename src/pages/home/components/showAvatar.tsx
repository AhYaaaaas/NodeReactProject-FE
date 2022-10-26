import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { httpConfig } from "@/utils/http/http.config";
import getAvatarAddress from "@/api/module.home/getAvatarAddress";
import { Button, Upload } from "antd";
import uploadAvatar from "@/api/module.home/uploadAvatar";
import { UploadOutlined } from "@ant-design/icons";
/*
 * @Date: 2022-10-26 22:26:06
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-26 22:28:27
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\showAvatar.tsx
 */
export default () => {
  const [getParams] = useSearchParams();
  const uuid = getParams.get("uid");
  const [avatarAddress, setAvatarAddress] = useState<string>(
    httpConfig.baseURL + "/avatar/default.jpeg"
  );
  const getAvatar = async () => {
    const res = await getAvatarAddress(getParams.get("uid")!);

    setAvatarAddress(() => res);
  };
  useEffect(() => {
    getAvatar();
  }, []);

  return (
    <div
      className="_avatar"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        height: "100%",
        width: "50%",
        left: "10%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${avatarAddress})`,
          width: "100%",
          paddingBottom: "100%",
          backgroundSize: "cover",
          borderRadius: "50%",
        }}
      />
      <Upload
        onChange={async (e) => {
          console.log(e.file);
          const res = await uploadAvatar(e.file, uuid!);
          if (res) await getAvatar();
        }}
        beforeUpload={() => false}
        showUploadList={false}
        action=""
      >
        <Button
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          icon={<UploadOutlined />}
        >
          Update Avatar
        </Button>
      </Upload>
    </div>
  );
};
