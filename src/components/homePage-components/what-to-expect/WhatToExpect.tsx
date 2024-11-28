import React from "react";
// import Typography from './Typography';
import Typography from "../../typography/Typography";
import styles from "./WhatToExpect.module.css";
// import { Icon } from "lucide-react";
// import { burger } from "@lucide/lab";

const WhatToExpect: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* First div with title and subtitle */}
      <div className={styles.intro}>
        <Typography variant="h3">What to Expect at the Event</Typography>
        <Typography variant="h6">Variety of benefits are.</Typography>
      </div>

      {/* Second div with columns */}
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.icon}>{/* <Icon name="home" /> */}</div>
          <Typography variant="h4">Exclusive Dinner</Typography>
          <Typography variant="body">
            Indulge in a gourmet dining experience curated by top chefs,
            designed to delight your senses.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}></div>
          <Typography variant="h4">Award Ceremony</Typography>
          <Typography variant="body">
            Celebrate excellence as we honor standout individuals and
            organizations in various fields.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}></div>
          <Typography variant="h4">Business Networking</Typography>
          <Typography variant="body">
            Connect with industry leaders and like-minded professionals to
            expand your network.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}></div>
          <Typography variant="h4">Entertainment</Typography>
          <Typography variant="body">
            Indulge in a gourmet dining experience curated by top chefs,
            designed to delight your senses.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
