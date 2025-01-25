import React from "react";
import Typography from "../../typography/Typography";
import img from "../../../images/dinner2.jpg";
import img2 from "../../../images/award2.jpg";
import img3 from "../../../images/rename1.jpg";
import img4 from "../../../images/rename2.jpg";
import { motion } from "framer-motion";
import { FadeIn } from "../../framer-motion/Variant";

const IntroSection: React.FC = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <motion.section
      variants={FadeIn()}
      // initial="hidden"
      // whileInView="show"
      // exit="remove"
      // viewport={{ rootMargin: "-100px" }}
      className="flex w-[93%] items-center"
    >
      {/* First div with an image */}
      {/* <motion.div
        variants={fadeIn()}
        initial={{ x: -50, opacity: 0.3 }}
        whileInView="show"
        // exit="remove"
        viewport={{ once: true }}
        className={styles.imageContainer}
      >
        <img src={DinnerImage} alt="Elegant Event" className={styles.image} />
      </motion.div> */}

      {/* Second div with text content */}
      <div className="w-[100%]">
        {/* <motion.div
          variants={fadeIn(0.1)}
          initial={{ x: 50, opacity: 0.5 }}
          // transition={{ delay: 30.5 }}
          whileInView="show"
          exit="remove"
          viewport={{ rootMargin: "-100px" }}
        >
          <Typography variant="h6">Our Introduction</Typography>
        </motion.div> */}

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
          className="w-[85%] mt-[15px]"
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

      <div className="w-[40%] flex flex-wrap justify-between">
        <div className="h-[200px] w-[48%] mb-[15px] rounded-[15px] overflow-hidden">
          <img src={img} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="h-[200px] w-[48%] mb-[15px] rounded-[15px] overflow-hidden">
          <img src={img2} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="h-[200px] w-[48%] rounded-[15px] overflow-hidden">
          <img src={img3} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="h-[200px] w-[48%] rounded-[15px] overflow-hidden">
          <img src={img4} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default IntroSection;
