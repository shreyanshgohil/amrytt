import React, { FC } from "react";
import { ExploreBlogsProps } from "./types";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

const ExploreBlogs: FC<ExploreBlogsProps> = ({ block }) => {
  const { blogs } = block;

  return (
    <div className={styles["explore-blogs"]}>
      <h3 className={styles["explore-blogs__heading"]}>Explore more</h3>
      <div className={styles["explore-blogs__list"]}>
        {blogs.map((singleBlog, index) => {
          return (
            <Link
              href={singleBlog.url}
              className={styles["explore-blogs__item"]}
              key={index}
            >
              <div className={styles["explore-blogs__image-wrapper"]}>
                <Image
                  src={singleBlog.articleImage}
                  width={301}
                  height={165}
                  alt={singleBlog.title}
                  className={styles["explore-blogs__image"]}
                />
              </div>
              <div className={styles["explore-blogs__meta"]}>
                <span className={styles["explore-blogs__category"]}>
                  {singleBlog.category}
                </span>
                <span className={styles["explore-blogs__separator"]}>|</span>
                <span className={styles["explore-blogs__date"]}>
                  {singleBlog.date}
                </span>
              </div>
              <p className={styles["explore-blogs__title"]}>
                {singleBlog.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreBlogs;
