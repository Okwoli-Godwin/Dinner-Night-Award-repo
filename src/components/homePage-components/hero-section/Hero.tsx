import React, { useEffect } from "react";
import styles from "./hero.module.css";
import Typography from "../../typography/Typography";
import Countdown from "../countdown/Countdown";
import { useState } from "react";
import Award1 from "../../../../src/images/1.jpg";
import Award2 from "../../../../src/images/2.jpg";
// import DinnerImage1 from "../../../../src/images/dinner-image-2.webp";
// import DinnerImage2 from "../../../../src/images/dinner-image-4.webp";
// import DinnerImage3 from "../../../../src/images/hero-bg.webp";

const Hero: React.FC = () => {
  const backgroundImages: String[] = [
    Award1,
    Award2,
    // DinnerImage1,
    // DinnerImage2,
    // DinnerImage3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const targetDate = new Date(new Date().getTime() + 150 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const renderFloatingText = (text: string) => {
    return (
      <span className={styles["floating-text"]}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ "--i": index } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      className={styles.hero1}
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <Typography variant="h3">Celebrating Excellence:</Typography>
          <Typography variant="h1">
          {/* {renderFloatingText("The Grand Gala")} */} The Grand Gala
        </Typography>
          <Typography variant="body2" className={styles.hero_details}>
            Join us for an unforgettable evening of recognition, inspiration,
            and connection.
          </Typography>

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
