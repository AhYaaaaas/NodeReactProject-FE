/*
 * @Date: 2022-10-23 22:12:06
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 10:44:15
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\search.tsx
 */

import { Button, Card, Input } from "antd";
import Meta from "antd/lib/card/Meta";
import { useRef, useState } from "react";
import searchBook, { ISearchBookResponse } from "@/api/module.home/searchBook";
import addUserHistory from "@/api/module.home/addUserHistory";
import { useNavigate, useSearchParams } from "react-router-dom";
import { historyType } from "@/api/module.home/getUserHistory";
import downLoadBook from "@/api/module.home/downLoadBook";
//检索
export default function SearchHome() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [getPs] = useSearchParams();
  const [searchResult, setSearchResult] = useState<ISearchBookResponse[]>([]);
  const uid = getPs.get("uid")!;
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "40%",
          position: "relative",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          transition: "all 0.5s ease-out",
        }}
        ref={searchRef}
      >
        <Input.Search
          onFocus={() => {
            let instance = searchRef.current;
            if (instance) instance.style.top = "4rem";
          }}
          size="large"
          enterButton="Retrieve"
          onSearch={async (value: string, e) => {
            e?.preventDefault();
            const result = await searchBook(value);
            setSearchResult(() => result);
            await addUserHistory({
              uid,
              description: `search ${value}`,
              type: historyType["UPDATE"],
            });
          }}
          required
        ></Input.Search>
        <p style={{ textAlign: "center" }}>
          You can use Keyboard keys {">"} and {"<"} to scroll the list below
        </p>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          position: "relative",
          bottom: "0",
        }}
      >
        {Array.isArray(searchResult) &&
          searchResult.map((item) => {
            return (
              <Card
                key={item.bookid}
                hoverable
                style={{
                  width: 240,
                  margin: "5rem 5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
                cover={
                  <img
                    alt={item.bookname}
                    src={item.imgUrl}
                    onClick={() => {
                      window.open(item.imgUrl);
                    }}
                  />
                }
              >
                <Meta
                  title={item.bookname}
                  description={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        onClick={() => {
                          navigate(`/home/readbook?uid=${uid}&&bookName=${encodeURI(item.bookname)}`,{state:{bookid:item.bookid}});
                      }}>阅读</Button>
                      <Button
                        type="primary"
                        onClick={async () => {
                          await downLoadBook(item.uploaderid + item.bookname);
                        }}
                      >
                        下载
                      </Button>
                    </div>
                  }
                  style={{ position: "relative", bottom: 0 }}
                />
              </Card>
            );
          })}
      </div>
    </div>
  );
}
