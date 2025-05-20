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

const FlexibleLayout = ({ block, extras }: any) => {
  const { componentName } = block;

  const components: any = {
    BlogContent: BlogContent,
    AuthorDetailsSort,
    AuthorDetails,
  };
  return componentName && components[componentName] ? (
    React.createElement(components[componentName], { block, extras })
  ) : (
    <div>Missing component {componentName}</div>
  );
};

export default FlexibleLayout;
