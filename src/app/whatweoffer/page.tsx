"use client"

import { Bot, Brain, Shield, Gamepad2, Users, Beaker } from "lucide-react"
import { Footer, NavBar } from "../homeComponents"
import { Navbar } from "../homeComponents/NavbarL"
import { FadeIn } from "./components/FadeIn"

export default function Page() {
  const programs = [
    {
      id: "robotics",
      title: "ROBOTICS",
      description:
        "Build, program, and control robots while learning engineering principles and problem-solving skills.",
      icon: Bot,
      href: "/whatweoffer/robotics",
    },
    {
      id: "ai",
      title: "AI",
      description: "Explore machine learning, neural networks, and AI applications in real-world scenarios.",
      icon: Brain,
      href: "/whatweoffer/artificialintelligence",
    },
    {
      id: "cybersecurity",
      title: "CYBER SECURITY",
      description: "Learn to protect digital assets and understand cybersecurity principles through hands-on practice.",
      icon: Shield,
      href: "/whatweoffer/cybersecurity",
    },
    // {
    //   id: "gamedev",
    //   title: "GAMEDEV",
    //   description: "Create engaging games while learning programming, design principles, and storytelling.",
    //   icon: Gamepad2,
    //   href: "/whatweoffer/gamedev",
    // },
    // {
    //   id: "dare2lead",
    //   title: "DARE2LEAD",
    //   description: "Develop leadership skills and entrepreneurial mindset for future success in any field.",
    //   icon: Users,
    //   href: "/whatweoffer/dare2lead",
    // },
    {
      id: "steam",
      title: "STEAM CAMPS",
      description: "Integrated Science, Technology, Engineering, Arts, and Mathematics programs for holistic learning.",
      icon: Beaker,
      href: "/whatweoffer/steamcamp",
    },
  ]

  return (
      <div className="min-h-screen bg-white">
        <Navbar />
      <div className="container mx-auto px-4 py-12">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 ">What We Offer</h1>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Explore our comprehensive range of programs designed to inspire and educate.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <div
                key={program.id}
                onClick={() => (window.location.href = program.href)}
                className="bg-blue-900 border border-blue-900 rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:scale-105"
              >
                <div className="mx-auto mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-xl font-bold text-white mb-4">{program.title}</h2>
                <p className="text-white text-sm leading-relaxed">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
