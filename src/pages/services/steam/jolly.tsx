"use client"

import { Brain, Bot, Eye, Sparkles, PenTool, Gamepad2, Radio, Trophy, Users, Clock, Zap, Target, Award, Calendar, Search, Lightbulb, Palette, Calculator, Flower, Wrench, TreePine, Music, Scissors, Heart, BookOpen, Shield, Puzzle, Code, Book, Flag, Volume2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Navbar } from '@/app/homeComponents/NavbarL'
import { Footer } from '@/app/homeComponents'
import Image from 'next/image'

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: any;
}

interface WeekProgram {
  week: string;
  title: string;
  activities: Activity[];
}

interface ProgramHighlight {
  icon: any;
  title: string;
  description: string;
}

const JollyPhonics: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedWeek, setSelectedWeek] = useState<number>(1)

  const weeklyProgram: Record<number, WeekProgram> = {
  1: {
    week: "Week 1",
    title: "Foundation Sounds & First Projects",
    activities: [
      {
        id: "letter-sounds",
        title: "Jolly Phonics Groups 1-3",
        description: "Master the first letter sound groups with fun activities and interactive games that bring phonics to life.",
        icon: Book,
      },
      {
        id: "electronic-intro",
        title: "Electronic Kit Adventures",
        description: "Start your science journey with LED glow activities and blinking light projects that spark curiosity.",
        icon: Lightbulb,
      },
      {
        id: "creative-crafts",
        title: "Creative Arts & Crafts",
        description: "Make stick octopus, beautiful paper flowers, and express creativity through rock painting activities.",
        icon: Palette,
      },
      {
        id: "active-play",
        title: "Active Sports & Games",
        description: "Get moving with sack races and math activities that combine learning with physical fun.",
        icon: Trophy,
      }
    ]
  },
  2: {
    week: "Week 2",
    title: "Advanced Sounds & Engineering",
    activities: [
      {
        id: "phonics-hunt",
        title: "Jolly Phonics Groups 4-5",
        description: "Explore advanced phonics through sound hunts, bingo games, and exciting relay races that reinforce learning.",
        icon: Search,
      },
      {
        id: "engineering-projects",
        title: "Build & Create Projects",
        description: "Construct intruder alarms, electromagnets, and motors while learning basic engineering principles.",
        icon: Wrench,
      },
      {
        id: "nature-crafts",
        title: "Nature & Art Fusion",
        description: "Build bird houses, create cactus handprint art, and connect with nature through creative expression.",
        icon: TreePine,
      },
      {
        id: "team-sports",
        title: "Team Sports & Skills",
        description: "Master juggling techniques and engage in tug of war competitions that build teamwork and coordination.",
        icon: Users,
      }
    ]
  },
  3: {
    week: "Week 3",
    title: "Mastery & Innovation",
    activities: [
      {
        id: "advanced-phonics",
        title: "Jolly Phonics Groups 6-7",
        description: "Complete the phonics journey with advanced letter groups and comprehensive revision activities.",
        icon: Award,
      },
      {
        id: "power-generation",
        title: "Energy & Power Projects",
        description: "Create shake generators, lemon-powered lights, and empowering LED projects that demonstrate energy concepts.",
        icon: Zap,
      },
      {
        id: "math-mastery",
        title: "Math Through Play",
        description: "Reinforce mathematical concepts through hands-on activities and engaging problem-solving games.",
        icon: Calculator,
      },
      {
        id: "celebration-crafts",
        title: "Celebration & Memory Making",
        description: "End with card making, carrot stick cone crafts, and a memorable closing ceremony celebration.",
        icon: Heart,
      }
    ]
  }
};

  const programHighlights: ProgramHighlight[] = [
  {
    icon: BookOpen,
    title: "Complete Phonics Mastery",
    description: "Master all 7 Jolly Phonics letter groups through interactive activities, games, and hands-on learning experiences"
  },
  {
    icon: Lightbulb,
    title: "STEM Innovation",
    description: "Build electronic projects, create motors, and explore energy generation through exciting hands-on experiments"
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description: "Develop artistic skills through crafts, painting, and creative projects that inspire imagination and creativity"
  },
  {
    icon: Users,
    title: "Active Learning Community",
    description: "Combine learning with sports, team activities, and social interaction in a supportive camp environment"
  }
];

const imageGalleryItems = [
    { src: '/SingleCarousel/jolly/1.jpeg',  },
    { src: '/SingleCarousel/jolly/2.jpeg',  },
    { src: '/SingleCarousel/jolly/3.jpeg',  },
  ];

  const handleActivityHover = (activityId: string | null): void => {
    setHoveredActivity(activityId)
  }

  const handleWeekSelect = (week: number): void => {
    setSelectedWeek(week)
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
            Jolly Phonics
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Discover the joy of reading through 
            <span className="font-semibold text-blue-800"> interactive phonics, creative crafts, and STEM projects. </span>
            Build letter sounds, create amazing projects, and develop lifelong learning skills in our exciting summer camp.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Letter Sound Mastery', 'Electronic Projects', 'Creative Arts', 'Active Learning'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">3-Week Learning Adventure</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            From foundation phonics to advanced projects, experience a complete learning journey that combines education with fun.
          </p>

          {/* Week Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(weeklyProgram).map((week: string) => {
              const weekNumber = parseInt(week)
              return (
                <button
                  key={week}
                  onClick={() => handleWeekSelect(weekNumber)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedWeek === weekNumber
                      ? 'bg-blue-700 text-white shadow-lg transform scale-105'
                      : 'bg-white/60 text-blue-800 border border-blue-700/20 hover:bg-blue-100'
                  }`}
                >
                  {weeklyProgram[weekNumber].week}
                </button>
              )
            })}
          </div>

          {/* Selected Week Content */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {weeklyProgram[selectedWeek].title}
              </h3>
              <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {weeklyProgram[selectedWeek].week}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {weeklyProgram[selectedWeek].activities.map((activity: Activity, index: number) => (
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
                  
                  <CardHeader className="relative flex flex-col items-center text-center p-6 pb-4">
                    <div className="p-4 rounded-2xl bg-blue-50 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                      <activity.icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3 leading-tight">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center text-sm">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl mb-20 mt-16"> {/* Max width adjusted for square video */}
                  <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200"> {/* pb-[100%] creates 1:1 aspect ratio */}
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                      <source src="/jolly.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-center text-gray-600 mt-4 text-lg">
                    Watch our Jolly Phonics navigate challenges and compete in exciting tasks.
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
                          alt=''
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

export default JollyPhonics