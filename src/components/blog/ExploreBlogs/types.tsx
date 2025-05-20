interface ExploreBlogs {
  title: string;
  category: string;
  date: string;
  url: string;
  articleImage: string;
}

export interface ExploreBlogsProps {
  block: {
    blogs: ExploreBlogs[];
  };
}
