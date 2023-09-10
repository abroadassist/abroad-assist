import React from "react";

const PostTitle = ({ title }) => {
  return (
    <h1
      className=" text-3xl md:text-4xl lg:text-5xl mt-3 mb-8 font-semibold font-jumbo_heading"
      style={{
        lineHeight: "1.15 !important", // having to do inline styles as the classnames are getting overriden by tailwind styles despite putting them after the classes
      }}
    >
      {title}
    </h1>
  );
};

export default PostTitle;
