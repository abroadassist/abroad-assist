import React from "react";

const PostContainer = ({ children, classes }) => {
  return <div className={`mx-auto max-w-2xl py-4 px-4 md:px-0  ${classes}`}>{children}</div>;
};

export default PostContainer;
