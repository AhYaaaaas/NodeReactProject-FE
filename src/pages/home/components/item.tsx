/*
 * @Date: 2022-10-23 22:12:56
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-30 11:26:32
 * @FilePath: \NodeReactProject-FE\src\pages\home\components\item.tsx
 */
//悬赏和评论项
import getComments, { ICommentsResponse } from "@/api/module.home/getComments";
import { Avatar, Button, Comment, Form, Input, Tooltip } from "antd";
import publishComment from "@/api/module.home/publishComment";
import React, { useEffect, useState } from "react";
import getAvatarAddress from "@/api/module.home/getAvatarAddress";
interface Iprops {
  uid: string;
  bookid: string;
}
const Editor: React.FC<{
  uid: string;
  bookid: string;
  setComments: React.Dispatch<React.SetStateAction<[] | ICommentsResponse[]>>;
}> = ({ uid, bookid,setComments }) => {
  const [comment, setComment] = useState<string>("");
  return (
    <>
      <Form.Item>
        <Input.TextArea
          rows={4}
          value={comment}
          onChange={(e) => setComment(() => e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          onClick={async () => {
            await publishComment({ bookid, uid, comment });
            setComment("");
            getComments(bookid).then((res) => {
              setComments(() => res);
            });
          }}
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};
const CommentItem: React.FC<{ comment: ICommentsResponse }> = ({ comment }) => {
  return (
    <Comment
      author={<a>{comment.userInfo.userName}</a>}
      avatar={<Avatar src={comment.userInfo.avatar} alt="Han Solo" />}
      content={<p>{comment.content}</p>}
      datetime={
        <Tooltip>
          <span>{comment.commenttime}</span>
        </Tooltip>
      }
    />
  );
};
export const PushlishedComments: React.FC<Iprops> = ({ uid, bookid }) => {
  const [comments, setComments] = useState<ICommentsResponse[] | []>([]);
  const [avatar, setAvatar] = useState<string>("");
  useEffect(() => {
    getComments(bookid).then((res) => {
      setComments(() => res);
    });
    getAvatarAddress(uid).then((res) => {
      setAvatar(() => res);
      return res;
    });
  }, []);
  return (
    <>
      {comments.map((item, index) => (
        <CommentItem comment={item} key={item.userInfo.avatar + index} />
      ))}
      <Comment
        style={{
          position: "absolute",
          bottom: "0",
          width: "25%",
        }}
        avatar={<Avatar src={avatar} />}
        content={<Editor uid={uid} bookid={bookid} setComments={setComments}/>}
      />
    </>
  );
};
