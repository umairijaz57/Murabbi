import { Calendar, Clock, MapPin, User } from "lucide-react"
import Link from "next/link"

export const GameDev = () => {
  return (
    <div className="space-y-8">
      {/* Course Title */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">Game Development with Unity</h2>
        <p className="text-sm md:text-base text-blue-700 font-medium">
          From Concept to Creation: Build Your Own 2D & 3D Games
        </p>
      </div>

      {/* Course Overview */}
      <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
        <p>
          Join a 5-day exploration of the exciting world of game design and development with Unity. From concept to
          creation, students will learn how to design levels, animate characters, write scripts, and build their very
          own 2D and 3D games.
        </p>
        <p>
          Through a mix of coding challenges, creative storytelling, and hands-on Unity projects, they'll gain
          real-world skills used by professional game developers. This first-of-its-kind workshop is designed to ignite
          creativity, strengthen coding skills, and introduce students to exciting career paths in game development,
          animation, and interactive media.
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
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 1: Introducing Unity</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Introduction to the Unity Interface and interaction with its different modules
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Brief Introduction to Unity Game Engine</li>
                    <li>• The Unity Game Engine & Made with Unity showcase</li>
                    <li>• Overview of Unity website, Documentation, and Tutorials</li>
                    <li>• Introduction to Interface / Unity Basics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Scene View, Game View, Project Browser</li>
                    <li>• Hierarchy window and Inspector</li>
                    <li>• Asset Import and Creation (Packages, Asset store)</li>
                    <li>• Build a scene using terrain with 3D objects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-purple-50 rounded">
                <p className="text-sm font-medium text-purple-900">
                  Project: Create a complete 3D environment for a game
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 2: Scenes and UI</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Build a scene using different scene components and learn how to design UI in games
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Game Objects, Prefabs, and Lights</li>
                    <li>• Cameras and viewing systems</li>
                    <li>• Basic shapes: Cubes/Spheres/Capsules</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Particle System implementation</li>
                    <li>• Audio integration and sound effects</li>
                    <li>• UI Components design and functionality</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium text-blue-900">Focus: Building interactive scenes with polished UI</p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 3: Gameplay and Scripts</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Learn how to create gameplay using scripts and bring your games to life
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Scripting Overview and Tools</li>
                    <li>• Variables and Inspector integration</li>
                    <li>• Physics systems in Unity</li>
                    <li>• Sprites and 2D elements</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Game objects manipulation</li>
                    <li>• Collision detection and response</li>
                    <li>• Animation systems</li>
                    <li>• Coroutines for advanced gameplay</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-50 rounded">
                <p className="text-sm font-medium text-green-900">
                  Milestone: Master the fundamentals of game scripting
                </p>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 4: The World of 2D</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                Build Your First 2D Game – From Concept to Playable Prototype
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• 2D game design principles</li>
                    <li>• Character movement and controls</li>
                    <li>• Collision systems for 2D games</li>
                    <li>• Scoring and game mechanics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Basic 2D animations</li>
                    <li>• Sound effects integration</li>
                    <li>• Polished visuals and UI</li>
                    <li>• Logic building and user experience</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-amber-50 rounded">
                <p className="text-sm font-medium text-amber-900">
                  <strong>Major Project:</strong> Complete working 2D game prototype with interactive gameplay
                </p>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 font-medium">Day 5: Enter 3D</div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Create a Basic 3D Game – Step into the Third Dimension</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Morning Session</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• 3D environment setup</li>
                    <li>• 3D models and manipulation</li>
                    <li>• Physics in 3D space</li>
                    <li>• Player movement and camera controls</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-sm mb-2">Afternoon Labs</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Basic lighting and materials</li>
                    <li>• 3D UI elements</li>
                    <li>• Complete 3D game (maze runner/obstacle course)</li>
                    <li>• Mini demo session and project showcase</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-red-50 rounded">
                <p className="text-sm font-medium text-red-900">
                  <strong>Final Project:</strong> Simple 3D game with demo presentation
                </p>
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