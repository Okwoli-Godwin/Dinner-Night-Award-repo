import React from "react";
import styles from "./BusinessAdvertSkeleton.module.css";

const BusinessAdvertSkeleton: React.FC = () => {
  return (
    <>
    <div className={styles.skeletonCarousel}>
      {[...Array(3)].map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonButton} />
        </div>
      ))}
    </div>

    <div className={styles.skeletonCarousel2}>
      {[...Array(1)].map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonButton} />
        </div>
      ))}
    </div>
    </>
  );
};

export default BusinessAdvertSkeleton;
