import Image from "next/image";
import React, { FC } from "react";
import styles from "./style.module.scss";
import { AuthorDetailsSortProps } from "./types";

const AuthorDetailsSort: FC<AuthorDetailsSortProps> = ({ block }) => {
  return (
    <div className={styles["author-details"]}>
      <div className={styles["author-details__info"]}>
        <div className={styles["author-details__avatar"]}>
          <Image
            src={block.authorImage}
            height={32}
            width={32}
            alt=""
            className={styles["author-details__avatar--img"]}
          />
        </div>
        <span className={styles["author-details__name"]}>
          {block.authorName}
        </span>
      </div>
      <div className={styles["author-details__date"]}>
        <time>{block.createdAt}</time>
      </div>
    </div>
  );
};

export default AuthorDetailsSort;
