import React, { useEffect, useRef, useState } from "react";

type Props = {};

const History = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLParagraphElement | null>(null);
  const [isVisiblepara, setIsVisiblePara] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (headingRef.current && isVisible) {
      const headingLetters = Array.from(
        headingRef.current.children
      ) as HTMLSpanElement[];
      let delay = 0;

      headingLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${delay}s`;
        delay += 0.1; // Adjust the delay between each letter as needed
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisiblePara(true);
        observer.disconnect();
      }
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex justify-center mt-8 md:mt-16"
      id="history-section"
      ref={containerRef}
    >
      <div className="grid place-items-center text-center w-full bg-blue-600 text-white py-8 px-4 md:py-12 md:px-12">
        <div>
          <div
            className={`text-2xl font-bold tracking-wider md:tracking-normal block md:hidden mt-2 `}
            ref={headingRef}
          >
            {isVisible ? (
              "OUR BACKGROUND".split("").map((letter, index) => (
                <span
                  key={index}
                  className={`opacity-0 slide-from-left-${index}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                  {index === 2 ? <span className="text-blue-600">B</span> : ""}
                </span>
              ))
            ) : (
              <span className={`opacity-0 slide-from-left-1`}>
                <span className="text-blue-600">B</span>
              </span>
            )}
          </div>
          <div
            className={`text-3xl font-bold tracking-wider md:tracking-normal md:letter-spacing-[0.3rem] md:block hidden `}
            style={{ letterSpacing: "0.7em" }}
            ref={headingRef}
          >
            {isVisible ? (
              "OUR BACKGROUND".split("").map((letter, index) => (
                <span
                  key={index}
                  className={`opacity-0 slide-from-left-${index}`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {letter}
                  {index === 2 ? <span className="text-blue-600">B</span> : ""}
                </span>
              ))
            ) : (
              <span className={`opacity-0 slide-from-left-1`}>
                <span className="text-blue-600">B</span>
              </span>
            )}
          </div>
        </div>
        <div
          className={`text-justify p-4 text-base max-w-screen-md transition duration-500   ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } `}
          ref={cardRef}
          style={{
            textAlign: "justify",
            hyphens: "auto",
            wordSpacing: "-0.5px",
          }}
        >
          Murabbi, a nascent organization, was established recently in 2023 and
          has embarked on its journey to provide valuable training and guidance.
          With a foundation rooted in a passion for education and mentorship,
          Murabbi aims to empower individuals with knowledge and skills. Despite
          being in its early stages, the organization boasts a team with decades
          of teaching experience. Murabbi has already conducted several mock
          trainings, demonstrating a promising beginning and a strong commitment
          to nurturing growth and development. As Murabbi continues to evolve,
          it aspires to become a renowned platform for transformative learning
          experiences.
        </div>
      </div>
    </div>
  );
};

export default History;
