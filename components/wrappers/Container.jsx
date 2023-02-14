import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`mx-auto max-w-5xl ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
