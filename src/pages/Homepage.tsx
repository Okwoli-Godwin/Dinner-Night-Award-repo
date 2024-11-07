import EventCallToAction from "../components/homePage-components/event-call-action/EventCallToAction";
import Hero from "../components/homePage-components/hero-section/Hero";
import IntroSection from "../components/homePage-components/introduction/Introduction";
import ShopWithSponsors from "../components/homePage-components/shop-with-sponsor/ShopWithSponsor";
import WhatToExpect from "../components/homePage-components/what-to-expect/WhatToExpect";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatToExpect />
      <IntroSection />
      <ShopWithSponsors />
      <EventCallToAction />
    </>
  );
};

export default Homepage;
