import React from "react";
import Typography from "../../typography/Typography";
import styles from "./WhatToExpect.module.css";
import img from "../../../images/dinner.jpg"
import img2 from "../../../images/award.gif"
import img3 from "../../../images/networking.jpg"
import img4 from "../../../images/entertainment.jpg"

const WhatToExpect: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <Typography variant="h3">What to Expect at the Event</Typography>
        {/* <Typography variant="h6">Variety of benefits are.</Typography> */}
      </div>

      <div className="w-[100%] mt-[50px] flex justify-between flex-wrap">
        <div className="h-[350px] w-[300px] text-[#fff] rounded-[5px] flex-col flex items-center overflow-hidden m-[10px] bg-[#0C8F54]">
          <img src={img} alt="img" 
            className="object-cover h-[210px] w-[100%] rounded-tl-[5px] rounded-tr-[5px] transition-transform duration-350 hover:scale-110"
          />
          <h3 className="mt-[15px] font-[700] text-[18px]">Exclusive Dinner</h3>
          <p className="mt-[10px] text-[14px] w-[85%]">Indulge in a gourmet dining experience curated by top chefs,
          designed to delight your senses.</p>
        </div>
        <div className="h-[350px] w-[300px] text-[#fff] rounded-[5px] flex-col flex items-center overflow-hidden m-[10px] bg-[#d8b300]">
          <img src={img2} alt="img" 
            className="h-[210px] bg-[#000] w-[100%] rounded-tl-[5px] rounded-tr-[5px] transition-transform duration-350 hover:scale-110"
          />
          <h3 className="mt-[15px] font-[700] text-[18px]">Award Ceremony</h3>
          <p className="mt-[10px] text-[14px] w-[85%]">Celebrate excellence as we honor standout individuals and
          organizations in various fields.</p>
        </div>
        <div className="h-[350px] w-[300px] text-[#fff] rounded-[5px] flex-col flex items-center overflow-hidden m-[10px] bg-[#0C8F54]">
          <img src={img3} alt="img" 
            className="object-cover h-[210px] w-[100%] rounded-tl-[5px] rounded-tr-[5px] transition-transform duration-350 hover:scale-110"
          />
          <h3 className="mt-[15px] font-[700] text-[18px]">Business Networking</h3>
          <p className="mt-[10px] text-[14px] w-[85%]">Connect with industry leaders and like-minded professionals to
          expand your network.</p>
        </div>
        <div className="h-[350px] w-[300px] text-[#fff] rounded-[5px] flex-col flex items-center overflow-hidden m-[10px] bg-[#d8b300]">
          <img src={img4} alt="img" 
            className="object-cover h-[210px] w-[100%] rounded-tl-[5px] rounded-tr-[5px] transition-transform duration-350 hover:scale-110"
          />
          <h3 className="mt-[15px] font-[700] text-[18px]">Entertainment</h3>
          <p className="mt-[10px] text-[14px] w-[85%]">Indulge in a gourmet dining experience curated by top chefs,
          designed to delight your senses.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
