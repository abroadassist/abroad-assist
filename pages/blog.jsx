import React from "react";
import fs from "fs";
import matter from "gray-matter";
import PostCard from "components/posts/PostCard";
import PostContainer from "components/wrappers/PostContainer";
import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";

// The Blog Page Content
export default function Blog({ posts }) {
  return (
    <LayoutWrapper>
      <PageHeading
        {...{
          heading: "Blog",
        }}
      />
      <PostContainer classes="my-6">
        {posts.map((post) => {
          //extract slug and frontmatter
          const { slug, frontmatter, content } = post;

          //extract frontmatter properties
          const { title, date, categories } = frontmatter; // date should be in ISO format yyyy-mm-dd
          //JSX for individual blog listing
          return (
            // update the key after fixing the engine
            <PostCard
              key={slug}
              {...{
                slug,
                title,
                summary: content?.slice(0, 180)?.trim() ?? "",
                date,
                categories,
              }}
            />
          );
        })}
      </PostContainer>
    </LayoutWrapper>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("data");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`data/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
