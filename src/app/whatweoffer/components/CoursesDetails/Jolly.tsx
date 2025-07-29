import { MapPin, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Jolly = () => {
  return (
    <div className="space-y-8">
      {/* Course Title */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">Murabbi's Jolly Phonics Camp</h2>
        <p className="text-sm md:text-base text-blue-700 font-medium">
          Joyful Early Literacy Adventure for Young Learners (Ages 4-6)
        </p>
      </div>

      {/* Course Overview */}
      <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
        <p>
          Welcome to Murabbi's Jolly Phonics Camp! Get ready for a joyful and enriching experience designed especially
          for kids aged 4 to 6. Hosted by Murabbi, this summer camp focuses on early literacy through the renowned Jolly
          Phonics program, paired with fun-filled activities in arts & crafts, science exploration, mathematics, and
          sports.
        </p>
        <p>
          Our camp creates the perfect blend of learning and play, ensuring young minds develop essential literacy
          skills while having an absolute blast with hands-on activities and creative projects.
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
            <p className="font-medium">Young Children (ages 4-6)</p>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Venue</p>
            <p className="font-medium">NUST-SEECS Campus</p>
          </div>
        </div>
      </div>


      {/* Weekly Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-4">3-Week Activity Summary</h3>

        <div className="space-y-6">
          {/* Week 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 1: Foundation & Fun</h4>
              <p className="text-sm opacity-90">Building literacy basics with exciting activities</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {/* Monday */}
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-green-900">Monday (June 16) - Grand Opening!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Opening Ceremony & Welcome</li>
                    <li>• Jolly Phonics – Letter Sounds Group 1</li>
                    <li>• Intro to Science Project (Electronic Kit)</li>
                  </ul>
                </div>

                {/* Tuesday */}
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-blue-900">Tuesday (June 17) - Light It Up!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 2</li>
                    <li>• LED Glow Activity</li>
                    <li>• Craft: Stick Octopus Creation</li>
                  </ul>
                </div>

                {/* Wednesday */}
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-purple-900">Wednesday (June 18) - Blink & Race!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 3</li>
                    <li>• Blink Light Project</li>
                    <li>• Sack Race Fun</li>
                  </ul>
                </div>

                {/* Thursday */}
                <div className="bg-amber-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-amber-900">Thursday (June 19) - Art & Numbers!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Tricky Words Group 1–2</li>
                    <li>• Paper Flowers Art</li>
                    <li>• Math Activity</li>
                  </ul>
                </div>

                {/* Friday */}
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-pink-900">Friday (June 20) - Creative Friday!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phonics Revision</li>
                    <li>• Rock Painting</li>
                    <li>• Math Activity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 2: Exploration & Discovery</h4>
              <p className="text-sm opacity-90">Advanced phonics with hands-on science projects</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {/* Monday */}
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-blue-900">Monday (June 23) - Build & Create!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 4</li>
                    <li>• Intruder Alarm Project</li>
                    <li>• Build a Bird House</li>
                  </ul>
                </div>

                {/* Tuesday */}
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-cyan-900">Tuesday (June 24) - Hunt & Play!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phonics Sound Hunt</li>
                    <li>• Math Activity</li>
                    <li>• Juggling (Sports)</li>
                  </ul>
                </div>

                {/* Wednesday */}
                <div className="bg-teal-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-teal-900">Wednesday (June 25) - Magnets & Teamwork!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phonics Bingo</li>
                    <li>• Create Electromagnet</li>
                    <li>• Tug of War</li>
                  </ul>
                </div>

                {/* Thursday */}
                <div className="bg-emerald-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-emerald-900">Thursday (June 26) - Motors & Art!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 5</li>
                    <li>• Create a Motor</li>
                    <li>• Cactus Handprint Art</li>
                  </ul>
                </div>

                {/* Friday */}
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-green-900">Friday (June 27) - Race & Paint!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phonics Relay Race</li>
                    <li>• Math Activity</li>
                    <li>• Painting Session</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Week 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h4 className="font-bold text-lg">Week 3: Mastery & Celebration</h4>
              <p className="text-sm opacity-90">Advanced skills and grand finale celebration</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {/* Monday */}
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-purple-900">Monday (June 30) - Power Up!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 6</li>
                    <li>• Math Activity</li>
                    <li>• Shake Generator Project</li>
                  </ul>
                </div>

                {/* Tuesday */}
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-pink-900">Tuesday (July 1) - Natural Power!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Tricky Words Group 3–5</li>
                    <li>• Lemon Powered Light</li>
                    <li>• Card Making</li>
                  </ul>
                </div>

                {/* Wednesday */}
                <div className="bg-rose-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-rose-900">Wednesday (July 2) - Team Challenge!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Jolly Phonics Group 7</li>
                    <li>• Math Activity</li>
                    <li>• 3-Legged Race</li>
                  </ul>
                </div>

                {/* Thursday */}
                <div className="bg-fuchsia-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-fuchsia-900">Thursday (July 3) - LED Magic!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Tricky Words Group 6–7</li>
                    <li>• Empowering LED Project</li>
                    <li>• Math Activity</li>
                  </ul>
                </div>

                {/* Friday */}
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2 text-red-900">Friday (July 4) - Grand Finale!</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phonics Revision</li>
                    <li>• Carrot Stick Cone Craft</li>
                    <li>• Closing Ceremony & Celebration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
