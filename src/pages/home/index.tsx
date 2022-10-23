/*
 * @Date: 2022-10-23 20:39:43
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 22:15:54
 * @FilePath: \NodeReactProject-FE\src\pages\home\index.tsx
 */
import {
  AlipayCircleOutlined,
  GithubOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tag } from "antd";
import React from "react";
import { useState } from "react";
const { Header, Content, Sider } = Layout;
const titles = ['主页', '检索', '上传', '悬赏'];
const Home: React.FC = () => {
  const [defaultAvatar, setAvatar] = useState(
    "http://localhost:5000/default.jpeg"
  );
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
        <GithubOutlined
          style={{
            fontSize: "3rem",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            lineHeight: "4rem",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location.href =
              "https://github.com/AhYaaaaas/NodeReactProject-FE")
          }
        />
        <Menu
          style={{
            position: "absolute",
            backgroundColor: "#FAFAFA",
            top: "4rem",
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: titles[index],
          }))}
        />
        <div style={{
          position: "absolute",
          bottom: "2rem",
          display: "flex",
          width:"100%",
          justifyContent: "center",
          cursor:"pointer"
        }}>
          <Tag icon={<AlipayCircleOutlined />} color="#01A9F2">
          Alipay
          </Tag>
          <Tag icon={<WechatOutlined />} color="#52C232">
            WeChat
          </Tag>
        </div>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, backgroundColor: "#FAFAFA" }}
        >
          <div
            className="logo"
            style={{
              height: "4rem",
              width: "4rem",
              position: "absolute",
              right: "0",
              background: ` center url(${defaultAvatar})`,
              backgroundSize: "4rem 4rem",
              borderRadius: "50%",
            }}
          ></div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
