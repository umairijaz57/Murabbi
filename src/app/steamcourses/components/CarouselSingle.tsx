import { useEffect, useState } from "react";
import React from "react";
import { CustomButton } from "./CustomBtn";

type CarouselSingleProps = {
  containerClass: string;
  items: React.ReactNode[];
  nextButton?: React.ReactNode;
  prevButton?: React.ReactNode;
  autoScroll?: boolean;
  delay?: number;
  onIndexChange?: (index: number) => void;
};

export const CarouselSingle: React.FC<CarouselSingleProps> = ({
  containerClass,
  items,
  autoScroll = false,
  delay = 3000,
  onIndexChange = () => {},
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (!autoScroll || paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, delay);

    return () => clearInterval(id);
  }, [autoScroll, paused, delay, items.length]);

  useEffect(() => {
    onIndexChange(index);
  }, [index, onIndexChange]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % items.length);
  };


  return (
    <>
    <div
      className={`relative w-full h-full overflow-hidden ${containerClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
          key={i}
            className="w-full h-full flex-shrink-0 flex justify-center items-center"
            style={{ minWidth: '100%' }}
          >
            {item}
          </div>
        ))}
      </div>

      {items.length > 1 &&(
        <div 
  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-3/2 z-10" 
  onClick={handleNext}
>
  <CustomButton />
</div>
      )}
      </div>

          </>
  );
};