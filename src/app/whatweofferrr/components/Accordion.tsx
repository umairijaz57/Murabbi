"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Users,
  BookOpen,
  Target,
  Home,
  Wrench,
  GraduationCap,
  Heart,
  Star,
  Award,
  MapPin,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function SteamCampAccordions() {
  const [courseDetailsOpen, setCourseDetailsOpen] = useState(false)
  const [campAtPlaceOpen, setCampAtPlaceOpen] = useState(false)

  const learningOutcomes = [
    { name: "Critical Thinking", color: "default" as const },
    { name: "Creativity", color: "secondary" as const },
    { name: "Teamwork", color: "outline" as const },
    { name: "Problem-Solving", color: "default" as const },
    { name: "Innovation", color: "secondary" as const },
    { name: "Technical Skills", color: "outline" as const },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* Accordion 1: Course Details */}
      <Card className="overflow-hidden border-2 hover:border-blue-200 transition-colors duration-300">
        <Collapsible open={courseDetailsOpen} onOpenChange={setCourseDetailsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="text-2xl font-bold text-white">Course Details</CardTitle>
                    <CardDescription className="text-blue-100 mt-1">
                      Comprehensive 3-week intensive program
                    </CardDescription>
                  </div>
                </div>
                {courseDetailsOpen ? (
                  <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-6 w-6 transition-transform duration-200" />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-2 data-[state=open]:slide-down-2">
            <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Duration & Age Group */}
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-lg">Duration & Schedule</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          3 Weeks Intensive
                        </Badge>
                        <p className="text-sm text-muted-foreground">Monday to Friday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 3:00 PM</p>
                      </div>
                      <Separator />
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Ages 8-13</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Small groups of 8-12 students</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Modules */}
                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Wrench className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-lg">Learning Modules</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Robotics & Programming",
                        "Coding & Game Development",
                        "Design Thinking & Innovation",
                        "Art with Science Integration",
                        "3D Printing & Modeling",
                      ].map((module, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Learning Outcomes */}
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-lg">Learning Outcomes</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {learningOutcomes.map((outcome, index) => (
                        <Badge key={index} variant={outcome.color} className="text-xs">
                          {outcome.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Certificate of Completion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">What Makes Our Program Special</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Our curriculum is designed by education experts and industry professionals. Each student
                        receives personalized attention with hands-on projects that build real-world skills. We provide
                        all materials and take-home projects to continue learning beyond camp.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Accordion 2: STEAM Camp at Your Place */}
      <Card className="overflow-hidden border-2 hover:border-green-200 transition-colors duration-300">
        <Collapsible open={campAtPlaceOpen} onOpenChange={setCampAtPlaceOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Home className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="text-2xl font-bold text-white">STEAM Camp at Your Place</CardTitle>
                    <CardDescription className="text-green-100 mt-1">
                      Bring the experience to your location
                    </CardDescription>
                  </div>
                </div>
                {campAtPlaceOpen ? (
                  <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-6 w-6 transition-transform duration-200" />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-2 data-[state=open]:slide-down-2">
            <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-green-50">
              {/* Introduction */}
              <Card className="mb-6 border-green-200">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Host your own STEAM Camp at your school, home, or community space! We provide all materials, kits,
                    curriculum, and facilitator training. Whether you're a school looking to enrich your summer program
                    or a parent seeking a meaningful experience for kids, our flexible STEAM Camp model is designed to
                    fit your space and needs.
                  </p>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* What We Provide */}
                <Card className="border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-xl">Perfect For</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { icon: "🏫", title: "Schools & Institutions", desc: "Summer programs & enrichment" },
                        { icon: "🏛️", title: "Community Centers", desc: "Public programs & workshops" },
                        { icon: "🏠", title: "Homeschool Groups", desc: "Collaborative learning" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <p className="font-medium text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                      <CardTitle className="text-xl">What We Provide</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Complete Curriculum", desc: "Detailed lesson plans & activities" },
                        { title: "STEAM Kits & Materials", desc: "All supplies included" },
                        { title: "Facilitator Training", desc: "Certified instructor preparation" },
                        { title: "Ongoing Support", desc: "24/7 assistance during program" },
                        { title: "Assessment Tools", desc: "Progress tracking & certificates" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Badge variant="outline" className="mt-1 text-xs bg-green-50">
                            ✓
                          </Badge>
                          <div>
                            <p className="font-medium text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Perfect For */}
              </div>

              {/* Requirements */}
              <Card className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-amber-900">Minimum Requirements</h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        Space for 8-12 participants, basic tables and chairs, access to power outlets. We handle
                        everything else! Contact us for a custom quote based on your group size and location.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Enhanced CTA Section */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Limited Spots Available
              </Badge>
              <h3 className="text-3xl font-bold mb-4">Ready to Spark Innovation?</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Join thousands of students who have discovered their passion for STEAM through our engaging, hands-on
                programs. Transform curiosity into capability!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold bg-transparent"
                >
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
