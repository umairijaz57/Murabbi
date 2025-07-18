"use client"

import { useEffect, useState, useRef } from "react"
import type React from "react"
import { CustomButton } from "./CustomBtn"

type CarouselSingleProps = {
  containerClass: string
  items: React.ReactNode[]
  nextButton?: React.ReactNode
  prevButton?: React.ReactNode
  autoScroll?: boolean
  delay?: number
  onIndexChange?: (index: number) => void
}

export const CarouselSingle: React.FC<CarouselSingleProps> = ({
  containerClass,
  items,
  autoScroll = false,
  delay = 3000,
  onIndexChange = () => {},
}) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isTabVisible, setIsTabVisible] = useState(true)
  const [isInViewport, setIsInViewport] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const previousIndexRef = useRef<number>(-1)

  // Handle tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden)
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Setup Intersection Observer for viewport detection
  useEffect(() => {
    if (!carouselRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsInViewport(entry.isIntersecting)
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -10% 0px", // Optional: adjust when to trigger
      }
    )

    observer.observe(carouselRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Function to find and control videos in the carousel
  const controlVideos = (currentIndex: number, forceRestart = false) => {
    if (!carouselRef.current) return
    const allVideos = carouselRef.current.querySelectorAll("video")

    allVideos.forEach((video) => {
      // Find which carousel item this video belongs to
      const videoItem = video.closest("[data-carousel-item]")
      const itemIndex = videoItem ? Number.parseInt(videoItem.getAttribute("data-carousel-item") || "0") : 0

      if (itemIndex === currentIndex && isTabVisible && isInViewport) {
        // Current item, tab is visible, and element is in viewport
        if (forceRestart) {
          // Restart video from beginning
          video.currentTime = 0
          video.play().catch((e) => console.log("Video play failed:", e))
        } else if (video.paused) {
          // Resume if paused but don't restart
          video.play().catch((e) => console.log("Video play failed:", e))
        }
      } else {
        // Other items, tab not visible, or not in viewport - pause video
        video.pause()
      }
    })
  }

  // Initial setup - control videos on first mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      controlVideos(index, true) // Force start videos on initial load
      setIsInitialized(true)
    }, 100)

    return () => clearTimeout(timer)
  }, []) // Only run once on mount

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll || paused || !isTabVisible || !isInViewport || !isInitialized) return

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, delay)

    return () => clearInterval(id)
  }, [autoScroll, paused, isTabVisible, isInViewport, delay, items.length, isInitialized])

  // Handle index changes
  useEffect(() => {
    if (!isInitialized) return // Don't run until initialized

    onIndexChange(index)
    // Only restart video if we actually switched to a different item
    const hasIndexChanged = previousIndexRef.current !== index
    controlVideos(index, hasIndexChanged)
    previousIndexRef.current = index
  }, [index, onIndexChange, isInitialized])

  // Handle tab visibility and viewport changes for current video
  useEffect(() => {
    if (!isInitialized) return
    controlVideos(index, false)
  }, [isTabVisible, isInViewport, index, isInitialized])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <>
      <div
        ref={carouselRef}
        className={`relative w-full h-full overflow-hidden ${containerClass}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              data-carousel-item={i}
              className="w-full h-full flex-shrink-0 flex justify-center items-start"
              style={{ minWidth: "100%" }}
            >
              {item}
            </div>
          ))}
        </div>
        {items.length > 1 && (
          <>
            {/* Next Button - Perfectly centered */}
            <div 
              className="absolute top-1/2 right-1 -translate-y-[100%] z-10" 
              onClick={handleNext}
            >
              <CustomButton />
            </div>
          </>
        )}
      </div>
    </>
  )
}