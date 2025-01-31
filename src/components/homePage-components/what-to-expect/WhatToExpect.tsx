import React from "react";
import Typography from "../../typography/Typography";
import styles from "./WhatToExpect.module.css";
import img from "../../../images/dinner.jpg"
import img2 from "../../../images/award.gif"
import img3 from "../../../images/networking.jpg"
import img4 from "../../../images/entertainment.jpg"

const WhatToExpect: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <Typography variant="h2">What to Expect at the Event</Typography>
        {/* <Typography variant="h6">Variety of benefits are.</Typography> */}
      </div>

      <div className={styles.card_container}>
        <div className={styles.image_holder}>
          <img src={img} alt="img" 
            className={styles.image}
          />
          <h3 className={styles.h3}>Exclusive Dinner</h3>
          <p className={styles.p}>Indulge in a gourmet dining experience curated by top chefs,
          designed to delight your senses.</p>
        </div>
        <div className={styles.image_holder2}>
          <img src={img2} alt="img" 
            className={styles.image2}
          />
          <h3 className={styles.h3}>Award Ceremony</h3>
          <p className={styles.p}>Celebrate excellence as we honor standout individuals and
          organizations in various fields.</p>
        </div>
        <div className={styles.image_holder}>
          <img src={img3} alt="img" 
            className={styles.image}
          />
          <h3 className={styles.h3}>Business Networking</h3>
          <p className={styles.p}>Connect with industry leaders and like-minded professionals to
          expand your network.</p>
        </div>
        <div className={styles.image_holder2}>
          <img src={img4} alt="img" 
            className={styles.image}
          />
          <h3 className={styles.h3}>Entertainment</h3>
          <p className={styles.p}>Indulge in a gourmet dining experience curated by top chefs,
          designed to delight your senses.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
