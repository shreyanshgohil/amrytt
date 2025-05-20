import React from "react";
import dynamic from "next/dynamic";

const BlogContent = dynamic(() => import("../BlogContent"), {
  loading: () => <p>Loading...</p>,
});

const AuthorDetailsSort = dynamic(() => import("../AuthorDetailsSort"), {
  loading: () => <p>Loading...</p>,
});

const AuthorDetails = dynamic(() => import("../AuthorDetails"), {
  loading: () => <p>Loading...</p>,
});
const NextPrevBlogs = dynamic(() => import("../NextPrevBlogs"), {
  loading: () => <p>Loading...</p>,
});

const FlexibleLayout = ({ block }: any) => {
  const { componentName } = block;

  const components: any = {
    BlogContent: BlogContent,
    AuthorDetailsSort,
    AuthorDetails,
    NextPrevBlogs,
  };
  return componentName && components[componentName] ? (
    React.createElement(components[componentName], { block })
  ) : (
    <div>Missing component {componentName}</div>
  );
};

export default FlexibleLayout;
