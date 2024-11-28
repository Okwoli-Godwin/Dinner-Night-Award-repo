import React from "react";
import styles from "./eventWeekSection.module.css";
// import Typography from '../components/Typography';
import Typography from "../../typography/Typography";

type Activities = {
  day: string;
  activities: string;
  details: string;
  time: string;
};

const weekEvent: Activities[] = [
  {
    activities: "Meet & Greet",
    day: "Monday",
    details:
      "A casual networking session to meet fellow attendees and break the ice.",
    time: "9:00pm",
  },
  {
    activities: "Workshop Day",
    day: "Tuesday",
    details:
      "Participate in interactive workshops to build skills and make connections.",
    time: "9:00pm",
  },
  {
    activities: "Outdoor Adventure",
    day: "Wednesday",
    details:
      "Enjoy a fun outdoor activity to unwind and connect in a relaxed setting.",
    time: "9:00pm",
  },
  {
    activities: "Cocktail Party",
    day: "Thursday",
    details:
      "Kick off the weekend with a pre-event cocktail night to set the mood!",
    time: "9:00pm",
  },
  {
    activities: "Cocktail Party",
    day: "Friday",
    details:
      "Kick off the weekend with a pre-event cocktail night to set the mood!",
    time: "9:00pm",
  },
  {
    activities: "Cocktail Party",
    day: "Saturday",
    details:
      "Kick off the weekend with a pre-event cocktail night to set the mood!",
    time: "9:00pm",
  },
];

const EventWeekSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.divA}>
        <Typography variant="h4" className={styles.subtitle}>
          PRE-EVENT ACTIVITIES
        </Typography>
        <Typography variant="h2" className={styles.title}>
          Event week activities
        </Typography>
      </div>

      <div className={styles.divB}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
              <th>Details</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {weekEvent.map((events, index) => (
              <tr className={styles.table_row} key={index}>
                <td>{events.day}</td>
                <td>{events.activities}</td>
                <td className={styles.details}>{events.details}</td>
                <td>{events.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EventWeekSection;
