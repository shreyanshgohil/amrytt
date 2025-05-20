import { Layout } from "@/components/common";
import { BlogPage } from "@/components/pages";
import { blogs } from "@/constants/data";

const BlogIndex = (props) => {
  const { blog } = props;
  const breadcrumb = [
    { title: "Home", url: "/" },
    { title: "Articles", url: "/blog" },
  ];
  return (
    <Layout breadcrumb={breadcrumb}>
      <BlogPage blog={blog} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  console.log(params, "aaaaa");
  const blog = blogs.find((b) => b.slug === params.slug);

  return {
    props: {
      blog,
    },
  };
}

export default BlogIndex;
