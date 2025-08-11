import { AudioWaveformIcon, BookOpenCheck, BookTextIcon, Clock, FlagIcon, PuzzleIcon, SearchIcon, ShieldCheck, ShieldIcon, TrophyIcon, Users } from "lucide-react";
import { ProgramConfig } from "../interface";

export const cyberSecretsConfig: ProgramConfig = {
  title: "Cyber Secrets",
  subtitle: "Uncover the hidden world of cybersecurity through",
  description: "ancient secrets and modern tech. Dive into hands-on code-making, code-breaking, and virtual missions where you think like a hacker, a spy, and a legend.",
  features: [
    "Code Breaking",
    "Ancient Encryption", 
    "Spy Tactics",
    "Virtual Reality"
  ],
  periodLabel: "Day",
  journeyTitle: "5-Day Cyber Journey", 
  journeyDescription: "From ancient codes to modern cybersecurity challenges.",
  programData: {
    1: {
      period: "Day 1",
      title: "Code, Cipher & Da Vinci",
      activities: [
        {
          id: "da-vinci-codes",
          title: "Leonardo da Vinci's Secret Codes",
          description: "Discover and decode da Vinci's mysterious encryption techniques and apply them to your own secret messages.",
          icon: PuzzleIcon,
        },
      ],
    },
    2: {
      period: "Day 2",
      title: "Ancient Encryption & Morse Code",
      activities: [
        {
          id: "ancient-encryption",
          title: "Encryption Techniques from Greece and Rome",
          description: "Travel back in time to explore ancient encryption methods and how they relate to modern digital security.",
          icon: ShieldIcon,
        },
        {
          id: "morse-code",
          title: "Crack the Morse Code", 
          description: "Master the art of dots and dashes. Learn how Morse Code shaped secret communication across history.",
          icon: AudioWaveformIcon,
        },
      ],
    },
    3: {
      period: "Day 3",
      title: "Language, Symbols & Spy Secrets",
      activities: [
        {
          id: "pictogram-language",
          title: "From Pictograms to Language",
          description: "Understand how ancient pictograms evolved into language and how symbolic systems still influence encryption today.",
          icon: BookTextIcon,
        },
        {
          id: "washington-secrets",
          title: "George Washington's Encryption Tactics", 
          description: "Learn the clever spy techniques used during the American Revolution and create your own patriotic ciphers.",
          icon: FlagIcon,
        },
      ],
    },
    4: {
      period: "Day 4",
      title: "Virtual Reality & Calligraphy Lab",
      activities: [
        {
          id: "sherlock-cipher",
          title: "Crack the Code with Sherlock Holmes",
          description: "Put your logic and codebreaking skills to the test with mystery puzzles inspired by Sherlock Holmes.",
          icon: SearchIcon,
        },
      ],
    },
    5: {
      period: "Day 5",
      title: "The Final Cipher Challenge",
      activities: [
        {
          id: "cyber-sports",
          title: "The Code of Champions",
          description: "Engage in physical and mental challenges to refresh your skills and earn your title as Cyber Champion.",
          icon: TrophyIcon,
        },
      ],
    },
  },
  highlights: [
    {
      icon: ShieldCheck,
      title: "Cybersecurity Foundations",
      description: "Explore the core principles of secure coding, encryption, and cyber defense inspired by ancient and modern techniques",
    },
    {
      icon: Clock,
      title: "5 Action-Packed Days", 
      description: "Dive into hands-on activities including codebreaking, spy tactics, virtual reality simulations, and more",
    },
    {
      icon: BookOpenCheck,
      title: "Historical Meets Digital",
      description: "Learn from Da Vinci, Washington, and Sherlock Holmes while applying their secrets to modern cyber challenges",
    },
    {
      icon: Users,
      title: "Immersive Learning",
      description: "Collaborate in teams, crack ciphers, and conquer mystery missions in an engaging, spy-style environment",
    },
  ],
  imageGallery: [
    { src: "/SingleCarousel/Cyber/1.jpg" },
    { src: "/SingleCarousel/Cyber/2.jpg" },
    { src: "/SingleCarousel/Cyber/3.jpg" },
  ],
  videoSrc: "/videosq.mp4",
  videoDescription: "See Our Cyber Security in Action!",
};