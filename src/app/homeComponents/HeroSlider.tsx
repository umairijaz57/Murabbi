"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { BsArrowRightShort, BsPlay, BsPause, BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { Repeat } from "lucide-react"

// Types
interface SlideImages {
  main: string
  top: string
  bottom: string
}

interface SlideData {
  title: string
  subtitle: string
  highlight: string
}

// Main slider images
const images: string[] = [
  "/heroslider/hero_1",
  "/heroslider/hero_2",
  "/heroslider/hero_3",
  "/heroslider/hero_4",
]

// Different images for staggered layout
const staggeredImages: SlideImages[] = [
  {
    main: "/heroslider/hero_1.jpg",
    top: "/heroslider/hero_2.jpg",
    bottom: "/heroslider/hero_3.jpg",
  },
  {
    main: "/heroslider/hero_2.jpg",
    top: "/heroslider/hero_4.jpg",
    bottom: "/heroslider/hero_1.jpg",
  },
  {
    main: "/heroslider/hero_4.jpg",
    top: "/heroslider/hero_3.jpg",
    bottom: "/heroslider/hero_2.jpg",
  },
  {
    main: "/heroslider/hero_3.jpg",
    top: "/heroslider/hero_1.jpg",
    bottom: "/heroslider/hero_4.jpg",
  },
]

const slideData: SlideData[] = [
  {
    title: "Advanced Learning",
    subtitle: "Next-gen education technology",
    highlight: "AI-Powered",
  },
  {
    title: "Expert Instructors",
    subtitle: "Industry professionals guide you",
    highlight: "World-Class",
  },
  {
    title: "Interactive Sessions",
    subtitle: "Engaging and dynamic learning",
    highlight: "Live Classes",
  },
  {
    title: "Career Growth",
    subtitle: "Skills that advance your future",
    highlight: "Job-Ready",
  },
]

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
}

const staggerTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const letterVariants = {
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
      stiffness: 120,
      damping: 12,
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
      delay: 0.4,
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
      delay: 0.6,
    },
  },
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: images.length,
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

  const AnimatedText = ({ text, className, shouldAnimate = true }: { text: string; className?: string; shouldAnimate?: boolean }) => {
    return (
      <motion.div 
        variants={staggerTextVariants} 
        initial={shouldAnimate ? "hidden" : "visible"} 
        animate="visible" 
        className={className}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

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
          <motion.div 
            className="max-w-xl mx-auto lg:mx-0 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left" 
            variants={containerVariants} 
            initial={!hasAnimated ? "hidden" : "visible"} 
            animate="visible"
          >
            {/* Badge */}
            <motion.div className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-full transition-all duration-300 shadow-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 animate-ping" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide">EDUCATION SOLUTION</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="overflow-hidden">
                <motion.h1
                  variants={headingVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900"
                >
                  <AnimatedText text="Learn, Grow &" className="block" shouldAnimate={!hasAnimated} />
                  <motion.span
                    variants={headingVariants}
                    className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-pink-600 bg-clip-text"
                  >
                    <AnimatedText text="Succeed" shouldAnimate={!hasAnimated} />
                  </motion.span>
                </motion.h1>
              </div>
              <motion.div variants={fadeInVariants} className="space-y-2">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  with <span className="text-blue-600">Murabbi</span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p variants={fadeInVariants} className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4 sm:px-0">
              Are you ready to take your career to the next level? Look no further than Murabbi, where our
              state-of-the-art training solutions will revolutionize the way you learn.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-0">
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
        </div>

        {/* Image Slider */}
        <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-full">
          <div className="relative h-full w-full lg:rounded-l-3xl overflow-hidden">
            <div ref={sliderRef} className="keen-slider h-full w-full">
              {staggeredImages.map((slideImages, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out"
                  style={{
                    opacity: currentSlide === idx ? 1 : 0,
                    zIndex: currentSlide === idx ? 1 : 0,
                  }}
                >
                  {/* Main image - responsive sizing */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 z-30">
                    <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200/60 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-110 hover:-rotate-1">
                      <Image
                        src={slideImages.main || "/placeholder.svg"}
                        alt={slideData[idx].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-125"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Top right image - responsive positioning */}
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-16 md:right-24 w-24 h-18 sm:w-32 sm:h-24 md:w-48 md:h-36 z-20 transform -translate-y-2 sm:-translate-y-4 rotate-3 sm:rotate-6 hover:rotate-6 sm:hover:rotate-12 transition-all duration-500">
                    <div className="group relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200/60 shadow-md hover:shadow-purple-500/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 sm:hover:-translate-y-4 hover:rotate-3">
                      <Image
                        src={slideImages.top || "/placeholder.svg"}
                        alt={`${slideData[idx].title} - Top`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-120"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Bottom left image - responsive positioning */}
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-20 md:left-16 w-28 h-20 sm:w-36 sm:h-24 md:w-52 md:h-32 z-20 transform translate-y-1 sm:translate-y-2 -rotate-2 sm:-rotate-3 hover:-rotate-3 sm:hover:-rotate-6 transition-all duration-500">
                    <div className="group relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200/60 shadow-md hover:shadow-blue-500/20 transition-all duration-500 hover:scale-110 hover:translate-y-2 sm:hover:translate-y-4 hover:skew-x-2">
                      <Image
                        src={slideImages.bottom || "/placeholder.svg"}
                        alt={`${slideData[idx].title} - Bottom`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-120"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-purple-500/10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows - responsive sizing */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 flex justify-between z-40">
              <button
                onClick={prevSlide}
                className="group w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50/80 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <BsChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="group w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50/80 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <BsChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Bottom controls - responsive sizing */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 z-40">
              <div className="bg-white/40 backdrop-blur-sm border border-gray-200/60 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 rounded-full transition-all duration-500"
                      style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={togglePlayPause}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? <BsPause size={12} className="sm:w-4 sm:h-4" /> : <BsPlay size={12} className="sm:w-4 sm:h-4" />}
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