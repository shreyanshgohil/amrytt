import React, { FC } from "react";
import { TourGuidesProps } from "./types";
import Image from "next/image";
import styles from "./style.module.scss";

const TourGuides: FC<TourGuidesProps> = ({ block }) => {
  return (
    <div className={styles["tour-guides"]}>
      <div className={styles["tour-guides__header"]}>
        <h3 className={styles["tour-guides__title"]}>Tour Guides</h3>
      </div>

      <div className={styles["tour-guides__cards"]}>
        {block.guides.map((guide, index) => (
          <div className={styles["tour-guides__card"]} key={index}>
            <div className={styles["tour-guides__info"]}>
              <div className={styles["tour-guides__avatar"]}>
                <Image src={guide.profileImage} width={40} height={40} alt="" />
              </div>

              <div className={styles["tour-guides__details"]}>
                <p className={styles["tour-guides__name"]}>{guide.guideName}</p>
                <div className={styles["tour-guides__location"]}>
                  <Image
                    src={"/images/icons/location.png"}
                    width={13}
                    height={16}
                    alt="Location"
                  />
                  <span className={styles["tour-guides__location-text"]}>
                    {guide.guideLocation}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={styles["tour-guides__rating"]}>
                {Array(5)
                  .fill("-")
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      {guide.starts > index ? (
                        <Image
                          src={"/images/icons/start-filled.png"}
                          alt="Star filled"
                          height={15}
                          width={15}
                          className={styles["tour-guides__star"]}
                        />
                      ) : (
                        <Image
                          src={"/images/icons/start-stroke.png"}
                          alt="Star outline"
                          height={15}
                          width={15}
                          className={styles["tour-guides__star"]}
                        />
                      )}
                    </React.Fragment>
                  ))}
              </div>
              <p
                className={styles["tour-guides__rating-count"]}
              >{`(${guide.starts}.0)`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuides;
