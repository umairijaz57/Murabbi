'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
type Props = {};

const Hero_alt = (props: Props) => {
  const [showItem, setShowItem] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next slide index
      const nextSlide = showItem === 2 ? 1 : showItem + 1;
      setShowItem(nextSlide);
    }, 8000);

    // Clear the timeout when the component unmounts or showItem changes
    return () => clearTimeout(timer);
  }, [showItem]);

  return (
    <div
      className="m-auto   main-hero z-20    relative  overflow-hidden pt-8 lg:pt-0 "
      style={{
        position: "relative",
        backgroundImage: `url('/hero_landing.jpg')`,
        backgroundSize: "cover",
        backgroundPosition:"30% 30%"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/90 opacity-100" ></div>
      <div className="hero-content-main  h-full bg-gradient-to-b  z-20 relative  overflow-hidden  flex flex-col lg:flex-row justify-center lg:gap-8  items-center p-4 md:p-8   ">
        <div className="flex flex-col gap-6 lg:w-[50%] mt-20 mb-12  md:mb-0 lg:mt-0 px-2 lg:px-4 ">
          <div className="text-white border-l-4 border-blue-500 pl-2">
            EDUCATION SOLUTION
          </div>
          <div className="text-white font-bold text-4xl md:text-5xl   ">
            Learn, Grow & Succeed <br /> with{" "}
            <span className="text-blue-500"> Murabbi </span>
          </div>
          <div className="text-lg text-white ">
            Are you ready to take your career to the next level? Look no further
            than Murabbi, where our state-of-the-art training solutions will
            revolutionize the way, you learn.
          </div>
          <div className="flex flex-row gap-4 items-center md:pt-4">
            <Link href="/aboutus">
              <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                <span>Find out more</span>
                <BsArrowRightShort size={25} />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative lg:-bottom-2  animate-hero-image h-[25rem] sm:h-[30rem] md:h-[38rem] hidden lg:block  w-[25rem]  sm:w-[30rem] md:w-[40rem] mt-12 lg:mt-16 mb-8 ">
          {/* <div className="relative    h-full w-full rounded-full     ">
            <Image
              src="/hero_landing.png"
              alt=""
              layout="fill"
              style={{ objectFit: "contain",objectPosition:"30% 30%"}}
              className={` absolute w-full z-20`}
            />{" "}
          </div> */}
          {/* <div className="absolute top-4 block left-0 h-40 w-40 rounded-full z-10 border-4 border-blue-500 bg-transparent  animation-offer"></div>
          <div className="absolute bottom-0 block right-0 h-40 w-40 rounded-full z-10 border-4 border-blue-500 bg-transparent  animation-offer"></div> */}
          {/* <div className="absolute bottom-8  left-8 z-10 flex flex-row justify-center items-center  animation-offer"> */}
            {/* <Image src="/Polygon.png" height={80} width={80} alt="" /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero_alt;

// import Image from "next/image";
// import React from "react";
// import { GiDiploma } from "react-icons/gi";

// type Props = {};

// const Hero_alt = (props: Props) => {
//   return (
//     <div className="m-auto lg:h-[80vh]  main-hero z-20  ">
//       <div className="w-full h-full bg-gradient-to-b from-blue-600 via-blue-600/80 to-blue-600 z-20 relative overflow-hidden  flex flex-col lg:flex-row justify-center gap-8 md:gap-24 items-center p-4 md:p-8 lg:p-0">
//         <div className=" absolute left-[2rem] top-[2rem] w-20 h-20   rounded-full  z-20   animation-offer">
//           <GiDiploma size={50} className="text-blue-500" />
//         </div>
//         <div className="flex flex-col gap-6 lg:w-[45%] lg:p-2 md:p-0">
//           <div className="text-blue-500">EDUCATION SOLUTION</div>
//           <div className="text-white font-extrabold text-3xl md:text-6xl  ">
//           Learn, Grow & Succeed with Murabbi
//           </div>
//           <div className="text-lg text-white ">
//             Lorem Ipsum is simply dummy text of the printing typesetting
//             industry. Lorem Ipsum has been
//           </div>
//           <div className="flex flex-row gap-4 items-center">
//             <button className="py-3 px-4 md:px-6 bg-white text-blue-600 transition-all duration-500 text-base  font-semibold hover:text-white p-2 rounded-lg hover:bg-blue-600 hover:border-white  border-2 border-blue-600">
//               View Courses
//             </button>
//             <button className="py-3 px-4 md:px-6 bg-transparent hover:text-blue-500 transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg ">
//               {" "}
//               Find out more
//             </button>
//           </div>
//         </div>
//         <div className="relative h-[20rem] md:h-[30rem] w-full md:w-[25rem]  ">
//           <div className=" rouded-full  h-full w-full  overflow-hidden ">
//             <Image
//               src="/hero_auto.jpg"
//               alt=""
//               layout="fill"
//               style={{ objectFit: "cover", objectPosition: "50% 30%" }}
//               className="absolute w-full z-30"
//             />{" "}
//           </div>
//           {/* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-blue-500 animation-about"></div>
//           <div className="absolute top-[10%] block -right-[2rem] h-72 w-72 rounded-full z-10 bg-white "></div>
//           <div className="absolute top-[30%] block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-blue-500 animation-about"></div>
//           <div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/10 animation-about"></div>
//           <div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-blue-500 animation-about"></div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero_alt;

// <div
// className="m-auto lg:h-[98vh]  main-hero z-20 pt-20 pb-8   relative bg-no-repeat  "
// // style={{
// //   position: "relative",
// //   backgroundImage: `url('/hero_auto.jpg')`,
// //   backgroundSize: "cover",
// //   backgroundPosition: `center `,
// // }}
// >
// <div
//   className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/80 to-blue-600 opacity-100"
// ></div>
// <div className="w-full h-full bg-gradient-to-b  z-20 relative  overflow-hidden  flex flex-col lg:flex-row justify-evenly gap-8  items-center p-4 md:p-8 lg:p-0 ">
//   <div className=" absolute left-[2rem] top-[2rem] w-20 h-20   rounded-full  z-20   animation-offer">
//     <GiDiploma size={50} className="text-blue-500" />
//   </div>
//   <div className="flex flex-col gap-6 lg:w-[50%] md:p-0">
//     <div className="text-blue-500 border-l-2 border-blue-500 pl-2">EDUCATION SOLUTION</div>
//     <div className="text-white font-extrabold text-3xl md:text-5xl  ">
//       Learn, Grow & Succeed with <span className="text-blue-500"> Murabbi </span>
//     </div>
//     <div className="text-lg text-white ">
//       Lorem Ipsum is simply dummy text of the printing typesetting
//       industry. Lorem Ipsum has been
//     </div>
//     <div className="flex flex-row gap-4 items-center">
//       <button className="py-3 px-4 md:px-6 bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
//         View Courses
//       </button>
//       <button className="py-3 px-4 md:px-6 bg-transparent hover:text-blue-500 transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg ">
//         {" "}
//         Find out more
//       </button>
//     </div>
//   </div>
//   <div className="relative h-[30rem] w-[25rem]  rounded-full mb-2 ">
//     <div className="relative   h-full w-full rounded-[3rem] overflow-hidden   " style={{boxShadow:'0px 0px 50px 25px rgba(6,147,192,0.8)'}}>
//       <Image
//         src="/hero_auto.jpg"
//         alt=""
//         layout="fill"
//         style={{ objectFit: "cover", objectPosition: "50% 30%" }}
//         className={`${showItem===1?'show-testimonial':'hidden'} absolute w-full z-20`}
//       />{" "}
//     </div>

//   <div className="absolute h-[33rem] rounded-[3rem] bg-transparent w-[25rem] border-4 border-blue-500 -top-4 z-10 -left-4 transform rotate-[-20deg]  "></div>
//     {/* {/* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-blue-500 animation-about"></div> */}
//     {/* <div className="absolute top-0 block left-0 h-40 w-40 rounded-full z-50 border-4 border-blue-500 bg-transparent  animation-offer"></div>
//     <div className="absolute bottom-0 block right-0 h-40 w-40 rounded-full z-50 border-4 border-blue-500 bg-transparent  animation-offer"></div>
//     <div className="absolute bottom-8  left-8 z-50 flex flex-row justify-center items-center  animation-offer">
//       <Image src='/Polygon.png' height={80} width={80} alt=""/>
//     </div> */}
//     {/* <div className="absolute top-[30%] block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-blue-500 animation-about"></div>
//     <div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/10 animation-about"></div>
//     <div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-blue-500 animation-about"></div>  */}
//   </div>
// </div>
// </div>

// <div className="relative lg:-bottom-2 lg:-right-[10rem] h-[25rem] sm:h-[30rem] md:h-[37rem] w-[25rem]  sm:w-[30rem] md:w-[37rem] rounded-tl-[20rem] rounded-tr-[12rem]  rounded-bl-[10rem]  rounded-br-[10rem] mt-12 mb-8 ">
//           <div className="relative   h-full w-full rounded-tl-[20rem] rounded-tr-[12rem]  rounded-bl-[10rem]  rounded-br-[10rem] overflow-hidden glow   ">
//             <Image
//               src="/hero_grahpics.jpg"
//               alt=""
//               layout="fill"
//               style={{ objectFit: "cover", objectPosition: "50% 30%" }}
//               className={`${showItem===1?'show-testimonial':'hidden'} absolute w-full z-20`}
//             />{" "}
//             <Image
//               src="/elearn.png"
//               alt=""
//               layout="fill"
//               style={{ objectFit: "cover", objectPosition: "50% 30%" }}
//               className={`${showItem===2?'show-testimonial':'hidden'} absolute w-full z-20`}
//             />{" "}
//             {/* <Image
//               src="/courses/summer/math.jpg"
//               alt=""
//               layout="fill"
//               style={{ objectFit: "cover", objectPosition: "50% 30%" }}
//               className={`${showItem===3?'show-testimonial':'hidden'} absolute w-full z-20`}
//             />{" "} */}
//           </div>
//           {/* <div className="absolute h-[33rem] rounded-[3rem] bg-transparent w-[25rem] border-4 border-blue-500 -top-4 z-10 -left-4 transform rotate-[-20deg]  "></div> */}
//           {/* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-blue-500 animation-about"></div> */}
//           <div className="absolute top-0 block left-0 h-40 w-40 rounded-full z-50 border-4 border-blue-500 bg-transparent  animation-offer"></div>
//           <div className="absolute bottom-0 block right-0 h-40 w-40 rounded-full z-50 border-4 border-blue-500 bg-transparent  animation-offer"></div>
//           <div className="absolute bottom-8  left-8 z-50 flex flex-row justify-center items-center  animation-offer">
//             <Image src="/Polygon.png" height={80} width={80} alt="" />
//           </div>
//           {/* <div className="absolute top-[30%] block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-blue-500 animation-about"></div>
//         <div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/10 animation-about"></div>
//         <div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-blue-500 animation-about"></div>  */}
//         </div>
