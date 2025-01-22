import EventCallToAction from "../components/homePage-components/event-call-action/EventCallToAction";
import EventWeekSection from "../components/homePage-components/event-week/EventWeekSection";
import Hero from "../components/homePage-components/hero-section/Hero";
import IntroSection from "../components/homePage-components/introduction/Introduction";
import ShopWithSponsors from "../components/homePage-components/shop-with-sponsor/ShopWithSponsor";
import WhatToExpect from "../components/homePage-components/what-to-expect/WhatToExpect";
import Typography from "../components/typography/Typography";

import AdvertCarousel from "../components/advertCarousel/AdvertCarousel";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatToExpect />
      <IntroSection />
      <ShopWithSponsors />
      <EventCallToAction />

      <>
        <Typography variant="h3" className="text-center mt-8">
          Business Advert
        </Typography>
        <AdvertCarousel isReverse={true} scrollSpeed={40} />
        <AdvertCarousel isReverse={false} scrollSpeed={10} />
      </>

      <EventWeekSection />
    </>
  );
};

export default Homepage;
