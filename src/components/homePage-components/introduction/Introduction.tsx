import React from "react";
import Typography from "../../typography/Typography";
import img from "../../../images/dinner2.jpg"
import img2 from "../../../images/award2.jpg"
import img3 from "../../../images/rename1.jpg"
import img4 from "../../../images/rename2.jpg"

const IntroSection: React.FC = () => {
  return (
    <section className="w-[100%] flex justify-between items-center pl-[40px] pr-[40px] mt-[100px]">

      <div className="w-[60%] flex flex-col">
        <Typography variant="h2">
          You're invited to an Evening of Elegance and Celebration
        </Typography>
        <div className="mt-[20px]">
        <Typography variant="body">
          Join us for a night to remember, where elegance meets excitement. The
          [Event Name] Dinner & Awards Night offers a luxurious atmosphere, a
          gourmet dining experience, and the opportunity to network with
          industry leaders. Highlights include live performances, inspiring
          guest speakers, and the presentation of awards honoring outstanding
          achievements. Don’t miss the chance to enjoy an unforgettable evening
          among peers and friends.
        </Typography>
        </div>
      </div>

      <div className="w-[37%] flex flex-wrap justify-between">
        <div className="h-[200px] w-[48%] mb-[15px] rounded-[15px] overflow-hidden">
          <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[200px] w-[48%] mb-[15px] rounded-[15px] overflow-hidden">
          <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[200px] w-[48%] rounded-[15px] overflow-hidden">
          <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[200px] w-[48%] rounded-[15px] overflow-hidden">
         <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
      </div>
      
    </section>
  );
};

export default IntroSection;
