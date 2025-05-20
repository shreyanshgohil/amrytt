import React, { FC } from "react";
import styles from "./style.module.scss";
import { HeaderProps } from "./types";
import Link from "next/link";
const Header: FC<HeaderProps> = (props) => {
  const { breadcrumb } = props;
  return (
    <header className={styles.header}>
      <nav className={styles["breadcrumb-header"]}>
        <ul className={styles["breadcrumb-header__list"]}>
          {breadcrumb.map((breadcrumbItem, index) => (
            <li className={styles["breadcrumb-header__item"]} key={index}>
              <Link
                className={`${styles["breadcrumb-header__link"]} ${
                  breadcrumb.length - 1 === index &&
                  styles["breadcrumb-header__link--active"]
                }`}
                href={breadcrumbItem.url}
              >
                {breadcrumbItem.title}
              </Link>
              {breadcrumb.length - 1 !== index && (
                <span className={styles["breadcrumb-header__divider"]}>/</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
