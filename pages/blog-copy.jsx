import React from "react";
import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";
import PostCard from "components/posts/PostCard";
import PostContainer from "components/wrappers/PostContainer";

const samplePost = {
  slug: "sample-2",

  frontmatter: {
    title: "Post 1",
    date: "2023-08-22",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iusto modi, quae minus quod fuga perferendis quia velit? Error vitae quisquam, quis neque eius laudantium amet sequi sunt quidem voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iusto modi, quae minus quod fuga perferendis quia velit? Error vitae quisquam, quis neque eius laudantium amet sequi sunt quidem voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iusto modi, quae minus quod fuga perferendis quia velit? Error vitae quisquam, quis neque eius laudantium amet sequi sunt quidem voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iusto modi, quae minus quod fuga perferendis quia velit? Error vitae quisquam, quis neque eius laudantium amet sequi sunt quidem voluptatem.",
  },
};
// The Blog Page Content
export default function Blog({ posts = Array(5).fill(samplePost) }) {
  return (
    <LayoutWrapper>
      <PageHeading
        {...{
          heading: "Blog",
        }}
      />
      <PostContainer classes="my-6">
        {posts.map((post, postIndex) => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post;
          //extract frontmatter properties
          const { title, date, summary } = frontmatter; // date should be in ISO format yyyy-mm-dd

          //JSX for individual blog listing
          return (
            // update the key after fixing the engine
            <PostCard
              key={postIndex}
              {...{
                slug,
                title,
                summary,
                date,
              }}
            />
          );
        })}
      </PostContainer>
    </LayoutWrapper>
  );
}
