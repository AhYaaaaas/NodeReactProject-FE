/*
 * @Date: 2022-10-23 22:12:56
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-24 20:36:45
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\item.tsx
 */
//悬赏和评论项
import { Avatar, Button, Comment, Form, Input, Tooltip } from "antd";
import React from "react";
import { Icomment } from "./type";
interface Iprops {
  comments: Icomment[];
}
const Editor = () => (
  <>
    <Form.Item>
      <Input.TextArea rows={4} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);
const CommentItem: React.FC<{ comment: Icomment }> = ({ comment }) => {
  return (
    <Comment
      author={<a>{comment.userInfo.userName}</a>}
      avatar={
        <Avatar src="http://localhost:5000/default.jpeg" alt="Han Solo" />
      }
      content={<p>{comment.comment}</p>}
      datetime={
        <Tooltip title={comment["date"]}>
          <span>8 hours ago</span>
        </Tooltip>
      }
    />
  );
};
export const PushlishedComments: React.FC<Iprops> = ({ comments }) => {
  return (
    <>
      {comments.map((item,index) => (
        <CommentItem comment={item} key={item.userInfo.avatar + index} />
      ))}
      <Comment
        style={{
          position: "absolute",
          bottom: "0",
          width:"25%"
        }}
        avatar={
          <Avatar
            src="http://localhost:5000/default.jpeg"
            alt={comments[0].userInfo.userName}
          />
        }
        content={<Editor />}
      />
    </>
  );
};
