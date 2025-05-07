"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConfirmModal({
  title = "Confirm",
  body,
  isOpen,
  error,
  newsletter,
  onConfirm,
  onCancel,
}: {
  title?: string;
  body?: string;
  isOpen?: boolean;
  newsletter?: boolean;
  error?: string | null;
  onConfirm?: () => void;
  onCancel?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      // Reset isLoading to true when modal is opened
      setIsLoading(true);

      // Simulate loading for 3 seconds
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => {
        clearTimeout(loadingTimer);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="border p-4 bg-gray-200 rounded-3xl m-4">
            <div className="flex flex-col items-center space-y-4">
              <div
                className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin"
                style={{ borderTopColor: "transparent" }}
              />
            </div>
          </div>
        </div>
      ) : error ? (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            onClick={onCancel}
          >
            <div className="border p-6 bg-gray-200 rounded-3xl m-4 ">
              <div
                className="flex flex-col items-center justify-center space-y-4  "
                style={{ color: "#1F4283" }}
              >
                <svg
                  className="fill-current h-20 w-20 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>

                <p>{error}</p>
                {/* <Link
                  href="/"
                  className="cursor-pointer  justify-center p-2 w-36 rounded-3xl transition-all text-sm font-semibold duration-500 border-2 bg-blue-600 text-white hover:bg-white border-blue-600 hover:text-blue-600 inline-flex items-center px-4 py-2  bg-indigo-600  border-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <span className="text-sm font-medium">Home</span>
                </Link> */}
              </div>
            </div>
          </div>
        </>
      ) : !newsletter ? (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            onClick={onCancel}
          >
            <div className="border p-4 bg-gray-200 rounded-3xl m-4 ">
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 w-28 h-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="green"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h1 className="text-4xl font-bold">Thank You !</h1>
                <p>
                  Thank you for your interest! We'll get back to you shortly
                </p>
                <Link
                  href="/"
                  className="cursor-pointer  justify-center p-2 w-36 rounded-3xl transition-all text-sm font-semibold duration-500 border-2 bg-blue-600 text-white hover:bg-white border-blue-600 hover:text-blue-600 inline-flex items-center px-4 py-2  bg-indigo-600  border-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <span className="text-sm font-medium">Home</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            onClick={onCancel}
          >
            <div className="border p-4 bg-gray-200 rounded-3xl m-4 ">
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 w-28 h-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="green"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h1 className="text-2xl font-bold">Subscribed Successfully!</h1>
                
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
