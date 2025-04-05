import "./AdvertCarousel.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../modal/Modal";
import axios from "axios";
import BusinessAdvertCarousel from "../businessAdvertCarousel/BusinessAdvertSkeleton";
import toast from 'react-hot-toast';



interface Business {
  phoneNumber: number;
  email : string;
  image: any;
  id: number;
 url: string;
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
 
  const [selectedCard, setSelectedCard] = useState<Business | null>(null);
  const [businessDetails, setBusinessDetails] = useState<Business[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getAllBusinness =  async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://our-lady-database.onrender.com/api/getall')
        const {businesses} = response.data
       setBusinessDetails(businesses)
        
      } catch (err: any) {
        toast.error(`${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    getAllBusinness()
  }, [])

  return (
   
    <div className=" main__container">
      <section className="enable-animation">
        <div className={`marquee ${isReverse && "marquee--reverse"}`}>
        
      {loading ? (

        <BusinessAdvertCarousel/>
      ) :  (
        <>
          <ul
            className="marquee__content"
            style={{
              animation: `scroll ${scrollSpeed}s linear infinite`,
            }}
          >
            {businessDetails.map((business, index) => (
              <div key={index} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${business.image.url})` }}
                >
                  <AnimatePresence>
                    <motion.div
                      exit={{ y: 40, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ margin: "0px 200px 0px 0px " }}
                      className="marquee__item--content--heading"
                    >
                      <h3 className="marquee__item--content--heading--details ">
                        {business.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <motion.button
                    onClick={() => {
                      setSelectedCard(business);
                      setShowModal(true);
                    }}
                    className="marquee__item--content--button marquee__item--content--button--display"
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            ))}
          </ul>
          </>
       )}
      {loading ? (

        <BusinessAdvertCarousel/>
      ) :  (
        <>
          <ul
            className="marquee__content"
            style={{
              animation: `scroll ${scrollSpeed}s linear infinite`,
            }}
          >
            {businessDetails.map((business, index) => (
              <div key={index} className=" marquee__item">
                <div
                  className="marquee__item--content"
                  style={{ backgroundImage: `url(${business.image.url})` }}
                >
                  <AnimatePresence>
                    <motion.div
                      exit={{ y: 40, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ margin: "0px 200px 0px 0px " }}
                      className="marquee__item--content--heading"
                    >
                      <h3 className="marquee__item--content--heading--details ">
                        {business.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <motion.button
                    onClick={() => {
                      setSelectedCard(business);
                      setShowModal(true);
                    }}
                    className="marquee__item--content--button marquee__item--content--button--display"
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            ))}
          </ul>
          </>
       )}
          {showModal && (
            <Modal cards={selectedCard} onClose={() => setShowModal(false)} />
          )}
        </div>
      </section>
    </div>
  );
}
