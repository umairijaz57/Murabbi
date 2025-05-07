"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const Update = (props: Props) => {
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    // Check if the user has visited before
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowUpdate(true);
        sessionStorage.setItem("hasVisited", "true");
      }, 3000);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, []);
  return (
    <>
      {showUpdate ? (
        <>
          {" "}
          <div className="fixed w-full h-full bg-gray-700/50 z-50 text-3xl flex justify-center items-center transition duration-500 ease-in">
            <div className="relative m-[2rem] md:mt-[5rem]">
              <div className="absolute z-50 rounded-full -right-4 -top-4 flex justify-center items-center cursor-pointer hover:bg-gray-400 bg-gray-200">
                <AiOutlinePlus
                  onClick={() => {
                    setShowUpdate(false);
                  }}
                  className="text-black transform rotate-45"
                  size={25}
                />
              </div>
              {/* <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc1PwqpojEOYjBaJlvrKQVI-KOMrBLRQoHV-ElzWQNC7qzOyA/viewform"> */}
              <Image
                src="/Affiliate.png"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-[25rem]  cursor-not-allowed poster opacity-0 `}
                alt=""
              />
              {/* </Link> */}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Update;
