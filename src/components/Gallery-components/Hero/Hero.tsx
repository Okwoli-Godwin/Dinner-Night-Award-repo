// <<<<<<< HEAD
// import styles from "./Hero.module.css";
// import Typography from "../../typography/Typography";
// // import Button from "../button/Button";

// const Hero = () => {
//   return (
//     <section className={styles.hero1}>
//     <div className={styles.overlay}>
//       <div className={styles.content}>
//         <Typography variant="h3">Our Unforgettable celebrations:</Typography>
//         <Typography variant="h1">Our Gallery</Typography>
//         <Typography variant="body" className={styles.hero_details}>
//           step into our past events and relive the magic through the cherished moments 
//         </Typography>

        

        
        
//       </div>
//     </div>
//   </section>
//   )
// }

// =======
import styles from "./Hero.module.css";
import Typography from "../../typography/Typography";
import { useState, useEffect } from "react";
import Award1 from "../../../../src/images/1.jpg";
import Award2 from "../../../../src/images/2.jpg";
// import Button from "../button/Button";

const Hero: React.FC  = () => {
  const backgroundImages: String[] = [
    Award1,
    Award2,
    // DinnerImage1,
    // DinnerImage2,
    // DinnerImage3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, [backgroundImages.length]);

  
  return (
    <section
    className={styles.hero}
    style={{
      backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
  >
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

// >>>>>>> cfe9d4f55d0f356942908fef81016e091a764a03
export default Hero