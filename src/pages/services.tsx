"use client"

import Link from "next/link"
import { ArrowRight, PencilRuler, Sparkles, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/app/homeComponents/NavbarL"
import { FadeIn } from "@/app/whatweoffer/components/FadeIn"
import { Footer } from "@/app/homeComponents"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function WhatWeOffer() {
  const [hoveredProgram, setHoveredProgram] = useState(null)

  const programs = [
    {
      id: "steam-camps",
      title: "STEAM Camps",
      description:
        "Our Steam Camp offers a dynamic learning environment where creativity meets innovation. Explore various fields through interactive projects and collaborative challenges designed to spark curiosity and foster scientific thinking.",
      icon: PencilRuler,
      href: "/services/steam",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800",
      features: ["Interactive Projects", "Problem Solving", "Hands-on Learning"],
      stats: "50+ Projects"
    },
    {
      id: "mentor-program",
      title: "Mentor Program for O/A-Level",
      description:
        "Our mentorship programs provide in-depth guidance and practical experience for students aiming for excellence in their O/A-Level studies and beyond, preparing them for future academic and career success.",
      icon: Users,
      href: "/services/mentor",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-800",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      features: ["Expert Mentors", "Personalized Guidance", "Academic Excellence"],
      stats: "95% Success Rate"
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Animated background elements */}
       <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Hero Section */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-700 rounded-full text-sm text-blue-800 font-medium mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover Our Educational Excellence
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-blue-800">What We Offer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our comprehensive range of programs designed to 
            <span className="font-semibold text-blue-800"> inspire, educate, and transform</span> young minds.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Expert-Led Programs', 'Proven Results', 'Personalized Learning', 'Future-Ready Skills'].map((feature) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Programs Section */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${program.bgColor}/50`}
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoveredProgram(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative flex flex-col items-center text-center p-10 pb-6">
                  <div className={`p-6 rounded-2xl ${program.bgColor} group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg`}>
                    <program.icon className={`h-10 w-10 ${program.iconColor}`} />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative flex-grow px-10 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300 text-lg">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature) => (
                        <span key={feature} className="px-4 py-2 text-sm font-medium bg-white/80 text-blue-700 rounded-full border border-blue-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="relative p-10 pt-0">
                <Link href={program.href} className="w-full ${program.buttonColor} text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-3 text-lg bg-blue-900">
                    <span>View Courses</span>
                        </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>


        {/* Additional Info Section */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-700/20 p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Our Programs?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
