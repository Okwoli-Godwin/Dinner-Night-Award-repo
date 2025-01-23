import React from "react";
import Typography from "../../typography/Typography";
import Button from "../../button/Button";
import styles from "./eventCallToAction.module.css";

const EventCallToAction: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.h4}>
        Don’t Miss Out on a Night of Celebration and Connection!
      </Typography>
      <Typography variant="body" className={styles.details}>
        Join us at the <strong style={{ color: "#d8b300" }}>Grand Gala</strong>{" "}
        for a memorable evening filled with elegance, entertainment, and
        recognition of excellence. Secure your ticket now to experience an
        unforgettable night!
      </Typography>

      <div className={styles.buttons}>
        <Button text="Buy Ticket Now" variant="primary" />
        <Button text="See Businesses" variant="outline" />
      </div>
    </div>
  );
};

export default EventCallToAction;
