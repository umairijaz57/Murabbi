import React from "react";
import { GiTeacher } from "react-icons/gi";

interface Props {
  children: React.ReactNode;
  offer?: boolean;
  id?: string;
  upper?: boolean;
  prereq?: boolean;
  events?: boolean;
}

const InLayout = (props: Props) => {
  return (
    <>
      <div
        id={props.id}
        className={`${
          props.offer ? "bg-gray-200" : props.events ? "bg-white" : "bg-white"
        }`}
      >
        <main
          className={`grid overflow-hidden gap-4 md:gap-8  m-auto  ${
            props.events ? "relative overflow-y-hidden" : ""
          }  ${
            props.offer ? "bg-gray-200" : props.events ? "bg-white" : "bg-white"
          } ${
            props.upper
              ? "px-2 md:px-20 lg:px-32 pt-8  main-ini bg-white "
              : props.prereq
              ? "mt-10 md:mt-16 bg-white main-init"
              : props.offer
              ? "main-offer relative  px-2 md:px-8 lg:px-12 py-16 md:py-28"
              : " main-offer relative px-2 md:px-8 lg:px-12 py-16 md:py-28 "
          } overflow-x-hidden `}
        >
          {/* {props.offer?<GiTeacher className="absolute top-8 md:top-16 animation-offer right-8  text-white text-[2rem] md:text-[4rem]"/> :<></>} */}
          {props.children}
          {/* {props.events ? (
            <>
              <div className="absolute z-10 top-[20%] right-[0%] h-[180rem] w-[180rem] rounded-full bg-gradient-to-bl bg-gray-200 animate-about "></div>
            </>
          ) : (
            <></>
          )} */}
        </main>
      </div>
    </>
  );
};

export default InLayout;
