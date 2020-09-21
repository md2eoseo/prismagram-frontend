import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import LikesNumText from "../LikesNumText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment } from "../Icons";
import TextareaAutosize from "react-autosize-textarea";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.3s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const CaptionBox = styled.div`
  margin-top: 5px;
`;

const Caption = styled.span`
  margin-left: 3px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default ({
  user: { username, avatar },
  caption,
  location,
  files,
  isLiked,
  likeCount,
  newComment,
  createdAt,
  currentItem,
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File
            key={file.id}
            id={file.id}
            src={file.url}
            showing={index === currentItem}
          />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <LikesNumText
        text={
          likeCount < 2
            ? likeCount === 0
              ? "No likes"
              : "1 like"
            : `${likeCount} likes`
        }
      />
      <CaptionBox>
        <FatText text={username} />
        <Caption>{caption}</Caption>
      </CaptionBox>
      <Timestamp>{createdAt}</Timestamp>
      <Textarea placeholder={"Add a comment..."} {...newComment} />
    </Meta>
  </Post>
);
