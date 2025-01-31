import "./AdvertCarousel.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Advert1 from "../../images/food1.png";
import Advert2 from "../../images/food2.png";
import Advert3 from "../../images/cake.png";
import Advert4 from "../../images/sharwama.png";
import Modal from "../modal/Modal";

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
  isReverse: boolean;
  scrollSpeed: number;
}

export default function AdvertCarousel({
  isReverse,
  scrollSpeed,
}: AdvertCarouselProps) {
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
      image: Advert3,
      name: "Urban Escapes",
      buttonLabel: "Experience",
      address: "29, Oyegunle",
      location: "Wilmer",
      website: "www.babatundesegun.com",
    },
    {
      id: 4,
      image: Advert4,
      name: "Urban Escapes",
      buttonLabel: "Experience",
      address: "29, Oyegunle",
      location: "Wilmer",
      website: "www.babatundesegun.com",
    },
  ];
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" main__container">
      <section className="enable-animation">
        <div className={`marquee ${isReverse && "marquee--reverse"}`}>
          <ul
            className="marquee__content"
            style={{
              animation: `scroll ${scrollSpeed}s linear infinite`,
            }}
          >
            {cards.map((card) => (
              <div key={card.id} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <AnimatePresence>
                    <motion.div
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

          <ul
            style={{
              animation: `scroll ${scrollSpeed}s linear infinite`,
            }}
            className="marquee__content"
          >
            {cards.map((card) => (
              <div key={card.id} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <AnimatePresence>
                    <motion.div
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

          {showModal && (
            <Modal cards={selectedCard} onClose={() => setShowModal(false)} />
          )}
        </div>
      </section>
    </div>
  );
}
