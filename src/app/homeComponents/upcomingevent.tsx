import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function UpcomingEvents() {
  return (
    <section className="px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join our intensive 5-day workshops designed for high school students to explore cutting-edge technology and
          career paths in an immersive learning environment.
        </p>
      </div>

      <Tabs defaultValue="unity" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-14 bg-gray-50 rounded-2xl p-1 shadow-inner">
            <TabsTrigger 
              value="unity" 
              className="data-[state=active]:bg-blue-900 h-12 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl transition-all duration-300 font-semibold text-sm"
            >
              Game Development
            </TabsTrigger>
            <TabsTrigger 
              value="robotics" 
              className="data-[state=active]:bg-blue-900 h-12 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl transition-all duration-300 font-semibold text-sm"
            >
              Robotics & AI
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="unity" className="mt-0">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white rounded-3xl">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src="/summercamp/7.jpg"
                  alt="Game Development with Unity"
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
              </div>

              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium uppercase tracking-wide">Featured Workshop</span>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
                      Game Design & Development with Unity
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      Dive into game design and development with Unity. Learn to design levels, animate characters, write
                      scripts, and build immersive 2D and 3D games from scratch.
                    </CardDescription>
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Date</p>
                        <p className="text-base font-semibold text-gray-900">July 14-18, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Time</p>
                        <p className="text-base font-semibold text-gray-900">10AM - 4PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Location</p>
                        <p className="text-base font-semibold text-gray-900">NUST-SEECS, H-12</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Age Group</p>
                        <p className="text-base font-semibold text-gray-900">14-18 years</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-8">
                  <Link target="_blank" href={"https://docs.google.com/forms/d/e/1FAIpQLSfvmE-tkhLts2upg-fcmYDdSMRr63J2UmTWvYGGnYLlqS8RTA/viewform?pli=1"}>
                    <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="robotics" className="mt-0">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white rounded-3xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-blue-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  5-Day Workshop
                </div>
                <img
                  src="/summercamp/3.jpg"
                  alt="Robotics and Computer Vision"
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
              </div>

              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium uppercase tracking-wide">Featured Workshop</span>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
                      Robotics & Computer Vision
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      Immersive hands-on training in robotics and computer vision using OpenCV and ROS - the same tools
                      used by leading tech companies worldwide.
                    </CardDescription>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Date</p>
                        <p className="text-base font-semibold text-gray-900">July 21-25, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Time</p>
                        <p className="text-base font-semibold text-gray-900">10AM - 4PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Location</p>
                        <p className="text-base font-semibold text-gray-900">NUST-SEECS, H-12</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Age Group</p>
                        <p className="text-base font-semibold text-gray-900">14-18 years</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                <Link target="_blank" href={"https://docs.google.com/forms/d/e/1FAIpQLSfvmE-tkhLts2upg-fcmYDdSMRr63J2UmTWvYGGnYLlqS8RTA/viewform?pli=1"}>
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}