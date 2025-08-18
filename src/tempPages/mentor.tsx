"use client"

import { Bot, Brain, Gamepad2, Users, Sparkles, ArrowRight, Award, Clock, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Navbar } from '@/app/homeComponents/NavbarL'
import { Footer } from '@/app/homeComponents'
import { link } from 'fs'
import Link from 'next/link'

export default function MentorProgram() {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  const courses = [
    {
      id: "robotics",
      title: "Robotics Engineering",
      description: "Master the fundamentals of robotics design, programming, and automation. Learn to build intelligent systems that interact with the physical world through hands-on projects and real-world applications.",
      icon: Bot,
      link: "./mentor/robotics",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "Dive deep into the world of AI and machine learning. Understand neural networks, data analysis, and intelligent system design while building practical AI applications for real-world problems.",
      icon: Brain,
      link: "./mentor/aiworkshop",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-800",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
    },
    {
      id: "game-development",
      title: "Game Development",
      description: "Create engaging interactive experiences through comprehensive game development. Learn programming, design principles, and storytelling while building complete games from concept to completion.",
      icon: Gamepad2,
      link: "./mentor/gamedev",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800",
    }
  ]

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      
      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-700 rounded-full text-sm text-blue-800 font-medium mb-8 shadow-sm">
            <Users className="w-4 h-4 mr-2" />
            Premium Mentorship Program
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-blue-800">Mentor Program for</span>
            <br />
            <span className="text-blue-900">O/A-Level Students</span>
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Accelerate your academic journey with 
            <span className="font-semibold text-blue-800"> expert mentorship, personalized guidance, </span>
            and cutting-edge technology courses designed for ambitious students.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['1-on-1 Mentoring', 'Industry Projects', 'University Preparation', 'Career Guidance'].map((feature) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">Our Specialized Courses</h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Choose from three cutting-edge technology tracks, each designed to prepare you for the future of innovation.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${course.bgColor}/50`}
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoveredCourse(null)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative flex flex-col items-center text-center p-8 pb-4">
                  <div className={`p-4 rounded-2xl ${course.bgColor} group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg`}>
                    <course.icon className={`h-8 w-8 ${course.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3">
                    {course.title}
                  </CardTitle>
                  
                </CardHeader>
                
                <CardContent className="relative flex-grow px-8 pb-4">
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {course.description}
                  </p>
                </CardContent>
                
                <CardFooter className="relative p-8 pt-0">
                  <Link
  href={course.link}
  className={`w-full ${course.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2`}
>
  Explore Course
  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCourse === course.id ? 'translate-x-1' : ''}`} />
    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>


        {/* Statistics Section */}
        {/* <div className="mt-20 w-full max-w-5xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-700/20 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Program Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">200+</div>
                <div className="text-gray-600">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
                <div className="text-gray-600">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      
      <Footer />
    </div>
  )
}