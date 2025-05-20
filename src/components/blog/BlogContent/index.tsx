import React, { FC } from "react";
import { BlogContentProps } from "./types";

const BlogContent: FC<BlogContentProps> = ({ block }) => {
  const { content } = block;

  return (
    <div>
      <div
        className="prose--styled"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogContent;
