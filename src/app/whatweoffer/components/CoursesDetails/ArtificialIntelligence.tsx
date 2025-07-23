import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ArtificialIntelligence() {
  return (
    <div className="space-y-8">
      {/* Course Title */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
          Artificial Intelligence: Smart Systems
        </h2>
        <p className="text-sm md:text-base text-blue-700 font-medium">A 5-Day Immersive Journey into the World of AI</p>
      </div>

      {/* Course Overview */}
      <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
        <p>
          A 5-day immersive journey into the thrilling world of artificial intelligence. Through interactive projects
          and real-world tools students will learn how to build chatbots, train AI models, detect deepfakes, and explore
          the future of machine learning.
        </p>
        <p>This hands-on workshop, designed by an AI specialist, will spark curiosity and inspire future innovators.</p>
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
              Day 1: AI Awakening – Python & Rule-Based Bots
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Python programming recap and build your first AI assistant</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Why AI? How AI and ML are changing the world</li>
                    <li>• Python Crash Course using Google Colab</li>
                    <li>• Variables, loops, functions basics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project: Build a Pizza-ordering Chatbot</li>
                    <li>• Challenge: Make the bot multilingual</li>
                    <li>• Urdu & English responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 2: AI Vision – Image Recognition & Filters
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Train AI to 'see' and manipulate images</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• How does AI recognize faces, objects, and memes?</li>
                    <li>• Introducing Convolutional Neural Networks</li>
                    <li>• Can AI guess your doodles?</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project: Train an Emoji Translator</li>
                    <li>• Detect facial expressions → suggest emojis</li>
                    <li>• Apply Instagram-style filters in real-time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 3: AI Ears – Voice Cloning & Deepfake Detectives
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Make AI speak, sing, and catch liars</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• How do Siri and Alexa work?</li>
                    <li>• Natural Language Processing & speech synthesis</li>
                    <li>• Demo: AI-generated voices (fake Biden/Trump clips)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project: AI Voice Changer</li>
                    <li>• Record your voice → mimic a celebrity</li>
                    <li>• Challenge: "Real or Fake?" Game</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 4: AI Writers – Sentiment Analysis & Fake News
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Teach AI to write and detect deception</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• How ChatGPT works? Large language models</li>
                    <li>• Case Study: AI-generated news articles</li>
                    <li>• Can you spot the fake one?</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Project: Movie Review Sentiment Analyzer</li>
                    <li>• Is this comment 😊 or 😞?</li>
                    <li>• Challenge: Write AI-generated poetry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">
              Day 5: AI Showdown – Hackathon & Career Paths
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Explore the AI/ML ecosystem and future paths for yourself</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• AI in the Wild: Self-driving cars, medical AI</li>
                    <li>• Robot chefs and more applications</li>
                    <li>• Career Talk: How to become an AI researcher/engineer</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Hackathon: Build Your Own Mini-AI Project</li>
                    <li>• Ideas and guidance provided</li>
                    <li>• Certificates & Prizes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
        <Link href={"https://rb.gy/0i3502"} target='_blank'>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Register Now
        </button>
        </Link>
      </div>
      </div>
    </div>
  )
}
