import React from "react";
import Typography from "../../typography/Typography";
import styles from "./introduction.module.css";
import DinnerImage from "../../../images/intro-image.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/Variant";

const IntroSection: React.FC = () => {
  return (
    <motion.section
      variants={fadeIn()}
      // initial="hidden"
      // whileInView="show"
      // exit="remove"
      // viewport={{ rootMargin: "-100px" }}
      className={styles.container}
    >
      {/* First div with an image */}
      <motion.div
        variants={fadeIn()}
        initial={{ x: -50, opacity: 0.3 }}
        whileInView="show"
        // exit="remove"
        viewport={{ once: true }}
        className={styles.imageContainer}
      >
        <img src={DinnerImage} alt="Elegant Event" className={styles.image} />
      </motion.div>

      {/* Second div with text content */}
      <div className={styles.textContainer}>
        <motion.div
          variants={fadeIn(0.1)}
          initial={{ x: 50, opacity: 0.5 }}
          // transition={{ delay: 30.5 }}
          whileInView="show"
          exit="remove"
          viewport={{ rootMargin: "-100px" }}
        >
          <Typography variant="h6">Our Introduction</Typography>
        </motion.div>

        <motion.div
          variants={fadeIn(0.5)}
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
          variants={fadeIn()}
          initial={{ y: 50, opacity: 0.5 }}
          whileInView="show"
          exit="remove"
          viewport={{ once: true }}
        >
          <Typography variant="body">
            Join us for a night to remember, where elegance meets excitement.
            The [Event Name] Dinner & Awards Night offers a luxurious
            atmosphere, a gourmet dining experience, and the opportunity to
            network with industry leaders. Highlights include live performances,
            inspiring guest speakers, and the presentation of awards honoring
            outstanding achievements. Don’t miss the chance to enjoy an
            unforgettable evening among peers and friends.
          </Typography>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
