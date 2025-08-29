import React, { useState, useEffect } from 'react';
import { Users, Globe, FlaskConical, Rocket } from 'lucide-react';
import ForeignLanguageCourses from './Languages';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime:any;
    let animationFrame:any;
    
    const animate = (timestamp:any) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return <span>{prefix}{count}{suffix}</span>;
};

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-xl border border-blue-100 transform transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-900 bg-opacity-10 rounded-full p-4">
          <Icon className="w-8 h-8 text-blue-900" />
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-900 mb-2">
          {isVisible && <AnimatedCounter end={parseInt(value)} suffix="+" />}
        </div>
        <div className="text-blue-900 text-opacity-70 font-medium text-lg">
          {label}
        </div>
      </div>
    </div>
  );
};

interface StatData {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
}

export default function Internships(): JSX.Element {
  const stats: StatData[] = [
    {
      icon: Users,
      value: "100",
      label: "Qualified Faculty",
      delay: 200
    },
    {
      icon: Globe,
      value: "20",
      label: "Countries",
      delay: 400
    },
    {
      icon: FlaskConical,
      value: "20",
      label: "Research Labs",
      delay: 600
    },
    {
      icon: Rocket,
      value: "15",
      label: "Startups",
      delay: 800
    }
  ];
  
  return (
    <div className="pb-32 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
             Internships at Research Labs
          </h1>
          <p className="text-xl text-blue-900 text-opacity-70">
           What to decide which country/university to choose for higher
          education?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
      </div>
    </div>
      
  );
}