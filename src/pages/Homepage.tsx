import EventCallToAction from "../components/homePage-components/event-call-action/EventCallToAction";
import EventWeekSection from "../components/homePage-components/event-week/EventWeekSection";
import Hero from "../components/homePage-components/hero-section/Hero";
import IntroSection from "../components/homePage-components/introduction/Introduction";
// import ShopWithSponsors from "../components/homePage-components/shop-with-sponsor/ShopWithSponsor";
import WhatToExpect from "../components/homePage-components/what-to-expect/WhatToExpect";
import Typography from "../components/typography/Typography";

import AdvertCarousel from "../components/advertCarousel/AdvertCarousel";
import img from "../images/gif.gif"
import Gallery from "./Gallery";

const Homepage = () => {
  return (
    <div className="relative">
      <Hero />
      <WhatToExpect />
      <IntroSection />
      <Gallery />
      <EventCallToAction />
      {/* <ShopWithSponsors /> */}
      

      <div className="mt-[100px]">
        <Typography variant="h2" className="text-center mt-8">
          Business Advert
        </Typography>
        <AdvertCarousel isReverse={true} scrollSpeed={40} />
        <AdvertCarousel isReverse={false} scrollSpeed={10} />
      </div>

       <EventWeekSection />

      <img src={img} alt="img" className="fixed bottom-[10px] right-[5px] h-[100px] mr-[-10px]"/>
    </div>
  );
};

export default Homepage;
