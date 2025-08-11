"use client"
import { Linkedin, Mail, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"
import { teamMembers } from "../constants/teamMember"
import Link from "next/link"

export default function TeamPage() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<string | null>(null)

  const handleTeamMemberHover = (memberId: string | null): void => {
    setHoveredTeamMember(memberId)
  }

  // Determine grid classes based on number of team members
  const getGridClasses = () => {
    if (teamMembers.length === 1) {
      return "grid grid-cols-1 place-items-center gap-8 max-w-6xl mx-auto"
    }
    return "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
  }

  // Determine card width and positioning
  const getCardClasses = (index: number) => {
    const baseClasses = "group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
    
    if (teamMembers.length === 1) {
      return `${baseClasses} max-w-2xl w-full`
    }
    
    // For odd number of items, center the last item when it's alone in its row
    const isLastItem = index === teamMembers.length - 1
    const isOddTotal = teamMembers.length % 2 === 1
    
    if (isLastItem && isOddTotal) {
      return `${baseClasses} lg:col-span-2 lg:max-w-2xl lg:mx-auto`
    }
    
    return baseClasses
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Team Section */}
        <div className="w-full max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">Meet Our Expert Team</h1>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            Our world-class team of instructors, engineers, and mentors brings decades of combined experience from
            leading tech companies, research institutions, and competitive robotics. Each team member is passionate
            about sharing their expertise and guiding the next generation of robotics innovators.
          </p>

          <div className={getGridClasses()}>
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={getCardClasses(index)}
                onMouseEnter={() => handleTeamMemberHover(member.id)}
                onMouseLeave={() => handleTeamMemberHover(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-8 pb-6">
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-blue-700 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                      sizes="96px"
                    />
                  </div>

                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                      {member.name}
                    </CardTitle>

                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      <Star className="w-3 h-3 mr-1" />
                      {member.role}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative px-8 pb-8">
                  <div className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-justify mb-6 text-sm">
                    {member.description}
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center sm:justify-start gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`mailto:${member.mail}`} target="_blank">
                    <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200">
                      <Mail className="w-4 h-4 text-blue-700" />
                    </button>
                     </Link>
                     <Link href={member.link}>
                    <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200">
                      <Linkedin className="w-4 h-4 text-blue-700" />
                    </button>
                     </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}