import { Variants } from "framer-motion";

export const FadeIn = (delay: number = 0.2): Variants => {
  return {
    hidden: {
      y: 100,
      opacity: 0.5,
      transition: {
        type: "spring",
        delay: delay,
      },
    },
    showWithContainer: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.4,
        staggerDirection: 1,
        duration: 0.5,
      },
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
      },
    },
    showWithStaggerChildren: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.3,
        duration: 1,
      },
    },
    remove: {
      y: -40,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        ease: "easeOut",
        duration: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
};
