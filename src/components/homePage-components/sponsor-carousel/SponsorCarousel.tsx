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
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
// import 'swiper/css';
import ShopWithSponsors from "../shop-with-sponsor/ShopWithSponsor";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import styles from "./SimpleSwiper.module.css";

const SponsorCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, FreeMode, Autoplay]}
      spaceBetween={30}
      freeMode={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      // pagination={{ clickable: true }}
      // autoplay={true}
      // className={styles.swiper}
    >
      <SwiperSlide>
        <ShopWithSponsors />
      </SwiperSlide>
      <SwiperSlide>
        <ShopWithSponsors />
      </SwiperSlide>
      <SwiperSlide>
        <>
          <ShopWithSponsors />
        </>
      </SwiperSlide>
    </Swiper>
  );
};

export default SponsorCarousel;
