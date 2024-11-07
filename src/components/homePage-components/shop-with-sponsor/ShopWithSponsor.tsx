import React from "react";
import Typography from "../../typography/Typography";
import Button from "../../button/Button";
import styles from "./shopWithSponsors.module.css";
import SponsorImage from "../../../../public/sponsor-image.png";

const ShopWithSponsors: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* Div A: Sponsored Businesses and Shop with Our Sponsors */}
      <div className={styles.header}>
        <Typography variant="h5">Sponsored Businesses</Typography>
        <Typography variant="h2">Shop with Our Sponsors</Typography>
      </div>

      {/* Div B: Image container and text container */}
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={SponsorImage}
            alt="Eco-Friendly Skincare Brand"
            className={styles.image}
          />
        </div>

        <div className={styles.textContainer}>
          <Typography variant="h5" className={styles.textHeader}>
            Eco-Friendly Skincare Brand
          </Typography>
          <Typography variant="h6" className={styles.h6}>
            Nature’s Care in Every Drop.
          </Typography>
          <Typography variant="body" className={styles.textDetails}>
            At EFSB, we harness the power of nature to create skincare products
            that are as kind to your skin as they are to the environment. Our
            commitment to sustainable, toxin-free ingredients is at the heart of
            every product we make.
          </Typography>
          <div className={styles.buttonContainer}>
            <Button variant="primary" text="See More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithSponsors;
