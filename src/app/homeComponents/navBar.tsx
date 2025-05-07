"use client";
import { CourseDB } from "@/types/propsType";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import courses from "../../utils/courses.json";

type Props = {
  page?: string;
  home?: true;
  about?: true;
};

const links = [
  { href: "/", text: "Home" },
  { href: "/aboutus", text: "About Us" },
  { href: "/offer", text: "Trainings" },
  { href: "/resources", text: "News" },
  { href: "/contactus", text: "Contact Us" },
];

const NavBar = (props: Props) => {
  const [show, setShow] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const search = useRef<HTMLAnchorElement>(null);
  const seeall = useRef<HTMLAnchorElement>(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContentHovered, setIsContentHovered] = useState(false);
  const dropdownControls = useAnimation();
  const timeoutRef = useRef<any>(null);

  const data: CourseDB[] = courses;

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filteredResults = data.filter((course: CourseDB) => {
      const courseNames = course.Title.map((name: string) =>
        name.toLowerCase()
      );
      return courseNames.some((name: string) =>
        name.includes(value.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      search.current?.click();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDropdown = () => {
    setIsDropdownOpen(true);
    // dropdownControls.start({ height: "auto" });
  };

  const closeDropdown = () => {
    if (!isContentHovered) {
      setIsDropdownOpen(false);
      // dropdownControls.start({ height: 0 });
    }
  };
  const closeDrop = () => {
    setIsDropdownOpen(false);
    setIsContentHovered(false);
    // dropdownControls.start({ height: 0 });
  };

  const handleContentMouseEnter = () => {
    setIsContentHovered(true);

    // Clear the timeout if it exists
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  };

  const setTimer = () => {
    setIsContentHovered(false);

    // Set a timeout to close the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 1000);
  };

  // Cleanup the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isNavbarFixed
            ? "fixed top-0 left-0 nav-in text-gray-900/90 shadow-md shadow-gray-400/10 border border-gray-100 bg-white"
            : props.home || props.about
            ? "fixed top-0 left-0 opacity-100 bg-white lg:bg-transparent   lg:text-white"
            : "relative opacity-100 text-gray-900/90 shadow-md shadow-gray-400/10 border border-gray-100 bg-white"
        }  w-full z-50  px-4 md:px-16 py-2 md:py-4 transition-opacity transform duration-500 ease-in-out`}
      >
        <Link
          href={searchValue ? `/search/${searchValue}` : ""}
          className="hidden"
          ref={search}
        ></Link>
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center px-2 ">
            <Image
              src={`${
                isNavbarFixed
                  ? "/logos/murabbi-blue.png"
                  : props.home || props.about
                  ? "/logos/murabbi-white.png"
                  : "/logos/murabbi-blue.png"
              }`}
              alt=""
              className="scale-110 transition-all duration-300 hidden lg:block"
              width={160}
              height={160}
            />
            <Image
              src={`/logos/murabbi-blue.png`}
              alt=""
              className="scale-110 transition-all duration-300 block lg:hidden"
              width={160}
              height={160}
            />
          </Link>
          <div className="flex lg:order-2 gap-2 items-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="lg:hidden text-gray-500  hover:text-blue-500  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1"
            >
              <span className="sr-only">Search</span>
            </button>
            <div className="relative lg:block hidden mr-4">
              <AiOutlineSearch
                onClick={() => {
                  setShowBar(!showBar);
                }}
                size={30}
                className={`${
                  isNavbarFixed
                    ? "text-blue-600"
                    : props.home || props.about
                    ? "text-white"
                    : "text-blue-600"
                } cursor-pointer`}
              />
              <div
                className={`${
                  showBar ? "block" : "hidden"
                } absolute nav-in  -bottom-[5rem] z-40 -left-[16rem]  `}
              >
                <div className="flex justify-between   gap-2 place-items-center w-[120%]   px-6  py-[0.8rem]  text-sm text-gray-900 border-2 rounded-3xl bg-white  border-blue-600 ">
                  <AiOutlineSearch size={20} className="text-blue-600" />
                  <input
                    autoComplete="off"
                    type="text"
                    id="search-navbar"
                    className="focus:outline-none focus:ring-0 w-full"
                    placeholder="Search Courses"
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(event)
                    }
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                {searchValue && searchResults.length > 0 && (
                  <div className="absolute mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow w-[120%] z-50">
                    {searchResults
                      .slice(0, 4)
                      .map((result: any, index: any) => (
                        <Link href={`${result.Link}`} key={index} ref={seeall}>
                          <div>
                            <div
                              key={index}
                              className="flex items-center justify-start gap-4 p-4 text-sm font-semibold text-black hover:text-blue-500 cursor-pointer "
                            >
                              <div className="mr-2">
                                <div className="w-10 h-10 bg-slate-600 ">
                                  <Image
                                    src={result.Image[0]}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                      objectPosition: "50% 30%",
                                    }}
                                  />
                                </div>
                              </div>
                              <span>{result.Title[0]}</span>
                            </div>
                            <div className="border-b-2"></div>
                          </div>
                        </Link>
                      ))}
                    {searchValue && searchResults.length > 4 && (
                      <div
                        onClick={() => search.current?.click()}
                        className="flex justify-center place-content-center text-sm font-bold text-blue-600 cursor-pointer p-2 "
                      >
                        more results
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="relative hidden lg:block mx-2 w-36  ">
              <span>+92 333 1555665</span>
            </div>
            <FaPhone size={20} className="cursor-pointer hidden lg:block" />
          </div>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 border border-blue-600/20  rounded-lg lg:hidden hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill={isNavbarFixed ? "#0693C0" : "#0693C0"}
              viewBox="0 0 20 20"
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              show ? "block" : "hidden"
            } w-full lg:block  lg:w-auto  flex-grow `}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border  border-gray-100 bg-gray-100 lg:bg-transparent rounded-lg lg:flex-row lg:justify-center gap-[8%] lg:px-4 lg:mt-0 lg:border-0 ">
              <div className="relative block lg:hidden">
                <div className="flex justify-between mb-4   gap-2 place-items-center  w-full p-2 text-sm text-gray-900 border rounded-3xl border-blue-600 ">
                  <AiOutlineSearch size={20} className="text-blue-600" />
                  <input
                    autoComplete="off"
                    type="text"
                    id="search-navbar"
                    className="focus:outline-none focus:ring-0 w-full bg-gray-100"
                    placeholder="Search Courses"
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(event)
                    }
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                {searchValue && searchResults.length > 0 && (
                  <div className="absolute mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow w-[100%] z-50">
                    {searchResults
                      .slice(0, 4)
                      .map((result: any, index: any) => (
                        <Link href={`${result.Link}`} key={index} ref={seeall}>
                          <div>
                            <div
                              key={index}
                              className="flex items-center gap-4 p-4 text-sm font-semibold text-black hover:text-blue-500 cursor-pointer "
                            >
                              <div className="mr-2">
                                <div className="w-10 h-10 bg-slate-600 overflow-hidden">
                                  <Image
                                    src={result.Image[0]}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                      objectPosition: "50% 30%",
                                    }}
                                  />
                                </div>
                              </div>
                              <span>{result.Title[0]}</span>
                            </div>
                            <div className="border-b-2"></div>
                          </div>
                        </Link>
                      ))}
                    {searchValue && searchResults.length > 4 && (
                      <div
                        onClick={() => search.current?.click()}
                        className="flex justify-center place-content-center text-sm font-bold text-blue-600 cursor-pointer p-2 "
                      >
                        more results
                      </div>
                    )}
                  </div>
                )}
              </div>

              {links.map((link, index) => {
                return (
                  <div key={index}>
                    {link.text === "Trainings" ? (
                      <>
                        <li className="relative">
                          <button
                            id="dropdownNavbarLink"
                            data-dropdown-toggle="dropdownNavbar"
                            className="flex items-center font-semibold   justify-between w-full py-2 pl-3 pr-4   rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto hover:scale-110 transform transition duration-500"
                            onMouseEnter={openDropdown}
                            onMouseLeave={setTimer}
                          >
                            Trainings{" "}
                            <svg
                              className="w-2.5 h-2.5 ml-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>
                          <div
                            onMouseEnter={handleContentMouseEnter}
                            onMouseLeave={closeDrop}
                            style={{ boxShadow: "0px 0px 2px grey" }}
                            id="dropdownNavbar"
                            className={` z-10 md:absolute overflow-hidden open-drop -left-[2.5rem] top-10  divide-y ${
                              isDropdownOpen || isContentHovered
                                ? "block"
                                : "hidden"
                            }    md:w-56 ${
                              isNavbarFixed
                                ? "text-black bg-white shadow-md shadow-gray-400 divide-gray-100"
                                : props.home || props.about
                                ? "text-white bg-blue-600/90 shadow-lg shadow-white divide-white  "
                                : "text-black bg-white shadow-md shadow-gray-400 divide-gray-100"
                            }`}
                          >
                            <ul
                              className=" text-sm   font-semibold "
                              aria-labelledby="dropdownLargeButton"
                            >
                              <li>
                                <Link
                                  href="/trainings/high"
                                  className={`block px-4 py-2 ${
                                    isNavbarFixed
                                      ? " hover:text-white hover:bg-blue-500"
                                      : props.home || props.about
                                      ? "hover:bg-blue-500 "
                                      : "hover:text-white hover:bg-blue-500"
                                  }     border-b-2 m-2 border-gray-400/50 `}
                                >
                                  High Tech
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/trainings/low"
                                  className={`block px-4 py-2 ${
                                    isNavbarFixed
                                      ? " hover:text-white hover:bg-blue-500"
                                      : props.home || props.about
                                      ? "hover:bg-blue-500 "
                                      : "hover:text-white hover:bg-blue-500"
                                  }     border-b-2 m-2 border-gray-400/50 `}
                                >
                                  Low Tech
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/trainings/summer-winter-camps"
                                  className={`block px-4 py-2 ${
                                    isNavbarFixed
                                      ? " hover:text-white hover:bg-blue-500"
                                      : props.home || props.about
                                      ? "hover:bg-blue-500 "
                                      : "hover:text-white hover:bg-blue-500"
                                  }     border-b-2 m-2 border-gray-400/50 `}
                                >
                                  Summer/Winter Camps
                                </Link>
                              </li>

                              <li>
                                <Link
                                  href="/trainings/workshops"
                                  className={`block px-4 py-2 ${
                                    isNavbarFixed
                                      ? " hover:text-white hover:bg-blue-500"
                                      : props.home || props.about
                                      ? "hover:bg-blue-500 "
                                      : "hover:text-white hover:bg-blue-500"
                                  }     border-b-2 m-2 border-gray-400/50 mb-4 `}
                                >
                                  Workshops
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </>
                    ) : (
                      <>
                        {" "}
                        <li>
                          <Link
                            href={link.href}
                            className={` block py-2 pl-3 pr-4 font-semibold  text-base    lg:bg-transparent  lg:p-0 hover:transform hover:text-blue-500 hover:scale-110 duration-500 transition-transform ${
                              props.page == link.text
                                ? "text-blue-500 lg:border-b-[0.15rem] border-blue-500"
                                : ""
                            } `}
                            aria-current="page"
                          >
                            {link.text}
                          </Link>
                        </li>
                      </>
                    )}
                  </div>
                );
              })}
              <div className="relative block lg:hidden mx-2 mt-4  ">
                <Link href="/register/All-Courses" target="_blank">
                  <button className="py-3 px-4  bg-blue-600 text-white font-semibold rounded-lg text-sm  w-full hover:bg-white hover:text-blue-500 border border-blue-600 ">
                    Register Now
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
