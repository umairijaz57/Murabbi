import React, { useState, useEffect } from 'react';
import { Globe, BookOpen, Star } from 'lucide-react';

interface CourseCardProps {
  flag: string;
  language: string;
  level: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ flag, language, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition-all duration-1000 hover:scale-105 hover:shadow-xl ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div className="flex items-center space-x-4">
        <div className="text-4xl">
            <img src={flag} alt="" className='rounded-full w-12 h-12'/>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-900">{language}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm font-medium text-blue-900 bg-blue-50 px-2 py-1 rounded-full">
              Level {level}
            </span>
          </div>
        </div>
        <div className="text-blue-900 opacity-50">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default function ForeignLanguageCourses(): JSX.Element {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    { flag: "/flags/arabic.png", language: "Arabic Language Course", level: "A-1.1", delay: 200 },
    { flag: "/flags/France.png", language: "French Language Course", level: "A-1.1", delay: 300 },
    { flag: "/flags/Germany.png", language: "German Language Course", level: "A-1.1", delay: 400 },
    { flag: "/flags/Germany.png", language: "German Language Course", level: "A-1.2", delay: 500 },
    { flag: "/flags/Germany.png", language: "German Language Course", level: "A-2.1", delay: 600 },
    { flag: "/flags/turkey.png", language: "Turkish Language Course", level: "A-1.1", delay: 700 }
  ];
  
  return (
        <div className={`transform transition-all max-w-7xl m-auto duration-1000 ${ 
          showContent ? 'translate-y-0 opacity-100 ' : 'translate-y-12 opacity-0'
        }`}>
          <div className="rounded-3xl -8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Foreign Language Courses</h2>
              {/* <div className="max-w-4xl mx-auto text-blue-900 text-opacity-80 space-y-4">
                <p className="text-lg">
                  <span className="font-semibold">1.</span> We are thrilled to announce an exceptional opportunity to embark on a linguistic journey! Starting <span className="font-bold text-blue-900">Monday, September 15, 2025</span>, our interactive "Face-to-Face" language learning program will enable you to acquire a new language skill in a dynamic and engaging environment.
                </p>
                <p className="text-lg">
                  <span className="font-semibold">2.</span> This enriching experience will not only enhance your portfolio but also foster cultural understanding, allowing you to connect with diverse communities worldwide.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-900">
                  <p className="text-lg font-semibold text-blue-900">
                    <span className="font-bold">3. Don't miss this chance!</span> Secure your spot promptly, as seats are limited. We strongly encourage early enrollment to avoid disappointment.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">Available Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="w-6 h-6 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">Ready to Start?</span>
              <Star className="w-6 h-6 text-blue-900" />
            </div>
            <p className="text-blue-900 text-opacity-80 font-medium">
              <span className="font-semibold">4.</span> We kindly request that you consider enrolling in the above-mentioned courses for your language learning needs.
            </p>
          </div> */}
        </div>
  );
}