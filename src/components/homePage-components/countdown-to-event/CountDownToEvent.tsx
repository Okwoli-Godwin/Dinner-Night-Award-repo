import React from "react";
import styles from "./countDownToEvent.module.css";
// import Typography from '../..'; // adjust path as needed
import Typography from "../../typography/Typography";

const CountDownToEvent: React.FC = () => {
  type Items = {
    number: number;
    header: string;
    body: string;
    date: string;
  };
  const items: Items[] = [
    {
      number: 1,
      header: "Meet & Greet",
      date: "1th April 2024",
      body: "A casual networking session to meet fellow attendees and break the ice.",
    },
    {
      number: 2,
      header: "Workshop Day",
      date: "1th April 2024",
      body: "Participate in interactive workshops to build skills and make connections.",
    },
    {
      number: 3,
      header: "Outdoor Adventure",
      date: "1th April 2024",
      body: "Enjoy a fun outdoor activity to unwind and connect in a relaxed setting.",
    },
    {
      number: 4,
      header: "Cocktail Party",
      date: "1th April 2024",
      body: "Kick off the weekend with a pre-event cocktail night to set the mood!",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h6" className={styles.preEvent}>
          PRE-EVENT ACTIVITIES
        </Typography>
        <Typography variant="h2" className={styles.title}>
          Countdown to the Celebration
        </Typography>
      </div>

      <div className={styles.activities}>
        {items.map((item, index) => (
          <div key={index} className={styles.activity}>
            <div className={styles.date_container}>
              <Typography variant="body" className={styles.day}>
                DAY
              </Typography>
              <Typography variant="h3" className={styles.number}>
                {`0${item.number}`}
              </Typography>
              <Typography variant="body" className={styles.date}>
                {item.date}
              </Typography>
            </div>

            <div className={styles.details_container}>
              <Typography variant="h4">{item.header} </Typography>
              <Typography variant="h5" className={styles.description}>
                {/* Replace with actual descriptions */}
                {item.body}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountDownToEvent;
