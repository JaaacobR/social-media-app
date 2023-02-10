import React, { useState } from "react";
import { PostProps } from "./types";
import { CommentForm } from "components/CommentForm";

export const Post: React.FC<PostProps> = ({
  user,
  photoUrl,
  description,
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
      <img src={photoUrl} alt="postImage" />
      <section>
        <p>{description}</p>
      </section>
      <div className="behaviors">
        <div>Like It {reactions.length}</div>
        <div onClick={handleVisibleChange}>{commentText}</div>
      </div>
      {isCommentFormVisible && <CommentForm />}
      
    </section>
  );
};
