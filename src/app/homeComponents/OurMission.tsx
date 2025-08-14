"use client"

import { useEffect, useState } from "react"

export default function MissionVisionPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleVisibility = () => setIsVisible(true)

    window.addEventListener("scroll", handleScroll)
    setTimeout(handleVisibility, 300)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400/30 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-6 h-6 bg-blue-500/25 rotate-45 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-600/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <section className="relative py-32 px-4">
        <div className="relative max-w-6xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block">
              <h1 className="font-serif text-6xl md:text-8xl font-bold text-blue-900 mb-6 leading-tight">
                Mission & Vision
              </h1>
            </div>
            <div className="flex justify-center items-center mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - New Layout */}
      <section className="px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Vision Section */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="text-center md:text-left space-y-6">
                <div className="inline-flex items-center justify-center md:justify-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Vision</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto md:mx-0 mb-6"></div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                    To democratize disruptive technologies by making them accessible and comprehensible to all, fostering innovation and inclusive growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <div className="text-center md:text-left space-y-6">
                <div className="inline-flex items-center justify-center md:justify-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Mission</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto md:mx-0 mb-6"></div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                    To empower innovators with the knowledge and skills needed to lead and excel in the age of disruptive technologies through simplified, practical, and cutting-edge professional training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative separator */}
          <div className="flex justify-center mt-16 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}