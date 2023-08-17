import LayoutWrapper from "components/layout/LayoutWrapper";
import PostTitle from "components/posts/PostTitle";
import PostContainer from "components/wrappers/PostContainer";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;
  console.log("BI", { title, author, category, date, bannerImage, tags });
  return (
    <LayoutWrapper
      {...{
        siteTitle: title,
        siteDescription: author,
      }}
    >
      <PostContainer
        {...{
          classes: "px-4 ",
        }}
      >
        <PostTitle {...{ title }} />
        {/* <div className="">
          <Image
            alt="About Abroad Assist"
            src={"https://abroadassist-assets.s3.ap-south-1.amazonaws.com/assets/filling-app.jpg"}
            fill={true}
            placeholder="empty"
            className="rounded-lg"
            style={{ objectFit: "contain" }}
          />
        </div> */}
        <h2 className="uppercase font-semibold text-sm text-gray-500">Updated {new Date(date).toDateString()}</h2>
        {/* <h3>
          {category} || {tags.join(", ")}
        </h3> */}
        <div
          className="post_content break-words overflow-x-clip"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
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
