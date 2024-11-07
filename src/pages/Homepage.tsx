import Hero from "../components/homePage-components/hero-section/Hero";
import IntroSection from "../components/homePage-components/introduction/Introduction";
import WhatToExpect from "../components/homePage-components/what-to-expect/WhatToExpect";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatToExpect />
      <IntroSection />
    </>
  );
};

export default Homepage;
