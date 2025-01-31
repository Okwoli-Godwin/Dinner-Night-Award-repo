import React from "react";
import Typography from "../../typography/Typography";
import img from "../../../images/dinner2.jpg";
import img2 from "../../../images/award2.jpg";
import img3 from "../../../images/rename1.jpg";
import img4 from "../../../images/rename2.jpg";
import { motion } from "framer-motion";
import { FadeIn } from "../../framer-motion/Variant";
import styles from "./introduction.module.css"

const IntroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.section
      variants={FadeIn()}
      className={styles.motion_container}
    >

      {/* Second div with text content */}
      <div className={styles.contain}>
        <motion.div
          variants={FadeIn(0.5)}
          initial={{ x: 20, opacity: 0.5 }}
          whileInView="show"
          exit="remove"
          viewport={{ once: true }}
        >
          <Typography variant="h2">
            Welcome to an Evening of Elegance and Celebration
          </Typography>
        </motion.div>
        <motion.div
          variants={FadeIn()}
          initial={{ y: 50, opacity: 0.5 }}
          whileInView="show"
          exit="remove"
          viewport={{ once: true }}
          className="w-[100%] mt-[15px]"
        >
          <Typography variant="body">
            Join us for a night to remember, where elegance meets excitement.
            The{" "}
            <strong style={{ color: "#d8b300", fontSize: "1.3rem" }}>
              Grand Gala
            </strong>{" "}
            Dinner & Awards Night offers a luxurious atmosphere, a gourmet
            dining experience, and the opportunity to network with industry
            leaders. Highlights include live performances, inspiring guest
            speakers, and the presentation of awards honoring outstanding
            achievements. Don’t miss the chance to enjoy an unforgettable
            evening among peers and friends.
          </Typography>
        </motion.div>
      </div>

      <div className={styles.image_container}>
        <div className={styles.image_holder}>
          <img src={img} alt="" className={styles.image} />
        </div>
        <div className={styles.image_holder}>
          <img src={img2} alt="" className={styles.image} />
        </div>
        <div className={styles.image_holder}>
          <img src={img3} alt="" className={styles.image} />
        </div>
        <div className={styles.image_holder}>
          <img src={img4} alt="" className={styles.image} />
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default IntroSection;
