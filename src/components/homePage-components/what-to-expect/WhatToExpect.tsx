'use client';

import React, { useState, useEffect } from "react";
import Typography from "../../typography/Typography";
import styles from "./whatToExpect.module.css";
import img from "../../../images/dinner.jpg"
import img2 from "../../../images/award.gif"
import img3 from "../../../images/networking.jpg"
import img4 from "../../../images/entertainment.jpg"

const WhatToExpect: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false, false]);

  useEffect(() => {
    const imageUrls = [img, img2, img3, img4];
    imageUrls.forEach((url, index) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  const renderImageWithSkeleton = (src: string, alt: string, index: number, className: string) => (
    <div className={`${styles.image_wrapper} ${imagesLoaded[index] ? '' : styles.skeleton}`}>
      {!imagesLoaded[index] && (
        <div className={styles.loading_indicator}>
          <div className={styles.spinner}></div>
          <span>Loading...</span>
        </div>
      )}
      {imagesLoaded[index] && (
        <img src={src || "/placeholder.svg"} alt={alt} className={className} />
      )}
    </div>
  );

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <Typography variant="h2">What to Expect at the Event</Typography>
      </div>

      <div className={styles.card_container}>
        <div className={styles.image_holder}>
          {renderImageWithSkeleton(img, "Exclusive Dinner", 0, styles.image)}
          <h3 className={styles.h3}>Exclusive Dinner</h3>
          <p className={styles.p}>Indulge in a gourmet dining experience curated by top chefs,
          designed to delight your senses.</p>
        </div>
        <div className={styles.image_holder2}>
          {renderImageWithSkeleton(img2, "Award Ceremony", 1, styles.image2)}
          <h3 className={styles.h3}>Award Ceremony</h3>
          <p className={styles.p}>Celebrate excellence as we honor standout individuals and
          organizations in various fields.</p>
        </div>
        <div className={styles.image_holder}>
          {renderImageWithSkeleton(img3, "Business Networking", 2, styles.image)}
          <h3 className={styles.h3}>Business Networking</h3>
          <p className={styles.p}>Connect with industry leaders and like-minded professionals to
          expand your network.</p>
        </div>
        <div className={styles.image_holder2}>
          {renderImageWithSkeleton(img4, "Entertainment", 3, styles.image)}
          <h3 className={styles.h3}>Entertainment</h3>
          <p className={styles.p}>Enjoy captivating performances and world-class entertainment
          throughout the evening.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
