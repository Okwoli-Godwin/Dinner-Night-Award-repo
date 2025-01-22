import React, { useEffect } from "react";
import styles from "./hero.module.css";
import Typography from "../../typography/Typography";
import Button from "../../button/Button";
import Countdown from "../countdown/Countdown";
import { useState } from "react";
import Award1 from "../../../../src/images/award-1.webp";
import Award2 from "../../../../src/images/award-2.webp";
import DinnerImage1 from "../../../../src/images/dinner-image-2.webp";
import DinnerImage2 from "../../../../src/images/dinner-image-4.webp";
import DinnerImage3 from "../../../../src/images/hero-bg.webp";

const Hero: React.FC = () => {
  const backgroundImages: String[] = [
    Award1,
    Award2,
    DinnerImage1,
    DinnerImage2,
    DinnerImage3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const targetDate = new Date(new Date().getTime() + 150 * 24 * 60 * 60 * 1000); // 150 days from

  useEffect(() => {
    // Change background every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
      // console.log(currentImageIndex);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <Typography variant="h3">Celebrating Excellence:</Typography>
          <Typography variant="h1">The Grand Gala</Typography>
          <Typography variant="body" className={styles.hero_details}>
            Join us for an unforgettable evening of recognition, inspiration,
            and connection.
          </Typography>

          <div className={styles.buttonContainer}>
            <Button text="Get Ticket Now" variant="primary" size="large" />
          </div>
          <div className={styles.countdown}>
            <>
              <Countdown targetDate={targetDate} />
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
