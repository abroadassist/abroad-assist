import React from "react";

const CategoryBadge = ({ category }) => {
  return (
    <span
      key={category}
      className="text-sm font-blog_body font-semibold bg-sky-200 hover:bg-sky-300 focus:bg-sky-300 hover:cursor-pointer rounded px-1"
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
