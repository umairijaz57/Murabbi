"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { BsArrowRightShort, BsPlay, BsPause, BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"

// Types
interface SlideData {
  title: string
  subtitle: string
  description: string
  badge: string
  images: string[] // Array of 3 images for each heading
}

// Slide data with 3 images per heading
const slideData: SlideData[] = [
  {
    title: "Welcoming Young Minds from China",
    subtitle: "Learning, Laughing & Growing Together at Murabbi",
    description:
      "This summer, we welcomed amazing students from China to our Murabbi family. Their journey has been full of joy, exploration, and cross-cultural bonding. Together, we've built memories that go beyond language — proving that friendship and learning have no borders.",
    badge: "INNOVATION LEADER",
    images: ["/heroslider/heroS2.jpg", "/heroslider/heroS5.jpg", "/heroslider/heroS2.jpeg"],
  },
  {
    title: "Murabbi Summer Camp",
    subtitle: "Big Dreams. Bright Minds. Beautiful Moments.",
    description:
      "This summer at Murabbi, young minds came together to explore, create, and grow. From hands-on STEAM activities to teamwork and fun-filled challenges, every day was a new adventure. We believe in building confident, curious learners — and this camp was a joyful step in that journey.",
    badge: "Summer Camp",
    images: ["/heroslider/heroS3.jpg", "/heroslider/heroS1.jpg", "/heroslider/hero10.jpg"],
  },
  {
    title: "Learn, Grow & Succeed",
    subtitle: "with Murabbi",
    description:
      "Are you ready to take your career to the next level? Look no further than Murabbi, where our state-of-the-art training solutions will revolutionize the way you learn.",
    badge: "EDUCATION SOLUTION",
    images: ["/heroslider/hero_3.jpg", "/heroslider/hero4.jpg", "/heroslider/hero2.jpg"],
  },
]

// Create flat array of all images for slider
const allImages: string[] = slideData.flatMap((slide) => slide.images)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const slideInVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

const headingVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    scale: 0.8,
    transition: {
      duration: 0.4,
    },
  },
}

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
    },
  },
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
}

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
    },
  },
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: allImages.length, // Total 9 slides (3 headings × 3 images each)
    loop: true,
    renderMode: "performance",
    drag: false,
    created() {
      setCurrentSlide(0)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }, [hasAnimated])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current?.next()
      }, 4000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [instanceRef, isPlaying])

  const goToSlide = useCallback(
    (index: number) => {
      instanceRef.current?.moveToIdx(index)
    },
    [instanceRef],
  )

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const nextSlide = useCallback(() => {
    instanceRef.current?.next()
  }, [instanceRef])

  const prevSlide = useCallback(() => {
    instanceRef.current?.prev()
  }, [instanceRef])

  // Calculate which heading to show based on current slide
  // Slides 0,1,2 = Heading 0; Slides 3,4,5 = Heading 1; Slides 6,7,8 = Heading 2
  const currentHeadingIndex = Math.floor(currentSlide / 3)
  const currentSlideData = slideData[currentHeadingIndex]
  const currentImageIndex = currentSlide % 3 // Which image within the current heading (0, 1, or 2)

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
        {/* Animated circles - responsive sizes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-blue-200/50 rounded-full animate-pulse" />
          <div
            className="absolute bottom-16 right-4 sm:bottom-32 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 border border-purple-200/50 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-2 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 border border-pink-200/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Main content - responsive layout */}
      <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-0">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-0 order-2 lg:order-1">
          <div className="max-w-xl mx-auto lg:mx-0 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeadingIndex} // Change key only when heading changes
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4 sm:space-y-6 lg:space-y-8"
              >
                {/* Badge */}
                <motion.div
                  variants={slideInVariants}
                  className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-full transition-all duration-300 shadow-sm"
                >
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 animate-ping" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide">
                    {currentSlideData.badge}
                  </span>
                </motion.div>

                {/* Heading */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="overflow-hidden">
                    <motion.h1
                      variants={headingVariants}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900"
                    >
                      <span className="block text-transparent bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text">
                        {currentSlideData.title}
                      </span>
                    </motion.h1>
                  </div>
                  <motion.div variants={fadeInVariants} className="space-y-2">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {currentSlideData.subtitle}
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  variants={fadeInVariants}
                  className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4 sm:px-0"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={buttonVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-0"
                >
                  <Link href="/aboutus" className="w-full sm:w-auto">
                    <motion.button
                      className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        Get Started Now
                        <BsArrowRightShort
                          size={20}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={togglePlayPause}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-blue-900 text-gray-700 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isPlaying ? <BsPause size={18} /> : <BsPlay size={18} />}
                    <span className="font-medium text-sm sm:text-base">{isPlaying ? "Pause" : "Play"} Tour</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-full p-4 sm:p-6 lg:p-8">
          <div className="relative h-full w-full lg:rounded-l-3xl overflow-hidden rounded-2xl shadow-xl">
            <div ref={sliderRef} className="keen-slider h-full w-full">
              {allImages.map((image, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out"
                  style={{
                    opacity: currentSlide === idx ? 1 : 0,
                    zIndex: currentSlide === idx ? 1 : 0,
                  }}
                >
                  {/* Single Large Image with padding */}
                  <AnimatePresence mode="wait">
                    {currentSlide === idx && (
                      <motion.div
                        key={idx}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 w-full h-full p-3 sm:p-4 md:p-6"
                      >
                        <div className="group relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                          <Image
                            src={image || "/placeholder.svg?height=600&width=800"}
                            alt={`${currentSlideData.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={idx === 0}
                          />
                          {/* Gradient overlays */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Navigation arrows - adjusted positioning for new spacing */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 flex justify-between z-40">
              <button
                onClick={prevSlide}
                className="group w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50/80 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <BsChevronLeft
                  size={16}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300"
                />
              </button>
              <button
                onClick={nextSlide}
                className="group w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50/80 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <BsChevronRight
                  size={16}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Bottom controls - adjusted positioning */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 z-40">
              <div className="bg-white/40 backdrop-blur-sm border border-gray-200/60 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  {/* Progress bar showing current image within current heading */}
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 rounded-full transition-all duration-500"
                      style={{ width: `${((currentSlide + 1) / allImages.length) * 100}%` }}
                    />
                  </div>
                  {/* Heading indicator */}
                  <div className="flex gap-1">
                    {slideData.map((_, headingIdx) => (
                      <div
                        key={headingIdx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentHeadingIndex === headingIdx ? "bg-blue-600 scale-125" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={togglePlayPause}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <BsPause size={12} className="sm:w-4 sm:h-4" />
                    ) : (
                      <BsPlay size={12} className="sm:w-4 sm:h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
