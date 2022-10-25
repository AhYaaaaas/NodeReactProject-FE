/*
 * @Date: 2022-10-23 20:39:43
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-25 20:02:30
 * @FilePath: \NodeReactProject-FE\src\pages\home\index.tsx
 */
import {
  AlipayCircleOutlined,
  BookOutlined,
  GithubOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tag } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { loginResponse } from "../login/type";
import { httpConfig } from "@/utils/http/http.config";
import getAvatarAddress from "@/api/module.home/getAvatarAddress";
const { Header, Content, Sider } = Layout;
const titles = ["主页", "检索", "上传", "悬赏", "阅读"];
const urlName = ["/homepage", "/search", "/upload", "/reward", "/readbook"];
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [getPs,setPs] = useSearchParams()
  const [selectedItem, setSelectedItem] = useState(1);
  const [defaultAvatar, setAvatar] = useState(
    httpConfig + "/avatar/default.jpeg"
  );
  const [userInfo, setUserInfo] = useState<loginResponse["userInfo"]>();
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    const info = window.localStorage.getItem("userinfo") || "{}";
    const result: loginResponse["userInfo"] = JSON.parse(info);
    setUserInfo(() => result);
    setUserName(() => result.userName);
    getAvatarAddress(getPs.get('uid')!).then((res) => setAvatar(res));
  }, []);
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          backgroundColor: "#FAFAFA",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          style={{
            position: "absolute",
            backgroundColor: "#FAFAFA",
            top: "4rem",
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedItem.toString()]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
            BookOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: titles[index],
            onClick: () => {
              navigate("/home" + urlName[index] + "?" + `uid=${userInfo?.uid}`);
              setSelectedItem(() => index + 1);
            },
          }))}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Tag icon={<AlipayCircleOutlined />} color="#01A9F2">
            Alipay
          </Tag>
          <Tag icon={<WechatOutlined />} color="#52C232">
            WeChat
          </Tag>
        </div>
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            backgroundColor: "#FAFAFA",
            position: "relative",
          }}
        >
          <GithubOutlined
            style={{
              fontSize: "3rem",
              position: "absolute",
              left: "4%",
              // transform: "translateX(-50%)",
              lineHeight: "4rem",
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href =
                "https://github.com/AhYaaaaas/NodeReactProject-FE")
            }
          />
          <div
            className="logo"
            style={{
              height: "2rem",
              width: "2rem",
              position: "absolute",
              right: "10%",
              top: "50%",
              transform: "translateY(-50%)",
              lineHeight: "2rem",
              backgroundImage: `url(${defaultAvatar})`,
              backgroundSize: "cover",
              borderRadius: "50%",
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              right: "5%",
              cursor: "pointer",
              fontFamily: "fantasy",
            }}
          >
            {userName}
          </p>
        </Header>
        <Content style={{ marginLeft: "200px", height: "100%" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: "100%" }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
