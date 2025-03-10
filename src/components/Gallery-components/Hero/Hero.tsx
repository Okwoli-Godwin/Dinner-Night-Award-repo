import styles from "./Hero.module.css";
import Typography from "../../typography/Typography";
// import Button from "../button/Button";

const Hero = () => {
  return (
    <section className={styles.hero1}>
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Typography variant="h3">Our Unforgettable celebrations:</Typography>
        <Typography variant="h1">Our Gallery</Typography>
        <Typography variant="body" className={styles.hero_details}>
          step into our past events and relive the magic through the cherished moments 
        </Typography>

        

        
        
      </div>
    </div>
  </section>
  )
}

export default Hero