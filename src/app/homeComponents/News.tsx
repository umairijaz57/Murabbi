import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsitems } from '@/utils/newsitem';

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(newsitems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return newsitems.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-blue-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Latest News & Updates</h2>
        <p className="text-center text-gray-600">Stay updated with our recent activities and achievements</p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          disabled={totalSlides <= 1}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          disabled={totalSlides <= 1}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {newsitems
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((item, index) => (
                      <div key={slideIndex * itemsPerSlide + index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Image Container with proper aspect ratio handling */}
                        <div className="relative h-64 bg-gray-200 overflow-hidden">
                          <img
                            src={item.image}
                            alt={`News item ${slideIndex * itemsPerSlide + index + 1}`}
                            className="w-full h-full object-contain bg-gray-100"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                            }}
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-700 text-sm ">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-1 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-blue-600 scale-125 w-3'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSlider;