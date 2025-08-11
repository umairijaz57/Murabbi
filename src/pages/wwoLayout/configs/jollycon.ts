import { Award, Book, BookOpen, Calculator, Heart, Lightbulb, Palette, Search, TreePine, Trophy, Users, Wrench, Zap } from "lucide-react";
import { ProgramConfig } from "../interface";

export const jollyPhonicsConfig: ProgramConfig = {
  title: "Jolly Phonics",
  subtitle: "Discover the joy of reading through",
  description: "interactive phonics, creative crafts, and STEM projects. Build letter sounds, create amazing projects, and develop lifelong learning skills in our exciting summer camp.",
  features: [
    "Letter Sound Mastery",
    "Electronic Projects",
    "Creative Arts", 
    "Active Learning"
  ],
  periodLabel: "Week",
  journeyTitle: "3-Week Learning Adventure",
  journeyDescription: "From foundation phonics to advanced projects, experience a complete learning journey that combines education with fun.",
  programData: {
    1: {
      period: "Week 1", 
      title: "Foundation Sounds & First Projects",
      activities: [
        {
          id: "letter-sounds",
          title: "Jolly Phonics Groups 1-3",
          description: "Master the first letter sound groups with fun activities and interactive games that bring phonics to life.",
          icon: Book,
        },
        {
          id: "electronic-intro",
          title: "Electronic Kit Adventures", 
          description: "Start your science journey with LED glow activities and blinking light projects that spark curiosity.",
          icon: Lightbulb,
        },
        {
          id: "creative-crafts",
          title: "Creative Arts & Crafts",
          description: "Make stick octopus, beautiful paper flowers, and express creativity through rock painting activities.",
          icon: Palette,
        },
        {
          id: "active-play",
          title: "Active Sports & Games",
          description: "Get moving with sack races and math activities that combine learning with physical fun.",
          icon: Trophy,
        },
      ],
    },
    2: {
      period: "Week 2",
      title: "Advanced Sounds & Engineering", 
      activities: [
        {
          id: "phonics-hunt",
          title: "Jolly Phonics Groups 4-5",
          description: "Explore advanced phonics through sound hunts, bingo games, and exciting relay races that reinforce learning.",
          icon: Search,
        },
        {
          id: "engineering-projects",
          title: "Build & Create Projects",
          description: "Construct intruder alarms, electromagnets, and motors while learning basic engineering principles.",
          icon: Wrench,
        },
        {
          id: "nature-crafts", 
          title: "Nature & Art Fusion",
          description: "Build bird houses, create cactus handprint art, and connect with nature through creative expression.",
          icon: TreePine,
        },
        {
          id: "team-sports",
          title: "Team Sports & Skills", 
          description: "Master juggling techniques and engage in tug of war competitions that build teamwork and coordination.",
          icon: Users,
        },
      ],
    },
    3: {
      period: "Week 3",
      title: "Mastery & Innovation",
      activities: [
        {
          id: "advanced-phonics",
          title: "Jolly Phonics Groups 6-7",
          description: "Complete the phonics journey with advanced letter groups and comprehensive revision activities.",
          icon: Award,
        },
        {
          id: "power-generation",
          title: "Energy & Power Projects",
          description: "Create shake generators, lemon-powered lights, and empowering LED projects that demonstrate energy concepts.",
          icon: Zap,
        },
        {
          id: "math-mastery",
          title: "Math Through Play",
          description: "Reinforce mathematical concepts through hands-on activities and engaging problem-solving games.",
          icon: Calculator,
        },
        {
          id: "celebration-crafts",
          title: "Celebration & Memory Making",
          description: "End with card making, carrot stick cone crafts, and a memorable closing ceremony celebration.",
          icon: Heart,
        },
      ],
    },
  },
  highlights: [
    {
      icon: BookOpen,
      title: "Complete Phonics Mastery",
      description: "Master all 7 Jolly Phonics letter groups through interactive activities, games, and hands-on learning experiences",
    },
    {
      icon: Lightbulb,
      title: "STEM Innovation",
      description: "Build electronic projects, create motors, and explore energy generation through exciting hands-on experiments",
    },
    {
      icon: Palette,
      title: "Creative Expression", 
      description: "Develop artistic skills through crafts, painting, and creative projects that inspire imagination and creativity",
    },
    {
      icon: Users,
      title: "Active Learning Community",
      description: "Combine learning with sports, team activities, and social interaction in a supportive camp environment",
    },
  ],
  imageGallery: [
    { src: "/SingleCarousel/jolly/1.jpeg" },
    { src: "/SingleCarousel/jolly/2.jpeg" }, 
    { src: "/SingleCarousel/jolly/3.jpeg" },
  ],
  videoSrc: "/jolly.mp4",
  videoDescription: "Watch our Jolly Phonics navigate challenges and compete in exciting tasks.",
};