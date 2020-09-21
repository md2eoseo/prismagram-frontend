import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  caption,
  location,
  comments,
  createdAt,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    slide();
  }, [currentItem]);
  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 1500);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 1500);
    }
  };
  console.log(currentItem);
  const comment = useInput("");
  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountS}
      isLiked={isLikedS}
      caption={caption}
      location={location}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
