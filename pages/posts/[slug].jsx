import LayoutWrapper from "components/layout/LayoutWrapper";
import CategoriesSection from "components/posts/CategoriesSection";
import PostTitle from "components/posts/PostTitle";
import PostContainer from "components/wrappers/PostContainer";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, date, categories } = frontmatter;
  return (
    <LayoutWrapper
      {...{
        siteTitle: title,
        siteDescription: `${content?.slice(0, 180)?.trim()}...`,
      }}
    >
      <PostContainer
        {...{
          classes: "px-4 ",
        }}
      >
        <PostTitle {...{ title }} />
        <h2 className="uppercase font-semibold font-blog_body text-sm text-gray-500">
          Updated {new Date(date).toDateString()}
        </h2>
        <div
          className="post_content break-words overflow-x-clip"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
        <hr className="mt-8 mb-4" />
        <CategoriesSection {...{ categories }} />
      </PostContainer>
    </LayoutWrapper>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("data");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`data/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
