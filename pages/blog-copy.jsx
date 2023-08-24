import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";
import PostContainer from "components/wrappers/PostContainer";
import Link from "next/link";

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
            <article key={postIndex} className="mb-6 border-b-[1px] border-b-gray-300 ">
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
        })}
      </PostContainer>
    </LayoutWrapper>
  );
}
