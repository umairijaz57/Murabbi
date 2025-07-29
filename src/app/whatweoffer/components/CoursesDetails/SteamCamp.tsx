import { Calendar, Clock, MapPin, User, UserCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SteamCamp() {
  return (
    <div className="space-y-8">
      {/* Course Txitle */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
          STEAM Summer Camp: Complete Innovation Experience
        </h2>
        <p className="text-sm md:text-base text-blue-700 font-medium">
          3-Week Comprehensive Program: Technology, Arts, Sports & More
        </p>
      </div>

      {/* Course Overview */}
      <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
        <p>
          Join our ultimate 3-week STEAM summer camp that combines the best of Science, Technology, Engineering, Arts,
          and Mathematics. Students will experience robotics, AI, cybersecurity, creative arts, sports, and leadership
          activities in one comprehensive program designed to nurture well-rounded innovators.
        </p>
        <p>
          This holistic approach ensures students not only master technical skills but also develop creativity, physical
          fitness, and social skills essential for future success.
        </p>
      </div>

      {/* Course Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <User className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Audience</p>
            <p className="font-medium">High School (ages 14-18)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <Calendar className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">3 Weeks (15 days)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <Clock className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <p className="font-medium">9AM – 5PM (with breaks & lunch)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Venue</p>
            <p className="font-medium">NUST-SEECS Campus & Sports Complex</p>
          </div>
        </div>
      </div>

      {/* Weekly Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-4">3-Week Program Structure</h3>

        <div className="space-y-6">
          {/* Week 1 - Robotics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className=" bg-blue-600  text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 1: Robotics & Computer Vision</h4>
              <p className="text-sm opacity-90">CODE.MOVE.SENSE: Robots in Action</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-blue-900">Days 1-2: ROS & Robotics Fundamentals</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Introduction to robotics and ROS architecture</li>
                      <li>• Linux basics and sensor integration</li>
                      <li>• Publisher/subscriber nodes</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-green-900">Days 3-4: Robot Control & Navigation</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Real-time robot control and motion</li>
                      <li>• Computer vision with OpenCV + ROS</li>
                      <li>• Obstacle avoidance and navigation</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-purple-900">Day 5: Mini Robotics Project</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Team project development</li>
                      <li>• Robot demos and presentations</li>
                      <li>• Peer feedback sessions</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-orange-900">Special Activities</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Day 2: Sports session (Cricket/Football)</li>
                      <li>• Day 4: Calligraphy workshop</li>
                      <li>• Daily: Morning assembly & team building</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2 - Cybersecurity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 2: Cybersecurity & Digital Defense</h4>
              <p className="text-sm opacity-90">Digital Defenders: Information Security Adventure</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-red-900">Days 6-7: Classical & Modern Encryption</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Historical ciphers and codebreaking</li>
                      <li>• Modern encryption and virus lab</li>
                      <li>• Cryptography mathematics</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-amber-900">Days 8-9: Network Security & Hacking</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Network protocols and packet sniffing</li>
                      <li>• WiFi security and ethical hacking</li>
                      <li>• Hash functions and digital fingerprints</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-yellow-900">Day 10: Cryptocurrency & Blockchain</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Bitcoin and blockchain technology</li>
                      <li>• Cryptocurrency transactions</li>
                      <li>• Cybersecurity career paths</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-pink-900">Special Activities</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Day 7: Art & Design workshop</li>
                      <li>• Day 9: Swimming & fitness session</li>
                      <li>• Daily: Leadership development activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 3 - AI */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 3: Artificial Intelligence & Innovation</h4>
              <p className="text-sm opacity-90">Smart Systems: AI Journey & Final Projects</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-blue-900">Days 11-12: AI Fundamentals & Vision</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Python programming and AI chatbots</li>
                      <li>• Image recognition and computer vision</li>
                      <li>• Neural networks and machine learning</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-green-900">Days 13-14: Advanced AI & Projects</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Voice cloning and deepfake detection</li>
                      <li>• Sentiment analysis and NLP</li>
                      <li>• Multi-disciplinary capstone projects</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-emerald-900">Day 15: Innovation Fair & Graduation</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Final project presentations</li>
                      <li>• Innovation awards ceremony</li>
                      <li>• Graduation and certificates</li>
                    </ul>
                  </div>
                  <div className="bg-violet-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-violet-900">Special Activities</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Day 12: Traditional calligraphy session</li>
                      <li>• Day 14: Sports tournament finals</li>
                      <li>• Day 15: Art exhibition opening</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Registration Button */}
      <div className="text-center">
        <Link href={"https://rb.gy/0i3502"} target='_blank'>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Register Now
        </button>
        </Link>
      </div>
    </div>
  )

}
