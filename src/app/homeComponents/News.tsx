"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  "/newspic/1.jpeg",
  "/newspic/2.jpg",
  "/newspic/3.jpg",
  "/newspic/4.jpg",
  "/newspic/5.jpg",
  "/newspic/6.jpeg",
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (images.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (images.length - 2)) % (images.length - 2))
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <div className="min-h-screen bg-blue-50 p-4">

        <h1 className="text-2xl text-center text-blue-600 md:text-4xl font-bold">News & Updates</h1>
    <div className="flex items-center justify-center p-4">
      <div
        className="relative max-w-6xl w-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Images Container */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / 3 + 4 / 3)}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-1/3 flex-shrink-0">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-10 w-10"
          onClick={prevSlide}
          >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-10 w-10"
          onClick={nextSlide}
          >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: images.length - 2 }).map((_, index) => (
              <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              />
          ))}
        </div>
      </div>
    </div>
              </div>
  )
}
