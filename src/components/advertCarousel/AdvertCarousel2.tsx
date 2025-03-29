import "./AdvertCarousel.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Advert1 from "../../images/advert1.jpeg";
import Advert2 from "../../images/advert2.jpeg";
// import Modal from "../modal/Modal";

export interface Card {
  id: number;
  image: string;
  name: string;
  buttonLabel: string;
  address: string;
  location: string;
  website: string;
  businessDescription?: string;
  socialMediaLink?: string;
  socialMedia?: [];
}

interface AdvertCarouselProps {
  isReverse: boolean; // Define the prop type here
}

export default function AdvertCarousel2({ isReverse }: AdvertCarouselProps) {
  const cards: Card[] = [
    {
      id: 1,
      image: Advert1,
      name: "Adventure Awaits",
      buttonLabel: "Explore",
      address: "29, Oyegunle",
      location: "Wilmer",
      website: "www.babatundesegun.com",
      businessDescription: "I build website, web application",
    },
    {
      id: 2,
      image: Advert2,
      name: "Serene Beauty",
      buttonLabel: "Discover",
      address: "29, Oyegunle",
      location: "Wilmer",
      website: "www.babatundesegun.com",
    },
    {
      id: 3,
      image:
        "data:image/jpeg;base64,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",
      name: "Urban Escapes",
      buttonLabel: "Experience",
      address: "29, Oyegunle",
      location: "Wilmer",
      website: "www.babatundesegun.com",
    },
  ];
  // const [reverseAnimation, setReverseAnimation] = useState(false);
  // const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [
    // selectedCard, 
    ,setSelectedCard] = useState<Card | null>(null);
  const [
    // showModal, 
    ,setShowModal] = useState(false);

  // const handleDoubleClick = () => {
  //   setReverseAnimation((prev) => !prev);
  // };

  return (
    <div className=" main__container">
      <section className="enable-animation">
        <div className={`marquee ${isReverse && "marquee--reverse"}`}>
          <ul className="marquee__content2">
            {cards.map((card) => (
              <div key={card.id} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: 40, opacity: 0.5 }}
                      exit={{ y: 40, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ margin: "0px 200px 0px 0px " }}
                      className="marquee__item--content--heading"
                    >
                      <h3 className="marquee__item--content--heading--details ">
                        {card.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <motion.button
                    // initial={{ y: 20 }}
                    // exit={{ y: 20 }}
                    // animate={{ y: 0 }}
                    // transition={{ duration: 40, type: "spring" }}
                    onClick={() => {
                      setSelectedCard(card);
                      setShowModal(true);
                    }}
                    className="marquee__item--content--button marquee__item--content--button--display"
                  >
                    {card.buttonLabel}
                  </motion.button>
                </div>
              </div>
            ))}
          </ul>

          {/* Second items */}
          <ul className="marquee__content2">
            {cards.map((card) => (
              <div key={card.id} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: 40, opacity: 0.5 }}
                      exit={{ y: 40, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ margin: "0px 200px 0px 0px " }}
                      className="marquee__item--content--heading"
                    >
                      <h3 className="marquee__item--content--heading--details ">
                        {card.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <motion.button
                    // initial={{ y: 20 }}
                    // exit={{ y: 20 }}
                    // animate={{ y: 0 }}
                    // transition={{ duration: 40, type: "spring" }}
                    onClick={() => {
                      setSelectedCard(card);
                      setShowModal(true);
                    }}
                    className="marquee__item--content--button marquee__item--content--button--display"
                  >
                    {card.buttonLabel}
                  </motion.button>
                </div>
              </div>
            ))}
          </ul>

          {/* {showModal && (
            <Modal
             cards={selectedCard}
              onClose={() => setShowModal(false)} />
          )} */}
        </div>
      </section>
    </div>
  );
}
