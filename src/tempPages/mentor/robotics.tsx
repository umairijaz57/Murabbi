"use client"
import { Bot, Settings, Package, Eye, Navigation, Cpu, Camera, Code, Users, Calendar, GraduationCap, Laptop, FileText, Award, Clock, Sparkles, Briefcase, Key, Zap, Target, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Navbar } from '@/app/homeComponents/NavbarL'
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

const Robotics: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<number>(1)

  const dailyProgram: Record<number, DayProgram> = {
    1: {
      day: "Day 1",
      title: "Kickoff + Intro to Robotics & ROS",
      activities: [
        {
          id: "robotics-intro",
          title: "Introduction to Robotics",
          description: "Learn about robotics components, types, and real-world applications in various industries.",
          icon: Bot,
        },
        {
          id: "ros-overview",
          title: "Overview of ROS Architecture",
          description: "Understand ROS nodes, topics, messages, and the fundamental architecture of the Robot Operating System.",
          icon: Settings,
        },
        {
          id: "linux-basics",
          title: "Linux and Ubuntu Basics for ROS",
          description: "Master essential Linux commands and Ubuntu environment setup for robotics development.",
          icon: Code,
        },
        {
          id: "ros-installation",
          title: "Installing ROS & Publisher/Subscriber Nodes",
          description: "Set up ROS development environment and create your first publisher/subscriber communication nodes.",
          icon: Package,
        },
      ]
    },
    2: {
      day: "Day 2",
      title: "ROS Packages and Sensor Integration",
      activities: [
        {
          id: "ros-tools",
          title: "Using ROS Tools & Common Packages",
          description: "Explore essential ROS tools and commonly used packages for robotics development.",
          icon: Settings,
        },
        {
          id: "sensor-integration",
          title: "Sensor Integration with Arduino & ROS",
          description: "Connect and read from ultrasonic or IR sensors using Arduino, and integrate with ROS nodes for real-time data processing.",
          icon: Activity,
        },
        {
          id: "sensor-simulation",
          title: "Sensor Simulation & Data Visualization",
          description: "Simulate sensor feedback with Turtlesim and learn to visualize and display sensor data effectively.",
          icon: Eye,
        },
      ]
    },
    3: {
      day: "Day 3",
      title: "Robot Control and Navigation",
      activities: [
        {
          id: "robot-motion",
          title: "Creating ROS Nodes for Robot Motion",
          description: "Develop ROS nodes to control robot movement and interface with hardware components like wheels, motors, and encoders.",
          icon: Navigation,
        },
        {
          id: "navigation-concepts",
          title: "Introduction to Navigation Concepts",
          description: "Learn fundamental navigation principles including odometry, localization basics, and path planning.",
          icon: Target,
        },
        {
          id: "obstacle-avoidance",
          title: "Obstacle Avoidance & Maze Navigation",
          description: "Program robots to avoid obstacles and navigate through mazes using distance sensors and intelligent algorithms.",
          icon: Zap,
        },
      ]
    },
    4: {
      day: "Day 4",
      title: "Computer Vision with OpenCV + ROS",
      activities: [
        {
          id: "opencv-basics",
          title: "OpenCV Basics & Camera Integration",
          description: "Master OpenCV fundamentals including image capture, color spaces, filtering, and camera calibration with ROS streaming.",
          icon: Camera,
        },
        {
          id: "image-processing",
          title: "Live Camera Stream Processing",
          description: "Process live camera feeds, implement color tracking to detect and follow colored objects, and overlay processed images.",
          icon: Eye,
        },
      ]
    },
    5: {
      day: "Day 5",
      title: "Mini Project + Demos",
      activities: [
        {
          id: "project-planning",
          title: "Project Planning & Development",
          description: "Work in groups to select and plan a complete robot task such as ball following or obstacle avoidance, with guided mentor support.",
          icon: FileText,
        },
        {
          id: "project-demos",
          title: "Project Demos & Presentations",
          description: "Present your completed projects to peers and instructors, receive feedback, and celebrate your achievements.",
          icon: Award,
        },
        {
          id: "certificates",
          title: "Certificates & Prizes",
          description: "Receive certificates of completion and compete for special recognition including 'Robotics Pro' and 'Best Team' awards.",
          icon: Award,
        },
      ]
    }
  }

  const programHighlights: ProgramHighlight[] = [
    {
      icon: Bot,
      title: "ROS & OpenCV",
      description: "Work with industry-standard Robot Operating System and OpenCV computer vision tools."
    },
    {
      icon: Clock,
      title: "5 Intensive Days",
      description: "Comprehensive hands-on training program with theory, labs, and practical projects."
    },
    {
      icon: Sparkles,
      title: "Real-World Skills",
      description: "Gain cutting-edge technical competencies used by leading tech companies and research institutions."
    },
    {
      icon: Briefcase,
      title: "Career Pathways",
      description: "Explore exciting career opportunities in robotics, computer vision, and AI engineering."
    }
  ]



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
            ROBOTICS
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Join an immersive 5-day hands-on training program, designed to equip high school students
            with cutting-edge skills in robotics and computer vision—empowering them with key real-world technical competencies.
            This first-of-a-kind workshop, conducted by a leading expert, researcher, and practitioner, is
            designed to give a flavor of this exciting domain and outline new and bold career paths for
            students. Going far beyond putting together basic circuits and robots, students will work
            directly with 
            <span className="font-semibold text-blue-800"> OpenCV and the Robot Operating System (ROS), </span>
            the same powerful open-source tools and frameworks currently used by leading tech companies, startups, and
            international research institutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['ROS Development', 'Computer Vision', 'OpenCV Integration', 'Real-World Applications'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
          {/* Added Hero Image */}
          {/* <div className="mt-12 max-w-3xl mx-auto">
            <Image
              src="/images/robotics-hero.png"
              width={800}
              height={450}
              alt="Students working with robotics and computer vision systems"
              className="rounded-xl shadow-2xl border border-blue-200"
            />
          </div> */}
        </div>

        {/* Workshop Details Section */}
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
                <p className="text-gray-700">July 21 – 25 (5 days) | 10AM – 4PM (with breaks!)</p>
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
                <p className="text-gray-700">Dr. Latif Anjum [<a href="#" className="text-blue-600 hover:underline">bio</a>]</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Pre-requisites:</h3>
                <p className="text-gray-700">Basic programming skills (Python, C, etc.)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Laptop className="w-6 h-6 text-blue-700" />
              <div>
                <h3 className="font-semibold text-blue-900">Requirements:</h3>
                <p className="text-gray-700">Paper, pencil, and laptop (if possible)</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-700 text-white hover:bg-blue-800 text-lg px-8 py-3">
              <a href="#" className="text-white">CLICK HERE TO REGISTER!</a>
            </Button>
          </div>
        </div> */}

        {/* 5-Day Activity Program Section (Prioritized) */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            <Key className="inline w-8 h-8 mr-2" />
            Tentative Outline: 5-Day Activity Program
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Master robotics and computer vision through a structured curriculum combining theory sessions, hands-on exercises, labs, quizzes, group activities, projects, and expert talks.
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
        {/* <div className="w-full max-w-xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">See Our Robotics in Action!</h2>
          <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200">
            <video
              controls
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/robotics-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch robotics systems powered by ROS and OpenCV computer vision in action.
          </p>
        </div> */}

        {/* Dedicated Image Gallery Section (Grid) */}
        {/* <div className="w-full max-w-6xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Robotics Lab Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg border border-blue-200"
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
            A glimpse into our robotics labs, ROS development sessions, and computer vision projects.
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

export default Robotics
