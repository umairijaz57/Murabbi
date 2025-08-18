"use client"
import { Brain, MessageSquare, Eye, Mic, FileText, Trophy, Code, Image as ImageIcon, Volume2, Newspaper, Zap, Users, Calendar, GraduationCap, Laptop, Award, Clock, Sparkles, Briefcase, Target, Activity, Key } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

const AIWorkshop: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<number>(1)

  const dailyProgram: Record<number, DayProgram> = {
    1: {
      day: "Day 1",
      title: "AI Awakening – Python & Rule-Based Bots",
      activities: [
        {
          id: "ai-intro",
          title: "Why AI? How AI and ML are Changing the World",
          description: "Explore the transformative impact of artificial intelligence and machine learning across industries and daily life.",
          icon: Brain,
        },
        {
          id: "python-crash",
          title: "Python Crash Course",
          description: "Master Python basics including variables, loops, and functions using Google Colab for AI development.",
          icon: Code,
        },
        {
          id: "pizza-chatbot",
          title: "Build a Pizza-Ordering Chatbot",
          description: "Create your first AI assistant using rule-based responses to handle pizza orders and customer interactions.",
          icon: MessageSquare,
        },
        {
          id: "multilingual-bot",
          title: "Multilingual Bot Challenge",
          description: "Enhance your chatbot to respond in both Urdu and English, making it accessible to diverse users.",
          icon: Activity,
        },
      ]
    },
    2: {
      day: "Day 2",
      title: "AI Vision – Image Recognition & Filters",
      activities: [
        {
          id: "ai-vision",
          title: "How AI Recognizes Faces, Objects, and Memes",
          description: "Understand the fundamentals of computer vision and how AI systems process and interpret visual information.",
          icon: Eye,
        },
        {
          id: "cnn-intro",
          title: "Introducing Convolutional Neural Networks",
          description: "Learn about CNNs and explore interactive demos like 'Can AI guess your doodles?' to understand image recognition.",
          icon: Target,
        },
        {
          id: "emoji-translator",
          title: "Train an Emoji Translator",
          description: "Build an AI system that detects facial expressions and suggests appropriate emojis based on emotions.",
          icon: ImageIcon,
        },
        {
          id: "instagram-filters",
          title: "Real-time Instagram-style Filters",
          description: "Apply quirky and silly filters in real-time using AI-powered image processing techniques.",
          icon: Sparkles,
        },
      ]
    },
    3: {
      day: "Day 3",
      title: "AI Ears – Voice Cloning & Deepfake Detectives",
      activities: [
        {
          id: "voice-ai",
          title: "How Siri and Alexa Work",
          description: "Explore Natural Language Processing and speech synthesis technologies that power voice assistants.",
          icon: Mic,
        },
        {
          id: "deepfake-demo",
          title: "AI-Generated Voices Demo",
          description: "Experience AI-generated voices through examples like fake Biden/Trump clips and understand the technology behind them.",
          icon: Volume2,
        },
        {
          id: "voice-changer",
          title: "AI Voice Changer Project",
          description: "Record your voice and use AI to mimic celebrity voices, exploring voice cloning technology.",
          icon: Zap,
        },
        {
          id: "real-fake-game",
          title: "The 'Real or Fake?' Game",
          description: "Test your ability to distinguish between real and AI-generated audio in this engaging challenge.",
          icon: Target,
        },
      ]
    },
    4: {
      day: "Day 4",
      title: "AI Writers – Sentiment Analysis & Fake News",
      activities: [
        {
          id: "chatgpt-intro",
          title: "How ChatGPT Works",
          description: "Understand the architecture and functioning of large language models that power modern AI writing systems.",
          icon: FileText,
        },
        {
          id: "fake-news-case",
          title: "AI-Generated News Articles Case Study",
          description: "Analyze AI-generated news articles and learn to identify fake content in this interactive case study.",
          icon: Newspaper,
        },
        {
          id: "sentiment-analyzer",
          title: "Movie Review Sentiment Analyzer",
          description: "Build an AI system that analyzes movie reviews to determine if comments are positive 😊 or negative 😞.",
          icon: Activity,
        },
        {
          id: "ai-poetry",
          title: "AI-Generated Poetry Challenge",
          description: "Create short AI-generated poems and participate in judging the most creative and compelling pieces.",
          icon: Sparkles,
        },
      ]
    },
    5: {
      day: "Day 5",
      title: "AI Showdown – Hackathon & Career Paths",
      activities: [
        {
          id: "ai-wild",
          title: "AI in the Wild",
          description: "Explore real-world AI applications including self-driving cars, medical AI, and robot chefs across various industries.",
          icon: Brain,
        },
        {
          id: "career-talk",
          title: "Career Talk: Becoming an AI Researcher/Engineer",
          description: "Learn about career pathways in AI, required skills, and educational routes to become an AI professional.",
          icon: Briefcase,
        },
        {
          id: "hackathon",
          title: "Build Your Own Mini-AI Project",
          description: "Apply everything you've learned in a creative hackathon to build your own AI project with provided ideas and guidance.",
          icon: Trophy,
        },
        {
          id: "certificates",
          title: "Certificates & Prizes",
          description: "Celebrate your achievements and receive certificates of completion along with prizes for outstanding projects.",
          icon: Award,
        },
      ]
    }
  }

  const programHighlights: ProgramHighlight[] = [
    {
      icon: Brain,
      title: "Real-World AI Tools",
      description: "Work with industry-standard tools and frameworks used by AI professionals worldwide."
    },
    {
      icon: Clock,
      title: "5 Immersive Days",
      description: "Comprehensive hands-on journey through interactive projects and practical AI applications."
    },
    {
      icon: Sparkles,
      title: "Build AI Projects",
      description: "Create chatbots, train models, detect deepfakes, and explore machine learning applications."
    },
    {
      icon: Briefcase,
      title: "Future Innovation",
      description: "Spark curiosity and inspire the next generation of AI innovators and researchers."
    }
  ]

  // Array for image gallery
  const imageGalleryItems = [
    { src: '/images/ai-lab-1.png', alt: 'Students working on AI projects in Google Colab' },
    { src: '/images/ai-lab-2.png', alt: 'Machine learning model training session' },
    { src: '/images/ai-lab-3.png', alt: 'Computer vision and image recognition demo' },
    { src: '/images/ai-lab-4.png', alt: 'Team collaboration on AI hackathon project' },
    { src: '/images/ai-lab-5.png', alt: 'AI-generated content and deepfake detection workshop' },
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
            AI Workshop
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Embark on a 5-day immersive journey into the thrilling world of artificial intelligence.
            Through interactive projects and real-world tools students will learn how to build
            chatbots, train AI models, detect deepfakes, and explore the future of machine
            learning. This hands-on workshop, designed by an AI specialist, will spark curiosity and
            inspire future innovators.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Build Chatbots', 'Train AI Models', 'Detect Deepfakes', 'Machine Learning'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Workshop Details Section - Commented out like in robotics */}
        {/* <div className="w-full max-w-4xl mb-20 mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-blue-700/20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Workshop Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Audience:</h3>
                <p className="text-gray-700">High school level (ages 14-18)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Date/Time:</h3>
                <p className="text-gray-700">July 28 – Aug. 1 (5 days) | 10AM – 4PM (with breaks!)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Venue:</h3>
                <p className="text-gray-700">NUST-SEECS, H-12</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Instructor:</h3>
                <p className="text-gray-700">Dr. Nazia Perwaiz [<a href="#" className="text-blue-600 hover:underline">bio</a>]</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Pre-requisites:</h3>
                <p className="text-gray-700">Basic Python programming skills (essential)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Laptop className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Requirements:</h3>
                <p className="text-gray-700">Paper, pencil, Google Colab access, and laptop (if possible)</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-700 text-white hover:bg-blue-800 text-lg px-8 py-3">
              <a href="#" className="text-white">CLICK HERE TO REGISTER!</a>
            </Button>
          </div>
        </div> */}

        {/* 5-Day Activity Program Section */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            <Key className="inline w-8 h-8 mr-2" />
            Tentative Outline: 5-Day Activity Program
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Dive deep into artificial intelligence through interactive projects, real-world tools, and hands-on learning experiences.
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
                  : dailyProgram[selectedDay].activities.length === 3
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
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

        {/* Video Section - Commented out like in robotics */}
        {/* <div className="w-full max-w-xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">See Our AI Projects in Action!</h2>
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-gray-200 flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">Video Coming Soon</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch AI models, chatbots, and machine learning projects created by our students.
          </p>
        </div> */}

        {/* Image Gallery Section - Commented out like in robotics */}
        {/* <div className="w-full max-w-6xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">AI Lab Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-blue-200"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            A glimpse into our AI labs, machine learning sessions, and innovative project development.
          </p>
        </div> */}

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

export default AIWorkshop