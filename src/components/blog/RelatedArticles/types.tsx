export interface RelatedArticle {
  title: string;
  url: string;
  articleImage: string;
  content: string;
  createdBy: string;
}

export interface RelatedArticleProps {
  relatedArticles: RelatedArticle[];
}
