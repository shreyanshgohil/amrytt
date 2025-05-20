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

const ExploreBlogs = dynamic(() => import("../ExploreBlogs"), {
  loading: () => <p>Loading...</p>,
});
const Spacer = dynamic(() => import("../Spacer"), {
  loading: () => <p>Loading...</p>,
});

const TourGuides = dynamic(() => import("../TourGuides"), {
  loading: () => <p>Loading...</p>,
});

const FlexibleLayout = ({ block }: any) => {
  const { componentName } = block;

  const components: any = {
    BlogContent,
    AuthorDetailsSort,
    AuthorDetails,
    NextPrevBlogs,
    ExploreBlogs,
    Spacer,
    TourGuides,
  };
  return componentName && components[componentName] ? (
    React.createElement(components[componentName], { block })
  ) : (
    <div>Missing component {componentName}</div>
  );
};

export default FlexibleLayout;
