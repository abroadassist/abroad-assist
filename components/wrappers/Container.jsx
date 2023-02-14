import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`mx-auto max-w-[1080px] ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
