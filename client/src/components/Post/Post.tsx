import React, { useState } from "react";
import { PostProps } from "./types";

export const Post: React.FC<PostProps> = ({
  user,
  photos,
  reactions,
  comments,
}) => {
  const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);

  const handleVisibleChange = () =>
    setIsCommentFormVisible((prevState) => !prevState);

  const commentText = isCommentFormVisible ? "Add Comment" : "Cancel";
  return (
    <section>
      <div className="header">{user.fullName}</div>
      // Slider
      // Content Place
      <div className="behaviors">
        <div>Like It</div>
        <div onClick={handleVisibleChange}>{commentText}</div>
      </div>
      //CommentForm
    </section>
  );
};
