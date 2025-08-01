"use client"

import { CheckCircle, X } from "lucide-react"
import { useState, type FormEvent, type ChangeEvent } from "react"

interface FormData {
  name: string
  email: string
  organization: string
  course: string
  message: string
}

export default function Form() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    course: "",
    message: "",
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    setSuccess(false);
    // Reset form after closing success popup
    setForm({
      name: "",
      email: "",
      organization: "",
      course: "",
      message: "",
    })
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (success) setSuccess(false)
    if (error) setError(null)
  }

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    
    // Check if all fields are filled
    if (form.name && form.email && form.organization && form.course && form.message) {
      setSuccess(true)
      setError(null)
    } else {
      setError("Please fill in all fields before submitting.")
    }
  }

  const handleButtonSubmit = () => {
    handleSubmit()
  }

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
        className="flex flex-row justify-center items-center bg-fixed px-6 py-12 md:py-20 bg-blue-600"
      >
        
        <div className="flex flex-col lg:flex-row justify-center items-center z-20 gap-8 lg:gap-12 w-full">
          <div className="flex flex-col items-start gap-6 lg:w-[30rem]">
            <div className="text-white font-bold text-4xl md:text-5xl">
              Contact
              <span className="text-blue-200"> Us </span>
              for any queries
            </div>
            <div className="text-lg text-white">
              Have questions or need assistance? We're here to help. Contact our experts, and we'll provide the support
              you require.
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500 text-white p-3 rounded-lg w-full border-l-4 border-red-700">
                <div className="flex items-center">
                  <span className="mr-2">❌</span>
                  <span>{error}</span>
                </div>
              </div>
            )}

            <button
              onClick={handleButtonSubmit}
              className="mt-2 py-2 px-12 bg-blue-500 transition-all duration-500 text-base font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-500"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col gap-8 text-white w-full lg:w-[50rem]">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4">
              <input
                placeholder="Enter Your name"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200 focus:outline-none focus:ring-0 focus:bg-blue-500 focus:bg-opacity-90"
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                required
              />
              <input
                placeholder="Enter Your Email"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200 focus:outline-none focus:ring-0 focus:bg-blue-500 focus:bg-opacity-90"
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4">
              <input
                placeholder="Enter Your School/Organization"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200 focus:outline-none focus:ring-0 focus:bg-blue-500 focus:bg-opacity-90"
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Enter Your Subject"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200 focus:outline-none focus:ring-0 focus:bg-blue-500 focus:bg-opacity-90"
                type="text"
                name="course"
                onChange={handleChange}
                value={form.course}
                required
              />
            </div>
            <div>
              <textarea
                className="focus:placeholder-transparent rounded-lg px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200 mb-4 h-[10rem] md:h-[18rem] w-full focus:outline-none focus:ring-0 focus:bg-blue-500 focus:bg-opacity-90"
                placeholder="Enter Your Message"
                name="message"
                onChange={handleChange}
                value={form.message}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
          
          {/* Popup */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X size={20} />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 rounded-full p-3">
                <CheckCircle size={32} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for contacting us. We've received your message and will get back to you soon.
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Decorative Element */}
            {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-15"></div> */}
          </div>
        </div>
      )}
    </>
  )
}