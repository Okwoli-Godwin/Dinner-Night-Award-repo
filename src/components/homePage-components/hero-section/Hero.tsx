import React from "react";
import styles from "./hero.module.css";
import Typography from "../../typography/Typography";
import Button from "../../button/Button";
import Countdown from "../countdown/Countdown";

const Hero: React.FC = () => {
  const targetDate = new Date(new Date().getTime() + 150 * 24 * 60 * 60 * 1000); // 150 days from now

  return (
    <section className={styles.hero}>
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
