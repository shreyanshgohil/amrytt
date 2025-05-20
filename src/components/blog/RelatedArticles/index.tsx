import Image from "next/image";
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { RelatedArticleProps } from "./types";
import Link from "next/link";

const RelatedArticles: FC<RelatedArticleProps> = ({ relatedArticles }) => {
  return (
    <div className={styles["related-articles"]}>
      <div
        className={`container--boxed ${styles["related-articles__container"]}`}
      >
        <h2 className={`heading--h1 ${styles["related-articles__heading"]}`}>
          Related articles
        </h2>
        <div className={styles["related-articles__list"]}>
          {relatedArticles.map((singleRelatedArticle, index: number) => (
            <Link
              href={singleRelatedArticle.url}
              className={styles["related-articles__card"]}
              key={index}
            >
              <div className={styles["related-articles__image"]}>
                <Image
                  src={singleRelatedArticle.articleImage}
                  width={288}
                  height={229}
                  alt={singleRelatedArticle.title}
                />
              </div>
              <h3 className={styles["related-articles__title"]}>
                {singleRelatedArticle.title}
              </h3>
              <p className={styles["related-articles__excerpt"]}>
                {singleRelatedArticle.content}
              </p>
              <span className={styles["related-articles__author"]}>
                By {singleRelatedArticle.createdBy}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
