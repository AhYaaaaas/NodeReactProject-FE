/*
 * @Date: 2022-10-24 19:33:59
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 11:32:16
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\readbook.tsx
 */
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { PushlishedComments } from "./item";
import { httpConfig } from "@/utils/http/http.config";
export default function Readbook() {

  const [url, setUrl] = useState<any>()
  const iframe = useRef<HTMLIFrameElement>(null);
  const [getPs] = useSearchParams();
  const [uid, bookName] = [getPs.get('uid')!, getPs.get('bookName')];
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookid = state?.bookid || undefined;
  useEffect(() => {
    if (!bookName || !bookid) navigate('/home/search?uid=' + uid);
    else setUrl(()=>httpConfig.baseURL +`/books/${uid + bookName}`)
  }, [])

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
        <PushlishedComments
          uid={uid}
          bookid={bookid} />
      </div>
    </div>
  );
}
