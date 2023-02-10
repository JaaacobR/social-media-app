import React, { useState } from "react";

export const CommentForm = () => {
  const [commentText, setCommentText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleClick = async () => {};

  return (
    <div>
      <p>Write a comment...</p>
      <textarea rows={3} onChange={handleChange}></textarea>
      <button onClick={handleClick}>Send</button>
    </div>
  );
};
