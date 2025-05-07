"use client";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

function Signup({}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleSignup = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!username || !password || !confirmPassword) {
  //     setErrorMessage("Please fill in all the fields.");
  //     return;
  //   }

  //   if (password.length < 7) {
  //     setErrorMessage("Password must be at least 7 characters long.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setErrorMessage("Password and Confirm Password must match.");
  //     return;
  //   }

  //   if (/[!@#$%^&*(),.?":{}|<>]/.test(username)) {
  //     setErrorMessage("Username should not contain special characters.");
  //     return;
  //   }

  //   if (username.length < 7) {
  //     setErrorMessage("Username must be at least 7 characters long.");
  //     return;
  //   }

  //   // Perform signup logic here
  //   // ...
  //   // try {
  //   //   const response = await axios.post("http://localhost:3000/api/auth", {
  //   //     userName: username,
  //   //     password: password,
  //   //   });
  //   //   console.log(response);
  //   // } catch (error) {
  //   //   setErrorMessage("An error occurred during signup.");
  //   // }
  // };

  return (
    <section className="bg-blue-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex flex-col bg-white justify-center rounded-t-lg w-full sm:max-w-md items-center text-2xl font-semibold text-gray-900"
        >
          <img className="w-16 h-16 mr-2" src="/logo.jpg" alt="logo" />
          <div>Sign Up</div>
        </Link>
        <div className="w-full bg-white rounded-b-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={()=>{}}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <div className="flex justify-center font-bold">OR</div>
              <button
                type="submit"
                className="w-full text-blue-600 border-blue-600 border-2 bg-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Continue with Facebook
              </button>
              <button
                type="submit"
                className="w-full text-blue-600 border-blue-600 border-2 bg-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Continue with Google
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/user/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
        {errorMessage.length > 0 && (
          <div className="absolute bottom-0 w-full bg-red-500 text-white p-4 opacity-0 transition-all duration-1000 ease-in-out animate-slide-in-from-left">
            <div className="flex justify-between">
              {errorMessage}
              <button
                onClick={() => setErrorMessage("")}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Signup;
