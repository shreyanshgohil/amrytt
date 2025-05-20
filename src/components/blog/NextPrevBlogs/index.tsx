import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { NextPrevBlogsProps } from "./types";

const NextPrevBlogs: FC<NextPrevBlogsProps> = ({ block }) => {
  const { nextBlogData, prevBlogData } = block;

  return (
    <div className={styles["next-prev"]}>
      <div className={styles["next-prev__wrapper"]}>
        <div className={styles["next-prev__item"]}>
          <Link href={prevBlogData.url} className={styles["next-prev__link"]}>
            <div className={styles["next-prev__nav"]}>
              <Image
                src={"/images/icons/arrow.png"}
                height={16}
                width={16}
                alt="Previous"
                className={styles["next-prev__icon"]}
              />
              <span className={styles["next-prev__label"]}>Previous</span>
            </div>
          </Link>
          <span className={styles["next-prev__title"]}>
            {prevBlogData.title}
          </span>
        </div>

        <div
          className={`${styles["next-prev__item"]} ${styles["next-prev__item--next"]}`}
        >
          <Link href={nextBlogData.url} className={styles["next-prev__link"]}>
            <div className={styles["next-prev__nav"]}>
              <span className={styles["next-prev__label"]}>Next</span>
              <Image
                src={"/images/icons/arrow.png"}
                height={16}
                width={16}
                alt="Next"
                className={`${styles["next-prev__icon"]} ${styles["next-prev__icon--next"]}`}
              />
            </div>
          </Link>
          <span className={styles["next-prev__title"]}>
            {nextBlogData.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NextPrevBlogs;
