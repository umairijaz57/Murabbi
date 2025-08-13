import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Target, Lightbulb, TrendingUp } from "lucide-react"
import { Footer, Testimonials } from "@/app/homeComponents"
import { Navbar } from "@/app/homeComponents/NavbarL"

export default function Page() {
  return (
    <>
        <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=1200&query=modern%20AI%20workspace%20with%20computers%20and%20digital%20interfaces)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Build AI Applications
              <span className="block text-blue-700">Without Writing Code</span>
            </h1>
            <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
              Your AI application will be ready before your coffee order arrives. We offer a non-coding and
              non-mathematics based understanding of the AI world.
            </p>
          </div>

          {/* Program Levels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Discover Level */}
            <Card className="bg-blue-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge className="bg-white text-blue-600 mb-2">DISCOVER</Badge>
                    <div className="text-right">
                      <div className="text-sm opacity-90">LEVEL</div>
                      <div className="text-3xl font-bold">Beginner</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-blue-500/30 rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/SingleCarousel/AI/1.jpg"
                    alt="AI Basics Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-blue-100 mb-6">
                  AI in One Slide: Demystifying the AI world using as little as one slide. You will understand all the
                  strategic design choices involved.
                </p>
              </CardContent>
            </Card>

            {/* Explore Level */}
            <Card className="bg-blue-700 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge className="bg-white text-blue-700 mb-2">EXPLORE</Badge>
                    <div className="text-right">
                      <div className="text-sm opacity-90">LEVEL</div>
                      <div className="text-3xl font-bold">Intermediate</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-blue-600/30 rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/SingleCarousel/AI/2.jpg"
                    alt="AI Tools Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-blue-100 mb-6">
                  Hands-On Training Session: Design your first AI application using no-coding approach with popular AI
                  tools and platforms.
                </p>
              </CardContent>
            </Card>

            {/* Challenge Level */}
            <Card className="bg-blue-800 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge className="bg-white text-blue-800 mb-2">CHALLENGE</Badge>
                    <div className="text-right">
                      <div className="text-sm opacity-90">LEVEL</div>
                      <div className="text-3xl font-bold">Advanced</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-blue-700/30 rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/SingleCarousel/AI/3.jpg"
                    alt="AI Project Implementation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-blue-100 mb-6">
                  Capstone Project: Solve a real world problem of your choice and implement AI-driven solutions for
                  business growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section className="relative z-10 px-4 py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Program Activities</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Engage with hands-on activities designed to build your AI expertise without coding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">AI Fundamentals</h3>
                <p className="text-blue-700 text-sm">
                  Understand core AI concepts through visual learning and interactive demonstrations
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Hands-on Tools</h3>
                <p className="text-blue-700 text-sm">
                  Work with popular no-code AI platforms to build real applications
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Team Collaboration</h3>
                <p className="text-blue-700 text-sm">
                  Foster cross-functional collaboration and AI literacy within organizations
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Real Solutions</h3>
                <p className="text-blue-700 text-sm">
                  Develop and implement AI models that solve actual business problems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-7xl mx-auto">
            <Testimonials />
        </div>
      </section>

    </div>
    <Footer />
                    </>
  )
}
