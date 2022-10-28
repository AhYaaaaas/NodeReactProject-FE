/*
 * @Date: 2022-10-23 22:12:18
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-28 22:19:40
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\upload.tsx
 */
//上传
import { InboxOutlined } from "@ant-design/icons";
import { Progress, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import uploadBook from "@/api/module.home/uploadBook";
import addUserHistory from "@/api/module.home/addUserHistory";
import { historyType } from "@/api/module.home/getUserHistory";
import uploadSuccess from "@/api/module.home/uploadSuccess";
const { Dragger } = Upload;
const CHUNK_SIZE = 1024 * 20;

const App: React.FC = () => {
  const [getPs] = useSearchParams();
  const uid: string = getPs.get("uid")!;
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState<number>(0);
  return (
    <Dragger
      onChange={async (e) => {
        setIsLoading(true);
        const file = e.file as RcFile;
        const { name, size } = file;
        let current = 0;
        while (1) {
          const isEnd = CHUNK_SIZE * (current + 1) >= size;
          const chunk = file.slice(
            CHUNK_SIZE * current,
            isEnd ? size : CHUNK_SIZE * (current + 1)
          );
          current += 1;
          await uploadBook({ bookName: name, uid, chunk });
          if (CHUNK_SIZE * current >= size) {
            setPercent(() => 100);
            break;
          } else {// eslint-disable-next-line
            setPercent(()=>(CHUNK_SIZE * current) / size * 100);
          }
        }
        const bookid = await uploadSuccess({ uid, bookName: name });
        await addUserHistory({
          uid,
          description: `upload book ${name}`,
          type: historyType["UPLOAD"],
          bookid,
        });
      }}
      beforeUpload={() => false}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
      {isLoading && (
        <Progress
          style={{ position: "relative", top: "20%" }}
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={Math.floor(percent)}
        />
      )}
    </Dragger>
  );
};

export default App;
