import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CyberSecurity() {
  return (
         <div className="space-y-8">
        {/* Course Title */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
            Cyber Security: Digital Defenders
          </h2>
          <p className="text-sm md:text-base text-blue-700 font-medium">
            A 5-Day Immersive Adventure into Information Security
          </p>
        </div>

        {/* Course Overview */}
        <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
          <p>
            A 5-day immersive adventure into the mysterious and thrilling world of information security. Through a mix
            of history, puzzles, hacking challenges, and real-world security tools, students will learn how to hide
            messages, break encryption ciphers, sniff networks, and explore the secrets behind cryptocurrencies and
            viruses.
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
              <MapPin className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Venue</p>
              <p className="font-medium">NUST-SEECS, H-12</p>
            </div>
          </div>
        </div>

        {/* Day Outline */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Workshop Schedule</h3>

          <div className="space-y-4">
            {/* Day 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2 font-medium">
                Day 1: Codebreakers' Legacy: Classical Ciphers Unlocked
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Survey ancient encryption techniques and how secret codes shaped history
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Morning Session</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Encryption techniques by Julius Caesar, Leonardo da Vinci</li>
                      <li>• George Washington, Mary Queen of Scots methods</li>
                      <li>• Sherlock Holmes, Al-Kindi, and other historical figures</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Build and break classical ciphers</li>
                      <li>• Demystifying Nazi Germany's Enigma machine</li>
                      <li>• Contest: The Alphabet Counting Race</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2 font-medium">
                Day 2: Secrets of Modern Encryption | The Virus Lab
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Dive into modern encryption and explore malicious code creation
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Morning Session</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Fundamentals of modern encryption</li>
                      <li>• Symmetric and asymmetric keys, block ciphers</li>
                      <li>• Mathematics of modern ciphers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Use Python/C to encrypt files and messages</li>
                      <li>• Build your own (safe!) virus</li>
                      <li>• Ethics Corner: When hacking can be good</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2 font-medium">
                Day 3: Hack the Net: Eavesdropping & Digital Sleuthing
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">Explore computer networks and learn to sniff data</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Morning Session</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• The Story of the Internet - brief history</li>
                      <li>• How core networking concepts evolved</li>
                      <li>• What Happens When You Click "Send"?</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Packet Sniffing 101 - spy on network traffic</li>
                      <li>• Trace Internet Routes (Ping & Traceroute)</li>
                      <li>• Presentation: Hacking Pakistan's Internet voting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2 font-medium">
                Day 4: Digital Fingerprints & Hacking Protocols
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Learn the power of hash functions and try your hand at hacking WiFi
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Morning Session</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Hash functions and digital fingerprints</li>
                      <li>• The Swiss Army knife of cryptography</li>
                      <li>• How Secure Is Your WiFi? WEP, WPA2, and beyond</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Hashing Games - create digital fingerprints</li>
                      <li>• Hack WiFi (demo tools, safe environment)</li>
                      <li>• Fighting Nigerian princes and scammers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 5: Cryptocurrencies Crash Course</div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">Discover the magic behind cryptocurrencies</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Morning Session</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• How Bitcoin Works - cryptocurrency basics</li>
                      <li>• Understanding blockchain technology</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Crypto transactions (demo environment)</li>
                      <li>• Careers in Cybersecurity & What Comes Next</li>
                      <li>• Certificates & Prizes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
