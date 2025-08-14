import { Footer } from "@/app/homeComponents";
import { ActivitiesSection } from "@/app/homeComponents/Activity";
import { Navbar } from "@/app/homeComponents/NavbarL";

export default function ZeroCodeAIPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      {/* Hero Section with Asymmetrical Design */}
      <header className="relative overflow-hidden">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent transform skew-x-12 translate-x-16"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-20">
    <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white text-center">
      Zero Coding AI Program
    </h1>

    <div className="relative flex justify-center">
      {/* Image */}
      <img
        src="/aidiploma/1.jpg"
        className="object-cover rounded-lg shadow-lg max-h-[400px] w-auto"
        alt="AI Program"
      />

      {/* Text Overlay */}
      <div className="h-screen absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-xl">
          <p className="text-white text-lg leading-relaxed text-center">
            How long does it take to design an AI application? Your AI application will be ready before your coffee order arrives.
            We offer a non-coding and non-mathematics based understanding of the AI world.
          </p>
        </div>
      </div>
    </div>
  </div>
</header>


      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Staggered Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Program Objectives - Large Card */}
          <section className="lg:col-span-8 lg:row-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="font-serif text-3xl font-bold text-blue-900 mb-8">Program Objectives</h2>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Enable participants to understand fundamental AI concepts without coding.
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Provide hands-on experience with popular no-code AI tools.
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Foster innovation by empowering non-technical staff to create AI-driven solutions.
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Promote cross-functional collaboration and AI literacy within organizations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Target Audience - Compact Card */}
          <section className="lg:col-span-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="font-serif text-2xl font-bold mb-6">Target Audience</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>IT & Digital Transformation Leaders</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>Non technical professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>Business Managers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>Marketing & Sales Teams</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>Product Managers & Business Owners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  <span>Human Resources Professionals</span>
                </div>
              </div>
            </div>
          </section>

          {/* Program Components - Overlapping Cards */}
          <section className="lg:col-span-7">
            <div className="relative">
              <h2 className="font-serif text-3xl font-bold text-blue-900 mb-8">Program Components</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">AI in One Slide:</h3>
                      <p className="text-gray-700">
                        Demystifying the AI world using as little as one slide. You will understand all the strategic
                        design choices involved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-20 -mt-2 ml-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Hands-On Training Session:</h3>
                      <p className="text-gray-700">Design your first AI application using no-coding approach</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-30 -mt-2 ml-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Capstone Project:</h3>
                      <p className="text-gray-700">Solve a real world problem of your choice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expected Outcomes - Floating Card */}
          <section className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-blue-900 mb-6">Expected Outcomes</h2>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Empowering managers to participate in strategic decisions related to AI products
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Enhanced collaboration and alignment between managers and technical teams
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Achieving a competitive edge by identifying AI-driven opportunities for business growth
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Capability to develop and implement real-world AI models with no-coding approach
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ActivitiesSection />
      <Footer />
    </div>
  )
}
