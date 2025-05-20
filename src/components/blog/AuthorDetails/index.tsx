import Image from "next/image";
import React, { FC } from "react";
import styles from "./style.module.scss";
import { AuthorDetailsProps } from "./types";

const AuthorDetails: FC<AuthorDetailsProps> = ({ block }) => {
  return (
    <div className={styles["author-details"]}>
      <h2 className={styles["author-details__name"]}>
        About {block.authorName}
      </h2>

      <div className={styles["author-details__avatar"]}>
        <Image
          src={"/images/blogs/author.png"}
          height={100}
          width={100}
          alt={block.authorName}
        />
      </div>

      <p className={styles["author-details__bio"]}>{block.authorBio}</p>
    </div>
  );
};

export default AuthorDetails;
