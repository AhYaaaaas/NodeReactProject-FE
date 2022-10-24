/*
 * @Date: 2022-10-24 19:33:59
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-24 23:57:27
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\readbook.tsx
 */
import http from "@/utils/http";
import { useEffect, useRef, useState } from "react";
import { PushlishedComments } from "./item";
import { Icomment } from "./type";
export default function Readbook() {
  const comments: Icomment[] = [
    {
      userInfo: {
        userName: "AhYaaaas",
        uAccount: "ababababa",
        avatar: "http://localhost:5000/default.jpeg",
        uid: "asdasda",
        uEmail: "1583140740@qq.com",
      },
      date: new Date().toLocaleDateString(),
      comment: "goodgoodgoodgood",
    },
    {
      userInfo: {
        userName: "AhYaaaas",
        uAccount: "ababababa",
        avatar: "http://localhost:5000/default.jpeg",
        uid: "asdasda",
        uEmail: "1583140740@qq.com",
      },
      date: new Date().toLocaleDateString(),
      comment: "goodgoodgoodgood",
    },
    {
      userInfo: {
        userName: "AhYaaaas",
        uAccount: "ababababa",
        avatar: "http://localhost:5000/default.jpeg",
        uid: "asdasda",
        uEmail: "1583140740@qq.com",
      },
      date: new Date().toLocaleDateString(),
      comment: "goodgoodgoodgood",
    }
  ]; 
  const [url, setUrl] = useState<any>()
  const getUrl = async function () {
    const res:ArrayBuffer = await http({
      method: "get",
      url: "api/upload/book?bookName=1.pdf",
      responseType: 'arraybuffer'
    })
    let blob = new Blob([res], { type: 'application/pdf' });
    let testUrl = window.URL.createObjectURL(blob);
    setUrl(testUrl);
  }
  const iframe = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    getUrl();
  },[])
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div className="bookArea" style={{ width: "65%",marginRight:"2rem" }}>
        <iframe
          src={url}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor:"transparent"
          }}
          ref={iframe}
        ></iframe>
      </div>
      <div className="commentsArea" style={{ flex: 1,height:"100%" }}>
        <PushlishedComments comments={comments} />
      </div>
    </div>
  );
}
