import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Robotics() {
  return (
    <div className="space-y-8">
      {/* Course Title */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
          CODE.MOVE.SENSE: Robots in Action
        </h2>
        <p className="text-sm md:text-base text-blue-700 font-medium">
          Master Building Blocks of Robotics and Computer Vision
        </p>
      </div>

      {/* Course Overview */}
      <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
        <p>
          Join an immersive 5-day hands-on training program, designed to equip high school students with cutting-edge
          skills in robotics and computer vision—empowering them with key real-world technical competencies.
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
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 1: Kickoff + Intro to Robotics & ROS</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Introduce robotics principles, ROS architecture, and Linux essentials
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Introduction to robotics (components, types, applications)</li>
                    <li>• Overview of ROS architecture (nodes, topics, messages)</li>
                    <li>• Linux and Ubuntu basics for ROS users</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Installing ROS (Noetic or alternative version)</li>
                    <li>• Writing and running publisher/subscriber nodes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 2: ROS Packages and Sensor Integration
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Explore essential ROS tools/packages and integrate basic sensors with ROS nodes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Using ROS tools</li>
                    <li>• Introduction to common ROS packages</li>
                    <li>• ROS message types for sensors</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Connect and read from ultrasonic or IR sensors</li>
                    <li>• Simulate sensor feedback with Turtlesim</li>
                    <li>• Visualize and display sensor data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 3: Robot Control and Navigation</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Enable real-time robot control and introduce basic navigation using sensor input
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Creating ROS nodes for robot motion</li>
                    <li>• Interfacing with hardware: wheels, motors, encoders</li>
                    <li>• Introduction to navigation concepts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Control a robot to move based on sensor data</li>
                    <li>• Obstacle avoidance</li>
                    <li>• Navigation in a maze using distance sensors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 4: Computer Vision with OpenCV + ROS
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Learn to capture and process camera data using OpenCV, integrated with ROS
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• OpenCV basics (image capture, color spaces, filtering)</li>
                    <li>• Camera calibration and streaming in ROS</li>
                    <li>• Writing image subscriber nodes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Live camera stream processing</li>
                    <li>• Color tracking (detect and follow colored objects)</li>
                    <li>• Overlay processed images using OpenCV + ROS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 5: Mini Project + Demos</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Apply learned concepts to build and demonstrate a complete robot task
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project planning: groups select a task</li>
                    <li>• Guided development with mentor support</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project demos and presentations</li>
                    <li>• Peer and instructor feedback</li>
                    <li>• Certificates & Prizes</li>
                  </ul>
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

