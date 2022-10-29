/*
 * @Date: 2022-10-24 19:33:59
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-29 21:36:03
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\readbook.tsx
 */
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PushlishedComments } from "./item";
import { Icomment } from "./type";
import { httpConfig } from "@/utils/http/http.config";
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
  const iframe = useRef<HTMLIFrameElement>(null);
  const [getPs] = useSearchParams();
  const [uid, bookName] = [getPs.get('uid')!, getPs.get('bookName')];
  const navigate = useNavigate();
  useEffect(() => {
    if (!bookName) navigate('/home/search?uid=' + uid);
    else setUrl(()=>httpConfig.baseURL +`/books/${uid + bookName}`)
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
