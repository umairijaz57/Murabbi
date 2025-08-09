"use client"

import { Brain, Bot, Eye, Sparkles, PenTool, Gamepad2, Radio, Trophy, Users, Clock, Zap, Target, Award, Calendar, SearchIcon, TrophyIcon, MonitorSmartphoneIcon, PenToolIcon, BookTextIcon, FlagIcon, AudioWaveformIcon, ShieldIcon, PuzzleIcon, CodeIcon, BookOpenCheck, ShieldCheck } from 'lucide-react'
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

const cybersec: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<number>(1)

  const dailyProgram: Record<number, DayProgram> = {
  1: {
    day: "Day 1",
    title: "Code, Cipher & Da Vinci",
    activities: [
      {
        id: "da-vinci-codes",
        title: "Leonardo da Vinci’s Secret Codes",
        description: "Discover and decode da Vinci's mysterious encryption techniques and apply them to your own secret messages.",
        icon: PuzzleIcon,
      },
    ]
  },
  2: {
    day: "Day 2",
    title: "Ancient Encryption & Morse Code",
    activities: [
      {
        id: "ancient-encryption",
        title: "Encryption Techniques from Greece and Rome",
        description: "Travel back in time to explore ancient encryption methods and how they relate to modern digital security.",
        icon: ShieldIcon,
      },
      {
        id: "morse-code",
        title: "Crack the Morse Code",
        description: "Master the art of dots and dashes. Learn how Morse Code shaped secret communication across history.",
        icon: AudioWaveformIcon,
      }
    ]
  },
  3: {
    day: "Day 3",
    title: "Language, Symbols & Spy Secrets",
    activities: [
      {
        id: "pictogram-language",
        title: "From Pictograms to Language",
        description: "Understand how ancient pictograms evolved into language and how symbolic systems still influence encryption today.",
        icon: BookTextIcon,
      },
      {
        id: "washington-secrets",
        title: "George Washington’s Encryption Tactics",
        description: "Learn the clever spy techniques used during the American Revolution and create your own patriotic ciphers.",
        icon: FlagIcon,
      }
    ]
  },
  4: {
    day: "Day 4",
    title: "Virtual Reality & Calligraphy Lab",
    activities: [
      {
        id: "sherlock-cipher",
        title: "Crack the Code with Sherlock Holmes",
        description: "Put your logic and codebreaking skills to the test with mystery puzzles inspired by Sherlock Holmes.",
        icon: SearchIcon,
      },
    ]
  },
  5: {
    day: "Day 5",
    title: "The Final Cipher Challenge",
    activities: [
      {
        id: "cyber-sports",
        title: "The Code of Champions",
        description: "Engage in physical and mental challenges to refresh your skills and earn your title as Cyber Champion.",
        icon: TrophyIcon,
      }
    ]
  }
};


  const programHighlights: ProgramHighlight[] = [
  {
    icon: ShieldCheck, // Cybersecurity-related icon
    title: "Cybersecurity Foundations",
    description: "Explore the core principles of secure coding, encryption, and cyber defense inspired by ancient and modern techniques"
  },
  {
    icon: Clock, // Same as original
    title: "5 Action-Packed Days",
    description: "Dive into hands-on activities including codebreaking, spy tactics, virtual reality simulations, and more"
  },
  {
    icon: BookOpenCheck, // Suggesting history + practicality
    title: "Historical Meets Digital",
    description: "Learn from Da Vinci, Washington, and Sherlock Holmes while applying their secrets to modern cyber challenges"
  },
  {
    icon: Users, // Teamwork
    title: "Immersive Learning",
    description: "Collaborate in teams, crack ciphers, and conquer mystery missions in an engaging, spy-style environment"
  }
];

const imageGalleryItems = [
    { src: '/SingleCarousel/Cyber/1.jpg',  },
    { src: '/SingleCarousel/Cyber/2.jpg',  },
    { src: '/SingleCarousel/Cyber/3.jpg',  }
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
            Cyber Secrets
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Uncover the hidden world of cybersecurity through 


            <span className="font-semibold text-blue-800"> ancient secrets and modern tech. </span>
            Dive into hands-on code-making, code-breaking, and virtual missions where you think like a hacker, a spy, and a legend.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Chatbot Development', 'Computer Vision', 'AI Competition', 'Creative AI Projects'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">5-Day AI Journey</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            From building your first chatbot to competing against AI systems in the ultimate showdown.
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
                  {/* blue overlay on hover */}
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


        <div className="w-full max-w-xl mb-20 mt-16"> {/* Max width adjusted for square video */}
                  <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">See Our Cyber Security in Action!</h2>
                  <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200"> {/* pb-[100%] creates 1:1 aspect ratio */}
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                      <source src="/videosq.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* <p className="text-center text-gray-600 mt-4 text-lg">
                    Watch our LEGO EV3 robots navigate challenges and compete in exciting tasks.
                  </p> */}
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
                          alt={""}
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

export default cybersec