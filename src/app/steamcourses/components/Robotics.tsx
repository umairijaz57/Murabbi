"use client"

import { Calendar, Clock, MapPin, Award, CheckCircle } from "lucide-react"

const dailyProgram = [
  {
    day: 1,
    title: "Intro to Robotics & ROS",
    activities: ["ROS basics, Linux commands", "Install & run publisher/subscriber nodes"],
  },
  {
    day: 2,
    title: "Sensor Integration",
    activities: ["Work with Arduino, Ultrasonic/IR sensors", "Simulate sensor data using Turtlesim"],
  },
  {
    day: 3,
    title: "Robot Control & Navigation",
    activities: ["Motor control using ROS nodes", "Obstacle avoidance and maze navigation"],
  },
  { day: 4, title: "OpenCV with ROS", activities: ["Live video stream processing", "Color tracking & image overlays"] },
  {
    day: 5,
    title: "Project + Demos",
    activities: ["Build and showcase mini projects", "Certificates, prizes, and feedback"],
  },
]

export function Robotics() {
  return (
    <div className="text-left ">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-600 mb-3">
          Dive into the Future: Robotics & Computer Vision Bootcamp for Teens
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A <strong>5-day immersive training program</strong> designed for high schoolers (ages 14–18), introducing them
          to advanced robotics, computer vision, and AI using <strong>OpenCV and Robot Operating System (ROS)</strong> —
          the same tools used by global tech leaders. Conducted by a top-tier expert, this hands-on workshop combines
          theory, labs, group projects, and expert talks.
        </p>

        {/* Key Info */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>
              <strong>NUST-SEECS, H-12</strong>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>
              <strong>July 21–25</strong>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>
              <strong>10AM–4PM</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Daily Outline */}
      <div>
        <h4 className="text-base font-bold text-blue-600 mb-4">Tentative Daily Outline:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dailyProgram.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {day.day}
                </div>
                <h5 className="font-bold text-gray-900 text-sm">{day.title}</h5>
              </div>
              <ul className="space-y-1">
                {day.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Get */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h4 className="text-base font-bold text-blue-600 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4" />
          What You'll Get:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Certificate of completion",
            "Real-world project experience",
            "Hands-on with OpenCV & ROS",
            "Expert mentorship & guidance",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
