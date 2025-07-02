"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { MdKeyboardBackspace, MdVideocam, MdImage } from "react-icons/md"
import LoadingSpinner from "../loading/LoadingSpinner"

// Video imports
import keeperVideo from "../../assets/keeper.mp4"
import DefenderVideo from "../../assets/defender.mp4"
import MidfielderVideo from "../../assets/midfielder.mp4"
import AttackerVideo from "../../assets/attacker.mp4"
import BestdressedmaleVideo from "../../assets/bestdressedmale.mp4"
import BestdressedfemaleVideo from "../../assets/bestdressedfemale.mp4"
import ActivewelfareVideeo from "../../assets/activewelfare.mp4"
import EnergeticwelfareVideo from "../../assets/energeticwelfare.mp4"
import FunnywelfareVideo from "../../assets/funnywelfare.mp4"
import EnjoyablemonthVideo from "../../assets/enjoyablemonth.mp4"
import WhatsappPersonVideo from "../../assets/whatsappperson.mp4"
import PrayerfulpersonVideo from "../../assets/prayerfulperson.mp4"
import InfluentialpersonVideo from "../../assets/influentialperson.mp4"
import SocialpersonVideo from "../../assets/socialperson.mp4"
import FunnyindividualVideo from "../../assets/funnyindividual.mp4"
import Quietpersonvideo from "../../assets/quietperson.mp4"
import OutspokenpersonVideo from "../../assets/outspokenperson.mp4"
import ActivepersonVideo from "../../assets/activeperson.mp4"

interface Category {
  _id: string
  name: string
  contestants: Array<{ _id: string; name: string; [key: string]: unknown }>
}

interface BackgroundMedia {
  type: "image" | "video"
  url: string
}

// Function to detect iOS
const isIOS = (): boolean => {
  if (typeof window === "undefined") return false

  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod|macintosh/.test(userAgent) && "ontouchend" in document
}

// Function to get a background media (image or video) based on category
const getCategoryBackground = (category: Category): BackgroundMedia => {
  // Direct mapping of category names to videos
  // This provides a more precise mapping for specific categories
  const categoryVideoMap: Record<string, string> = {
    // Football positions
    goalkeeper: keeperVideo,
    "goal keeper": keeperVideo,
    keeper: keeperVideo,
    defender: DefenderVideo,
    defense: DefenderVideo,
    midfielder: MidfielderVideo,
    midfield: MidfielderVideo,
    attacker: AttackerVideo,
    striker: AttackerVideo,
    forward: AttackerVideo,

    // Fashion categories
    "best dressed male": BestdressedmaleVideo,
    "best dressed man": BestdressedmaleVideo,
    "best dressed men": BestdressedmaleVideo,
    "best dressed boy": BestdressedmaleVideo,
    "best dressed female": BestdressedfemaleVideo,
    "best dressed woman": BestdressedfemaleVideo,
    "best dressed women": BestdressedfemaleVideo,
    "best dressed girl": BestdressedfemaleVideo,

    // Welfare categories
    "active welfare": ActivewelfareVideeo,
    "active welfare person": ActivewelfareVideeo,
    "energetic welfare": EnergeticwelfareVideo,
    "energetic welfare person": EnergeticwelfareVideo,
    "funny welfare": FunnywelfareVideo,
    "funny welfare person": FunnywelfareVideo,

    // Other categories
    "enjoyable month": EnjoyablemonthVideo,
    "most enjoyable month": EnjoyablemonthVideo,
    "whatsapp person": WhatsappPersonVideo,
    "best whatsapp person": WhatsappPersonVideo,
    "most active on whatsapp": WhatsappPersonVideo,
    "prayerful person": PrayerfulpersonVideo,
    "most prayerful person": PrayerfulpersonVideo,
    "most prayerful": PrayerfulpersonVideo,

    // New categories
    "influential person": InfluentialpersonVideo,
    "most influential person": InfluentialpersonVideo,
    "most influential": InfluentialpersonVideo,
    "influential individual": InfluentialpersonVideo,

    "social person": SocialpersonVideo,
    "most social person": SocialpersonVideo,
    "most social": SocialpersonVideo,
    "social individual": SocialpersonVideo,

    "funny individual": FunnyindividualVideo,
    "funny person": FunnyindividualVideo,
    "funniest person": FunnyindividualVideo,
    "most funny": FunnyindividualVideo,

    "quiet person": Quietpersonvideo,
    "quietest person": Quietpersonvideo,
    "most quiet": Quietpersonvideo,
    "quiet individual": Quietpersonvideo,

    "outspoken person": OutspokenpersonVideo,
    "most outspoken person": OutspokenpersonVideo,
    "most outspoken": OutspokenpersonVideo,
    "outspoken individual": OutspokenpersonVideo,

    "active person": ActivepersonVideo,
    "most active person": ActivepersonVideo,
    "most active": ActivepersonVideo,
    "active individual": ActivepersonVideo,
  }

  // Check for exact matches first (case insensitive)
  const exactMatch = Object.keys(categoryVideoMap).find((key) => category.name.toLowerCase() === key.toLowerCase())

  if (exactMatch) {
    return { type: "video", url: categoryVideoMap[exactMatch] }
  }

  // If no exact match, check for partial matches
  for (const [key, video] of Object.entries(categoryVideoMap)) {
    if (category.name.toLowerCase().includes(key.toLowerCase())) {
      return { type: "video", url: video }
    }
  }

  // Fallback logic for categories that don't have a direct mapping
  // Define which categories should have video backgrounds
  const videoCategories = [
    // Sports/football related
    "sports",
    "football",
    "soccer",
    "player",

    // Performance related
    "talent",
    "performance",
    "dance",
    "music",

    // Fashion/appearance related
    "dressed",
    "fashion",
    "style",
    "outfit",
    "appearance",

    // Welfare related
    "welfare",
    "active",
    "energetic",
    "funny",

    // Communication related
    "whatsapp",
    "chat",
    "message",

    // Time related
    "month",
    "enjoyable",

    // Religious related
    "prayer",
    "prayerful",
    "religious",

    // Personality related
    "influential",
    "social",
    "quiet",
    "outspoken",
    "active",
  ]

  // Check if this category should have a video background
  const shouldUseVideo = videoCategories.some((keyword) => category.name.toLowerCase().includes(keyword))

  if (shouldUseVideo) {
    // Video backgrounds array for fallback
    const videoBackgrounds = [
      keeperVideo,
      DefenderVideo,
      MidfielderVideo,
      AttackerVideo,
      BestdressedmaleVideo,
      BestdressedfemaleVideo,
      ActivewelfareVideeo,
      EnergeticwelfareVideo,
      FunnywelfareVideo,
      EnjoyablemonthVideo,
      WhatsappPersonVideo,
      PrayerfulpersonVideo,
      InfluentialpersonVideo,
      SocialpersonVideo,
      FunnyindividualVideo,
      Quietpersonvideo,
      OutspokenpersonVideo,
      ActivepersonVideo,
    ]

    // For influential person categories
    if (category.name.toLowerCase().includes("influential")) {
      return { type: "video", url: InfluentialpersonVideo }
    }

    // For social person categories
    if (category.name.toLowerCase().includes("social")) {
      return { type: "video", url: SocialpersonVideo }
    }

    // For funny individual categories (not welfare related)
    if (category.name.toLowerCase().includes("funny") && !category.name.toLowerCase().includes("welfare")) {
      return { type: "video", url: FunnyindividualVideo }
    }

    // For quiet person categories
    if (category.name.toLowerCase().includes("quiet")) {
      return { type: "video", url: Quietpersonvideo }
    }

    // For outspoken person categories
    if (category.name.toLowerCase().includes("outspoken")) {
      return { type: "video", url: OutspokenpersonVideo }
    }

    // For active person categories (not welfare related)
    if (
      category.name.toLowerCase().includes("active") &&
      !category.name.toLowerCase().includes("welfare") &&
      !category.name.toLowerCase().includes("whatsapp")
    ) {
      return { type: "video", url: ActivepersonVideo }
    }

    // For general sports/football categories without specific position
    if (
      category.name.toLowerCase().includes("sports") ||
      category.name.toLowerCase().includes("football") ||
      category.name.toLowerCase().includes("soccer") ||
      category.name.toLowerCase().includes("player")
    ) {
      // Use a deterministic approach to ensure consistent assignment
      const sportIndex = category.name.length % 4

      if (sportIndex === 0) return { type: "video", url: keeperVideo }
      if (sportIndex === 1) return { type: "video", url: DefenderVideo }
      if (sportIndex === 2) return { type: "video", url: MidfielderVideo }
      return { type: "video", url: AttackerVideo }
    }

    // For general fashion/appearance categories without specific gender
    if (
      category.name.toLowerCase().includes("dressed") ||
      category.name.toLowerCase().includes("fashion") ||
      category.name.toLowerCase().includes("style") ||
      category.name.toLowerCase().includes("outfit") ||
      category.name.toLowerCase().includes("appearance")
    ) {
      // Check if we can determine gender from the category name
      if (
        category.name.toLowerCase().includes("female") ||
        category.name.toLowerCase().includes("girl") ||
        category.name.toLowerCase().includes("woman") ||
        category.name.toLowerCase().includes("women")
      ) {
        return { type: "video", url: BestdressedfemaleVideo }
      } else if (
        category.name.toLowerCase().includes("male") ||
        category.name.toLowerCase().includes("boy") ||
        category.name.toLowerCase().includes("man") ||
        category.name.toLowerCase().includes("men")
      ) {
        return { type: "video", url: BestdressedmaleVideo }
      }

      // If gender is not specified in the name, alternate based on ID
      const fashionIndex = Number.parseInt(category._id.substring(0, 2), 16) % 2
      return { type: "video", url: fashionIndex === 1 ? BestdressedfemaleVideo : BestdressedmaleVideo }
    }

    // For other video categories, use the array as before
    const index = Number.parseInt(category._id.substring(0, 8), 16) % videoBackgrounds.length
    return { type: "video", url: videoBackgrounds[index] }
  } else {
    // Image backgrounds (unchanged)
    const imageBackgrounds = [
      "/images/categories/academic.jpg",
      "/images/categories/leadership.jpg",
      "/images/categories/community.jpg",
      "/images/categories/innovation.jpg",
      "/images/categories/arts.jpg",
    ]

    // Use the category ID to determine which image to use
    const index = Number.parseInt(category._id.substring(0, 8), 16) % imageBackgrounds.length
    return { type: "image", url: imageBackgrounds[index] }
  }
}

// Component to render either image or video background
const BackgroundMedia: React.FC<{ media: BackgroundMedia; categoryName: string }> = ({ media, categoryName }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (media.type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }, [media])

  if (media.type === "video") {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={media.url}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // playsinline="true"
          webkit-playsinline="true"
          aria-label={`${categoryName} category background video`}
        />
      </div>
    )
  }

  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${media.url})` }}
      aria-label={`${categoryName} category background image`}
    />
  )
}

const CategoryList: React.FC = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isIOSDevice, setIsIOSDevice] = useState<boolean>(false)

  useEffect(() => {
    // Check if the device is iOS
    setIsIOSDevice(isIOS())
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://our-lady-database.onrender.com/api/getAllCategory")
      if (!response.ok) {
        throw new Error("Failed to fetch categories")
      }
      const data: Category[] = await response.json()
      setCategories(data)
      setError(null)
    } catch (error) {
      console.error("Error fetching categories:", error)
      setError("Failed to load categories. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Voting Categories</h1>
          <p className="text-gray-600">Select a category to vote in</p>
        </div>
        <motion.button
          onClick={() => navigate("/")}
          className="flex gap-2 items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MdKeyboardBackspace size={20} /> Back
        </motion.button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">{error}</div>
      )}

      {/* Add a style tag to force single column on iOS devices */}
      {isIOSDevice && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @media screen and (min-width: 640px) {
              .ios-grid-override {
                grid-template-columns: 1fr !important;
              }
            }
          `,
          }}
        />
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${isIOSDevice ? "ios-grid-override" : ""}`}
      >
        {categories.map((category, index) => {
          const backgroundMedia = getCategoryBackground(category)

          return (
            <motion.div
              key={category._id}
              className="group rounded-xl shadow-md overflow-hidden h-48 transition-all duration-300 hover:shadow-lg relative touch-manipulation w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/vote/contestantslist/${category._id}`)}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <BackgroundMedia media={backgroundMedia} categoryName={category.name} />

              <div className="absolute inset-0 w-full h-full p-6 cursor-pointer bg-gradient-to-t from-black/70 to-black/30 hover:from-black/80 hover:to-black/40 transition-all duration-300 flex flex-col justify-end">
                <div className="flex items-center mb-1">
                  {backgroundMedia.type === "video" ? (
                    <MdVideocam className="text-green-400 mr-2 flex-shrink-0" size={18} />
                  ) : (
                    <MdImage className="text-green-400 mr-2 flex-shrink-0" size={18} />
                  )}
                  <h2 className="text-xl sm:text-2xl font-bold text-white truncate">{category.name}</h2>
                </div>
                <p className="text-gray-200">{category.contestants.length} contestants</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryList
