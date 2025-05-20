import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import FlexibleLayout from "@/components/blog/FlexibleLayout";

const BlogPage = (props) => {
  const { blog } = props;
  return (
    <main className={styles["blog"]}>
      <h1 className={`heading--h1 ${styles["blog__title"]}`}>{blog.title}</h1>

      <div className={styles["blog__image"]}>
        <Image
          src={"/images/blogs/gym.png"}
          width={1440}
          height={480}
          alt={blog.title}
        />
      </div>

      <div className={`container--boxed ${styles["blog__content-wrapper"]}`}>
        <div className={styles["blog__layout"]}>
          <div className={styles["blog__main-content"]}>
            {blog.components.contentSide.map((item: any, index: number) => (
              <FlexibleLayout block={item} key={index} />
            ))}
          </div>

          <div className={styles["blog__sidebar"]}>
            {blog.components.exploreSide.map((item: any, index: number) => (
              <FlexibleLayout block={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
