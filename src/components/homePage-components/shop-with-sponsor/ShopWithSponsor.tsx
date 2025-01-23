"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import Typography from "../../typography/Typography"
import Button from "../../button/Button"

// Import Swiper styles

// Assuming you have multiple sponsor images
import SponsorImage1 from "../../../images/skincare.jpg"
import SponsorImage2 from "../../../images/fashion.jpg"
import SponsorImage3 from "../../../images/solar.jpg"

const sponsors = [
  {
    image: SponsorImage1,
    name: "Eco-Friendly Skincare Brand",
    slogan: "Nature's Care in Every Drop.",
    description:
      "At EFSB, we harness the power of nature to create skincare products that are as kind to your skin as they are to the environment. Our commitment to sustainable, toxin-free ingredients is at the heart of every product we make.",
  },
  {
    image: SponsorImage2,
    name: "Sustainable Fashion Co.",
    slogan: "Style Meets Sustainability",
    description:
      "We believe that fashion should not come at the cost of our planet. Our clothing line is made from recycled materials and ethically sourced fabrics, proving that you can look good while doing good.",
  },
  {
    image: SponsorImage3,
    name: "Green Energy Solutions",
    slogan: "Powering a Cleaner Future",
    description:
      "Our innovative solar and wind energy solutions are designed to help homeowners and businesses reduce their carbon footprint while saving on energy costs. Join us in creating a more sustainable world, one kilowatt at a time.",
  },
]

const ShopWithSponsors: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Typography variant="h3" className="text-primary mb-2">
          Sponsored Businesses
        </Typography>
        <Typography variant="h2" className="text-4xl font-bold">
          Shop with Our Sponsors
        </Typography>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 gap-8 items-center p-8">
              <div className="relative h-[400px]">
                <img
                  src={sponsor.image || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Typography variant="h4" className="text-primary mb-2">
                  {sponsor.name}
                </Typography>
                <Typography variant="h5" className="text-xl font-semibold mb-4">
                  {sponsor.slogan}
                </Typography>
                <Typography variant="body" className="mb-6">
                  {sponsor.description}
                </Typography>
                <Button variant="special" text="See more"></Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ShopWithSponsors

