import React, { useEffect, useRef, useState } from "react";
import { MdCheck } from "react-icons/md";

type Props = { learn: string[] };

function Learn({ learn }: Props) {
  const firstColumn = learn.slice(0, 3);
  const secondColumn = learn.slice(3, 6);
  const [isLInView, setLIsInView] = useState(false);
  const left = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLIsInView(true);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (left.current) {
      observer.observe(left.current);
    }

    return () => {
      if (left.current) {
        observer.unobserve(left.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col md:flex-row md:justify-center md:gap-10 transition duration-500 ${
          //pr-4 pb-8
          isLInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }   `}
        ref={left}
      >
        <div className="flex flex-col">
          {firstColumn.map((item, index) => (
            <div className="flex place-items-start gap-4 p-2" key={index}>
              <div className="w-4 flex justify-center place-items-center h-4 bg-blue-600 rounded-full mt-1">
                <MdCheck className="w-7 h-7 text-white" />
              </div>
              <span className="text-justify text-base">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {secondColumn.map((item, index) => (
            <div className="flex place-items-start gap-4 p-2" key={index}>
              <div className="w-4 flex justify-center place-items-center h-4 bg-blue-600 rounded-full mt-1">
                <MdCheck className="w-7 h-7 text-white" />
              </div>
              <span className="text-justify text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;
