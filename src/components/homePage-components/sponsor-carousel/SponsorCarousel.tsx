// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";

// import styles from "./Carousel.module.css";

// // interface CarouselProps {
// //   components: React.ReactNode[]; // Array of components to display
// // }

// const Carousel: React.FC<CarouselProps> = ({ components }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={20}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 5000 }}
//       className={styles.carousel}
//     >
//       {components.map((Component, index) => (
//         <SwiperSlide key={index} className={styles.slide}>
//           {Component}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import 'swiper/css';

import styles from "./SimpleSwiper.module.css";

const SimpleSwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide}>
        <div>Slide 1: Welcome to the event!</div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div>Slide 2: Enjoy the dinner and awards!</div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div>Slide 3: Stay tuned for exciting activities!</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SimpleSwiper;
