import type React from "react"
import styles from "./hero.module.css"
import Typography from "../../typography/Typography"
import Countdown from "../countdown/Countdown"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// Removed navigation CSS import
import "swiper/css/effect-fade"
// Import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
// Removed Navigation from imports

import Award1 from "../../../../src/images/1.jpg"
import Award2 from "../../../../src/images/2.jpg"
import { BsCalendar3 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
// import DinnerImage1 from "../../../../src/images/dinner-image-2.webp";
// import DinnerImage2 from "../../../../src/images/dinner-image-4.webp";
// import DinnerImage3 from "../../../../src/images/hero-bg.webp";

const Hero: React.FC = () => {
  const backgroundImages = [
    Award1,
    Award2,
    Award1, // Using Award1 again for the third slide, replace with another image if available
  ]

  // Content for each slide
  const slideContents = [
    {
      subtitle: "Celebrating Excellence:",
      title: "The Grand Gala",
      description: "Join us for an unforgettable evening of recognition, inspiration, and connection."
    },
    {
      subtitle: "A Night to Remember:",
      title: "Awards & Honors",
      description: "Recognizing outstanding achievements and contributions in our community."
    },
    {
      subtitle: "Exclusive Event:",
      title: "Elegance & Prestige",
      description: "Experience a sophisticated evening of fine dining, entertainment, and networking."
    }
  ]

  const targetDate = new Date("2025-07-06T00:00:00")

  return (
    <section className={styles.hero1}>
      <Swiper
        effect={"fade"}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // Removed navigation={true} prop
        modules={[Autoplay, Pagination, EffectFade]}
        // Removed Navigation from modules array
        className={styles.mySwiper}
      >
        {slideContents.map((content, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slide}
              style={{
                backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <Typography variant="h3">{content.subtitle}</Typography>
                  <Typography variant="h1">{content.title}</Typography>
                  <Typography variant="body2" className={styles.hero_details}>
                    {content.description}
                  </Typography>

                  <div className="w-[100%] flex items-center justify-between mt-[12px]">
                    <div className="flex-col flex items-center">
                      <BsCalendar3 color="#fff" size={24}/>
                      <h3 className={styles.date}>Sunday 6th</h3>
                      <h3 className={styles.month}>July, 2025.</h3>
                    </div>
                    <div className="flex-col flex items-center">
                      <FaLocationDot color="#fff" size={24}/>
                      <h3 className={styles.date}>Our Lady of the Rosary Catholic Church</h3>
                      <h3 className={styles.month}>1/3 Rasaki Street, Olodi-Apapa, Lagos</h3>
                    </div>
                    <div className="flex-col flex items-center">
                      <MdAccessTimeFilled color="#fff" size={24}/>
                      <h3 className={styles.date}>1pm</h3>
                      <h3 className={styles.month}>Red Carpet</h3>
                    </div>
                  </div>

                  <div className={styles.countdown}>
                    <Countdown targetDate={targetDate} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero