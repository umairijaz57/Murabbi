import { useState, useEffect, useRef } from "react";

interface Props {
  progress: number;
  heading:string;
}

const Bar = (props: Props) => {
  const [offset, setOffset] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (barRef.current) {
      intersectionObserver.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        intersectionObserver.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const circumference = 2 * Math.PI * 45;
    const progressOffset = (props.progress / 100) * circumference;
    setOffset(isAnimating ? progressOffset : 0);

    const increment = props.progress / 100;
    let current = 0;

    const intervalId = setInterval(() => {
      if (isAnimating) {
        current += increment;
        setCurrentProgress(Math.round(current));

        if (current >= props.progress) {
          clearInterval(intervalId);
        }
      }
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.progress, isAnimating]);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <>
      <div className="relative inline-block" onClick={handleClick} ref={barRef}>
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="6"
            stroke="#e0e0e0"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="6"
            stroke="#305AA5"
            strokeDasharray="283"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{
              strokeDashoffset: 283 - offset,
              transition: "stroke-dashoffset 1s ease-in-out"
            }}
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-blue-600 text-center">
          <div className="text-3xl">{currentProgress}</div>
          <div className="text-sm font-semibold">{props.heading}</div>
        </span>
      </div>
    </>
  );
};

const RadialProgressBar: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-20">
      <Bar progress={1} heading="Training" />
      <Bar progress={15} heading="Students" />
      <Bar progress={5} heading="Mentors"/>
    </div>
  );
};

export default RadialProgressBar;
