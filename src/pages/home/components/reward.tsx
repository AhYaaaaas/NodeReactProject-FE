/*
 * @Date: 2022-10-23 22:12:45
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 19:29:36
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\reward.tsx
 */

import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  message,
  PageHeader,
} from "antd";
import { useCallback, useEffect, useState } from "react";
import getAllReward, { IRewardResponse } from "@/api/module.home/getAllReward";
import getPersonalInfo from "@/api/module.home/getPersonalInfo";
import { useSearchParams } from "react-router-dom";
import { IPersonalInfo } from "./type";
import publishReward from "@/api/module.home/publishReward";
import finishReward from "@/api/module.home/finishReward"
import {upload} from "@/api/module.home/uploadMannual"
import { httpConfig } from "@/utils/http/http.config";
//悬赏
interface IData extends IRewardResponse {
  userName: string;
}
export default function Reward() {
  const [getPs] = useSearchParams();
  const uid = getPs.get("uid")!;
  const [isFilterReward, setIsFilterReward] = useState<Boolean>(false);
  const [filterKeyWords, setFilterKeyWords] = useState<string>("");
  const [rewards, setRewards] = useState<IData[] | []>([]);
  const [isPosting, setIsPosting] = useState<Boolean>(false);
  const [poster, setPoster] = useState<IPersonalInfo>();
  const [fresh, setFresh] = useState<number>(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<{
    uid: string;
    bookname: string;
    end: string;
    description: string;
  }>({ uid, bookname: "", end: "", description: "" });
  const filter = useCallback(
    (uid?: string) => {
      if (filterKeyWords) {
        setRewards(() =>
          rewards.filter((item) => {
            return (
              item.bookname.indexOf(filterKeyWords) !== -1 ||
              (uid ? false : item.uid === uid)
            );
          })
        );
      } else {
        getAllReward(filterKeyWords).then((res) => {
          setRewards(() => res);
        });
      }
    },
    [filterKeyWords]
  );
  useEffect(() => {
    getAllReward(filterKeyWords).then((res) => {
      setRewards(() => res);
    });
    getPersonalInfo(uid).then((res) => {
      setPoster(() => res);
    });
  }, [fresh]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="site-page-header-ghost-wrapper"
        style={{ width: "100%", height: "10%" }}
      >
        <PageHeader
          subTitle="scroll to browse all information"
          ghost={false}
          title="Reward"
          extra={[
            <Button key="3" onClick={() => setIsFilterReward((e) => !e)}>
              {isFilterReward ? "Hidden" : "Filter a reward"}
            </Button>,
            <Button key="2" onClick={() => filter(uid)}>
              My Reward
            </Button>,
            <Button
              key="1"
              type="primary"
              onClick={() => setIsPosting(() => !isPosting)}
            >
              {isPosting ? "Back to browse" : "Post a Reward"}
            </Button>,
          ]}
        ></PageHeader>
        {isFilterReward && (
          <Input.Search
            value={filterKeyWords}
            onChange={(e) => {
              setFilterKeyWords(() => e.target.value);
            }}
            onSearch={() => {
              filter();
            }}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: 0,
          width: "100%",
          maxHeight: "90%",
          overflowY: "scroll",
        }}
      >
        {rewards &&
          !isPosting &&
          rewards.map((item) => {
            return (
              <Card
                title={item.bookname}
                extra={<a href="#">More</a>}
                style={{
                  margin: "20px 20px",
                  backgroundImage: `url(${item.isFinished?httpConfig.baseURL + '/images/finished.jpeg':''})`,
                  backgroundSize: "cover",
                  backgroundPosition:"center"
                }}
                key={item.rewardid}
              >
                <p>
                  <strong>Poster:</strong>
                  {item.userName}
                </p>
                <p>
                  <strong>Start:</strong>
                  {item.start}
                </p>
                <p>
                  <strong>end:</strong>
                  {item.end}
                </p>
                <p>
                  <strong>description:</strong>
                  {item.description}
                </p>
                <p>
                  <strong>isTimeOut:</strong>
                  {item.isTimeOut ? "已过期" : "未过期"}
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button onClick={async () => {
                    upload(uid,()=>setFresh((fresh)=>fresh+1));
                    await finishReward(item.rewardid);
                  }}>上传</Button>
                </div>
              </Card>
            );
          })}
        {isPosting && (
          <Form
            wrapperCol={{ span: 16 }}
            labelCol={{ span: 8 }}
            form={form}
            style={{
              width: "50%",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            <Form.Item label="书名" required>
              <Input
                value={formData.bookname}
                onChange={(e) =>
                  setFormData({ ...formData, bookname: e.target.value })
                }
              ></Input>
            </Form.Item>
            <Form.Item label="描述" required>
              <Input.TextArea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></Input.TextArea>
            </Form.Item>
            <Form.Item label="发布者">
              <Input disabled value={poster?.userName} />
            </Form.Item>
            <Form.Item label="截至" required>
              <DatePicker
                onChange={(date, dateString) => {
                  setFormData({ ...formData, end: dateString });
                }}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={async () => {
                  await publishReward(formData);
                  setFresh((fresh) => fresh + 1);
                  message.success("发布成功!");
                  form.resetFields();
                }}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
}
