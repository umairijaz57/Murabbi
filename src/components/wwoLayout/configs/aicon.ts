import { Bot, Brain, Clock, Eye, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { ProgramConfig } from "../interface";

export const aiMasteryConfig: ProgramConfig = {
  title: "AI Mastery",
  subtitle: "Unlock the power of artificial intelligence through",
  description: "hands-on projects and competitions. Master AI concepts, build intelligent systems, and compete against both humans and machines.",
  features: [
    "Chatbot Development",
    "Computer Vision", 
    "AI Competition",
    "Creative AI Projects"
  ],
  periodLabel: "Day",
  journeyTitle: "5-Day AI Journey",
  journeyDescription: "From building your first chatbot to competing against AI systems in the ultimate showdown.",
  programData: {
    1: {
      period: "Day 1",
      title: "AI Foundations & Chatbots",
      activities: [
        {
          id: "personal-chatbot",
          title: "Create Your Own Personal Chatbot",
          description: "Build an intelligent chatbot from scratch. Learn natural language processing and conversational AI principles.",
          icon: Bot,
        },
      ],
    },
    2: {
      period: "Day 2", 
      title: "Creative AI",
      activities: [
        {
          id: "ai-stories",
          title: "Bring Stories To Life With AI",
          description: "Use AI to generate interactive narratives and bring your imagination to life with intelligent storytelling.",
          icon: Sparkles,
        },
      ],
    },
    3: {
      period: "Day 3",
      title: "Nature Intelligence", 
      activities: [
        {
          id: "learn-from-ants",
          title: "What Do We Learn from Ants?",
          description: "Explore swarm intelligence and how ant colonies inspire AI algorithms and collective problem-solving.",
          icon: Brain,
        },
        {
          id: "human-vs-ants",
          title: "Human vs Ants: Who Will Win?", 
          description: "A fascinating finale comparing human intelligence with ant colony algorithms in strategic problem-solving.",
          icon: Users,
        },
      ],
    },
    4: {
      period: "Day 4",
      title: "Surveillance Intelligence",
      activities: [
        {
          id: "surveillance-system",
          title: "Intelligent Surveillance System Design",
          description: "Design smart surveillance systems using computer vision and AI detection algorithms.",
          icon: Eye,
        },
      ],
    },
    5: {
      period: "Day 5",
      title: "Ultimate AI Showdown",
      activities: [
        {
          id: "ai-vs-human", 
          title: "AI vs Human: Who Will Win?",
          description: "The ultimate competition! Test your skills against AI in various challenges and see who comes out on top.",
          icon: Zap,
        },
      ],
    },
  },
  highlights: [
    {
      icon: Brain,
      title: "AI Fundamentals",
      description: "Learn core concepts of artificial intelligence and machine learning",
    },
    {
      icon: Clock,
      title: "5 Intensive Days", 
      description: "Comprehensive program packed with hands-on AI projects and competitions",
    },
    {
      icon: Trophy,
      title: "Real-World Applications",
      description: "Build practical AI solutions for surveillance, gaming, and creative projects",
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Collaborate in teams and compete in AI vs Human challenges",
    },
  ],
  imageGallery: [
    { src: "/steamgallery/ai/1.jpg" },
    { src: "/steamgallery/ai/2.jpg" },
    { src: "/steamgallery/ai/3.jpg" },
  ],
};