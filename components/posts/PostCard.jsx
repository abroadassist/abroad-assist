import React from "react";
import Link from "next/link";

const PostCard = ({ slug, title, summary, date }) => {
  return (
    <article className="mb-6 border-b-[1px] border-b-gray-300 ">
      <Link href={`/posts/${slug}`}>
        <h1 className="text-2xl font-jumbo_heading hover:text-aa-blue-1 hover:animate-pulse" title={title}>
          {title}
        </h1>
      </Link>
      <h3 className="text-sm font-thin font-body text-gray-500">{new Date(date).toDateString()}</h3>
      <Link href={`/posts/${slug}`}>
        <p className="my-2 font-body">
          {summary?.slice(0, summary?.length > 180 ? 180 : summary?.length)?.trim()}
          <span className="text-gray-500" title="Read">
            ...
          </span>
        </p>
      </Link>
    </article>
  );
};

export default PostCard;
