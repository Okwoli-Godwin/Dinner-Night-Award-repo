import React from "react";
import Typography from "../../typography/Typography";
import styles from "./introduction.module.css";
import DinnerImage from "../../../images/intro-image.png";

const IntroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* First div with an image */}
      <div className={styles.imageContainer}>
        <img src={DinnerImage} alt="Elegant Event" className={styles.image} />
      </div>

      {/* Second div with text content */}
      <div className={styles.textContainer}>
        <Typography variant="h6">Our Introduction</Typography>
        <Typography variant="h2">
          Welcome to an Evening of Elegance and Celebration
        </Typography>
        <Typography variant="body">
          Join us for a night to remember, where elegance meets excitement. The
          [Event Name] Dinner & Awards Night offers a luxurious atmosphere, a
          gourmet dining experience, and the opportunity to network with
          industry leaders. Highlights include live performances, inspiring
          guest speakers, and the presentation of awards honoring outstanding
          achievements. Don’t miss the chance to enjoy an unforgettable evening
          among peers and friends.
        </Typography>
      </div>
    </section>
  );
};

export default IntroSection;
