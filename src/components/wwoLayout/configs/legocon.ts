import { Activity, Award, Blocks, Clock, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { ProgramConfig } from "../interface";

export const legoLeagueConfig: ProgramConfig = {
  title: "LEGO League",
  subtitle: "Dive into the world of robotics and innovation with",
  description: "LEGO EV3 robots. Learn problem-solving, teamwork, and engineering principles through exciting challenges.",
  features: [
    "Hands-on Building",
    "Programming Skills",
    "Team Competitions", 
    "Real Tournaments"
  ],
  periodLabel: "Day",
  journeyTitle: "5-Day Activity Program",
  journeyDescription: "Experience an intensive journey from robot basics to championship competition with LEGO EV3 robots.",
  programData: {
    1: {
      period: "Day 1",
      title: "Robot Foundation & Speed",
      activities: [
        {
          id: "robot-boot",
          title: "5-Minute Robot Boot",
          description: "Quick introduction to LEGO EV3 robots. Learn basic controls and get your robot up and running in record time.",
          icon: Zap,
        },
      ],
    },
    2: {
      period: "Day 2",
      title: "Navigation & Sensors",
      activities: [
        {
          id: "obstacle-avoidance",
          title: "Obstacle Avoidance",
          description: "Program your robot to navigate around obstacles using sensors and smart algorithms.",
          icon: Navigation,
        },
        {
          id: "line-follower-1",
          title: "Line Follower",
          description: "Program your robot to follow complex paths using line-following sensors and algorithms.",
          icon: Activity,
        },
      ],
    },
    3: {
      period: "Day 3",
      title: "Speed & Climbing Challenges",
      activities: [
        {
          id: "slope-climbing",
          title: "Slope Climbing",
          description: "Challenge your robot to climb steep slopes. Master motor control and mechanical advantage.",
          icon: Mountain,
        },
        {
          id: "speed-racing-2",
          title: "Speed Racing Advanced",
          description: "Master advanced speed techniques and compete in timed races with precision control.",
          icon: Trophy,
        },
      ],
    },
    4: {
      period: "Day 4",
      title: "Combat Preparation",
      activities: [
        {
          id: "sumo-wrestling-1",
          title: "Ideal Bots Design", 
          description: "Learn to design and program your own Ideal Combat Bot. Explore the principles of strategic movement, durable engineering, and intelligent design to build a bot ready for battle.",
          icon: Sparkles,
        },
        {
          id: "sumo-wrestling-2",
          title: "Sumo Wrestling Training",
          description: "Build and program combat robots for sumo wrestling. Learn strategy and robust design principles.",
          icon: Users,
        },
      ],
    },
    5: {
      period: "Day 5",
      title: "Championship Day",
      activities: [
        {
          id: "sumo-competition",
          title: "Sumo Wrestling Championship",
          description: "The ultimate showdown! Compete in the grand sumo wrestling tournament and claim victory.",
          icon: Award,
        },
      ],
    },
  },
  highlights: [
    {
      icon: Blocks,
      title: "LEGO EV3 Robots",
      description: "Work with professional-grade LEGO Mindstorms EV3 robotics kits",
    },
    {
      icon: Clock,
      title: "5 Intensive Days",
      description: "Comprehensive program packed with hands-on activities and challenges",
    },
    {
      icon: Trophy,
      title: "Competition Ready",
      description: "Prepare for FIRST LEGO League competitions with real tournament experience",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Collaborate in teams and develop essential communication skills",
    },
  ],
  imageGallery: [
    { src: "/steamgallery/robotics/1.jpg", alt: "LEGO robot performing an action" },
    { src: "/steamgallery/robotics/2.jpg", alt: "LEGO robot in a competition" },
    { src: "/steamgallery/robotics/3.jpg", alt: "Close up of LEGO robot sensors" },
  ],
  videoSrc: "/robotics.mp4",
  videoDescription: "Watch our LEGO EV3 robots navigate challenges and compete in exciting tasks.",
};