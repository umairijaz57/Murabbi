"use client"
import { Blocks, Trophy, Zap, Navigation, Activity, Gamepad2, Mountain, Target, Users, Clock, Sparkles, Award, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Navbar } from '@/app/homeComponents/NavbarL'
import Image from 'next/image'
import { Footer } from '@/app/homeComponents'

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: any;
}

interface DayProgram {
  day: string;
  title: string;
  activities: Activity[];
}

interface ProgramHighlight {
  icon: any;
  title: string;
  description: string;
}

const LegoLeague: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<number>(1)

  const dailyProgram: Record<number, DayProgram> = {
    1: {
      day: "Day 1",
      title: "Robot Foundation & Speed",
      activities: [
        {
          id: "robot-boot",
          title: "5-Minute Robot Boot",
          description: "Quick introduction to LEGO EV3 robots. Learn basic controls and get your robot up and running in record time.",
          icon: Zap,
        },
      ]
    },
    2: {
      day: "Day 2",
      title: "Navigation & Sensors",
      activities: [
        {
          id: "obstacle-avoidance",
          title: "Obstacle Avoidance",
          description: "Program your robot to navigate around obstacles using sensors and smart algorithms.",
          icon: Navigation,
        },
        {
          id: "line-follower-1",
          title: "Line Follower",
          description: "Program your robot to follow complex paths using line-following sensors and algorithms.",
          icon: Activity,
        },
      ]
    },
    3: {
      day: "Day 3",
      title: "Speed & Climbing Challenges",
      activities: [
        {
          id: "slope-climbing",
          title: "Slope Climbing",
          description: "Challenge your robot to climb steep slopes. Master motor control and mechanical advantage.",
          icon: Mountain,
        },
        {
          id: "speed-racing-2",
          title: "Speed Racing Advanced",
          description: "Master advanced speed techniques and compete in timed races with precision control.",
          icon: Trophy,
        },
      ]
    },
    4: {
      day: "Day 4",
      title: "Combat Preparation",
      activities: [
        {
          id: "sumo-wrestling-1",
          title: "Ideal Bots Design",
          description: "Learn to design and program your own Ideal Combat Bot. Explore the principles of strategic movement, durable engineering, and intelligent design to build a bot ready for battle.",
          icon: Sparkles,
        },
        {
          id: "sumo-wrestling-2",
          title: "Sumo Wrestling Training",
          description: "Build and program combat robots for sumo wrestling. Learn strategy and robust design principles.",
          icon: Users,
        }
      ]
    },
    5: {
      day: "Day 5",
      title: "Championship Day",
      activities: [
        {
          id: "sumo-competition",
          title: "Sumo Wrestling Championship",
          description: "The ultimate showdown! Compete in the grand sumo wrestling tournament and claim victory.",
          icon: Award,
        }
      ]
    }
  }

  const programHighlights: ProgramHighlight[] = [
    {
      icon: Blocks,
      title: "LEGO EV3 Robots",
      description: "Work with professional-grade LEGO Mindstorms EV3 robotics kits"
    },
    {
      icon: Clock,
      title: "5 Intensive Days",
      description: "Comprehensive program packed with hands-on activities and challenges"
    },
    {
      icon: Trophy,
      title: "Competition Ready",
      description: "Prepare for FIRST LEGO League competitions with real tournament experience"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Collaborate in teams and develop essential communication skills"
    }
  ]

  // Array for image gallery
  const imageGalleryItems = [
    { src: '/steamgallery/robotics/1.jpg', alt: 'LEGO robot performing an action' },
    { src: '/steamgallery/robotics/2.jpg', alt: 'LEGO robot in a competition' },
    { src: '/steamgallery/robotics/3.jpg', alt: 'Close up of LEGO robot sensors' },
  ];

  const handleActivityHover = (activityId: string | null): void => {
    setHoveredActivity(activityId)
  }

  const handleDaySelect = (day: number): void => {
    setSelectedDay(day)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-blue-800 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            LEGO League
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Dive into the world of robotics and innovation with
            <span className="font-semibold text-blue-800"> LEGO EV3 robots. </span>
            Learn problem-solving, teamwork, and engineering principles through exciting challenges.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Hands-on Building', 'Programming Skills', 'Team Competitions', 'Real Tournaments'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
          {/* Added Hero Image */}
          {/* <div className="mt-12 max-w-3xl mx-auto">
            <Image
              src="/images/lego-robot-hero.png"
              width={800}
              height={450}
              alt="LEGO EV3 Robot in action"
              className="rounded-xl shadow-2xl border border-blue-200"
            />
          </div> */}
        </div>

        {/* 5-Day Activity Program Section (Prioritized) */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">5-Day Activity Program</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Experience an intensive journey from robot basics to championship competition with LEGO EV3 robots.
          </p>
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(dailyProgram).map((day: string) => {
              const dayNumber = parseInt(day)
              return (
                <button
                  key={day}
                  onClick={() => handleDaySelect(dayNumber)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDay === dayNumber
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-white/60 text-blue-800 border border-blue-700/20 hover:bg-blue-100'
                  }`}
                >
                  {dailyProgram[dayNumber].day}
                </button>
              )
            })}
          </div>
          {/* Selected Day Content */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {dailyProgram[selectedDay].title}
              </h3>
              <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {dailyProgram[selectedDay].day}
              </div>
            </div>
            <div className={`grid gap-8 ${
              dailyProgram[selectedDay].activities.length === 1
                ? 'grid-cols-1 max-w-2xl mx-auto'
                : dailyProgram[selectedDay].activities.length === 2
                  ? 'grid-cols-1 lg:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {dailyProgram[selectedDay].activities.map((activity: Activity, index: number) => (
                <Card
                  key={activity.id}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => handleActivityHover(activity.id)}
                  onMouseLeave={() => handleActivityHover(null)}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Blue overlay on hover */}
                  <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative flex flex-col items-center text-center p-8 pb-4">
                    <div className="p-4 rounded-2xl bg-blue-50 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                      <activity.icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative px-8 pb-8">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Video Section */}
        <div className="w-full max-w-xl mb-20 mt-16"> {/* Max width adjusted for square video */}
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">See Our Robots in Action!</h2>
          <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200"> {/* pb-[100%] creates 1:1 aspect ratio */}
            <video
              controls
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/robotics.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch our LEGO EV3 robots navigate challenges and compete in exciting tasks.
          </p>
        </div>

        {/* Dedicated Image Gallery Section (Grid) */}
        <div className="w-full max-w-6xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg border border-blue-200" // pb-[100%] for 1:1 aspect ratio
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            A glimpse into our workshops, building sessions, and thrilling competitions.
          </p>
        </div>

        {/* Program Highlights Section */}
        <div className="w-full max-w-6xl mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight: ProgramHighlight, index: number) => (
              <div
                key={highlight.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <highlight.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LegoLeague
