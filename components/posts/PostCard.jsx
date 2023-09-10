import React from "react";
import Link from "next/link";
import CategoriesSection from "./CategoriesSection";

const PostCard = ({ slug, title, summary, date, categories }) => {
  return (
    <article className="mb-6 pb-2 border-b-[1px] border-b-gray-300 ">
      <Link href={`/posts/${slug}`}>
        <h1 className="text-2xl md:text-3xl mb-2 font-jumbo_heading hover:text-aa-blue-1" title={title}>
          {title}
        </h1>
      </Link>
      <h3 className="uppercase text-sm font-semibold font-blog_body text-gray-500">{new Date(date).toDateString()}</h3>
      <Link href={`/posts/${slug}`}>
        <p className="my-2 font-blog_body font-light text-base md:text-lg">
          {summary?.slice(0, summary?.length > 180 ? 180 : summary?.length)?.trim()}
          <span className="text-gray-500" title="Read">
            ...
          </span>
        </p>
      </Link>
      <CategoriesSection {...{ categories }} />
    </article>
  );
};

export default PostCard;
