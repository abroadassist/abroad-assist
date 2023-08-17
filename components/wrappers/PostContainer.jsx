import React from "react";

const PostContainer = ({ children, classes }) => {
  return <div className={`mx-auto max-w-2xl py-4  ${classes}`}>{children}</div>;
};

export default PostContainer;
