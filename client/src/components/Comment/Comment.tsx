import React from "react";

import { CommentProps } from "./types";

export const Comment: React.FC<CommentProps> = ({ user, content }) => {
  return (
    <div>
      <section>{user.name}</section>
      <section>{content}</section>
    </div>
  );
};
