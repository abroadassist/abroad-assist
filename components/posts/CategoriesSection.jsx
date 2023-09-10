import React from "react";
import CategoryBadge from "./CategoryBadge";

const CategoriesSection = ({ categories }) => {
  return (
    <div className="my-1 flex flex-row gap-2 flex-wrap">
      {categories?.map((category) => (
        <CategoryBadge key={category} {...{ category }} />
      ))}
    </div>
  );
};

export default CategoriesSection;
