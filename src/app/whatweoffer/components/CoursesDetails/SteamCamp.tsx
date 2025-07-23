import { Calendar, Clock, MapPin, User, UserCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SteamCamp() {
  return (
    <div className="space-y-8">
      {/* Course Title */}
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
            <UserCircle2 className="h-5 w-5 text-blue-700" />
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
          {/* Week 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600  text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 1: Technology Foundation</h4>
              <p className="text-sm opacity-90">Robotics, AI Basics, and Digital Creativity</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-blue-900">Days 1-2: Robotics Fundamentals</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Introduction to ROS and robot programming</li>
                      <li>• Build and control basic robots</li>
                      <li>• Sensor integration and navigation</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-green-900">Days 3-4: AI & Machine Learning</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Python programming and AI basics</li>
                      <li>• Build chatbots and image recognition</li>
                      <li>• Computer vision projects</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-purple-900">Day 5: Creative Arts Integration</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Digital art and design principles</li>
                      <li>• 3D modeling and printing basics</li>
                      <li>• Tech-art fusion projects</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-orange-900">Daily Activities</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Morning sports (30 mins)</li>
                      <li>• Afternoon team building</li>
                      <li>• Evening reflection sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600  text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 2: Security & Creative Expression</h4>
              <p className="text-sm opacity-90">Cybersecurity, Arts, and Physical Activities</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-red-900">Days 6-8: Cybersecurity Deep Dive</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Classical and modern encryption</li>
                      <li>• Network security and ethical hacking</li>
                      <li>• Cryptocurrency and blockchain</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-pink-900">Days 9-10: Arts & Calligraphy</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Traditional calligraphy techniques</li>
                      <li>• Digital typography and design</li>
                      <li>• Cultural art exploration</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-yellow-900">Sports & Physical Activities</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Cricket and football sessions</li>
                      <li>• Swimming and fitness training</li>
                      <li>• Team sports tournaments</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-indigo-900">Leadership Development</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Public speaking workshops</li>
                      <li>• Project management basics</li>
                      <li>• Peer mentoring activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600  text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 3: Integration & Innovation</h4>
              <p className="text-sm opacity-90">Capstone Projects, Competitions, and Showcase</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-emerald-900">Days 11-13: Capstone Projects</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Multi-disciplinary team projects</li>
                      <li>• Combine tech, arts, and innovation</li>
                      <li>• Mentor-guided development</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-cyan-900">Day 14: Innovation Fair</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Project presentations and demos</li>
                      <li>• Peer and expert judging</li>
                      <li>• Innovation awards ceremony</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-rose-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-rose-900">Day 15: Grand Finale</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Sports tournament finals</li>
                      <li>• Art exhibition opening</li>
                      <li>• Graduation ceremony</li>
                    </ul>
                  </div>
                  <div className="bg-violet-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2 text-violet-900">Special Features</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Industry expert guest lectures</li>
                      <li>• University campus tours</li>
                      <li>• Career guidance sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Prerequisites */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Prerequisites & Requirements</h4>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• Basic programming knowledge (Python preferred)</li>
          <li>• Enthusiasm for learning and creativity</li>
          <li>• Sports attire and equipment</li>
          <li>• Laptop, notebook, and art supplies</li>
        </ul>
      </div>

      {/* Special Features */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">What Makes This Program Unique:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
            <li>• Complete STEAM education in one program</li>
            <li>• Balance of technical and creative skills</li>
            <li>• Physical fitness and sports integration</li>
            <li>• Leadership and soft skills development</li>
          </ul>
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
            <li>• Multi-disciplinary capstone projects</li>
            <li>• Industry expert mentorship</li>
            <li>• Cultural arts and calligraphy</li>
            <li>• Innovation fair and competitions</li>
          </ul>
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
