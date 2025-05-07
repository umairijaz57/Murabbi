import ConfirmModal from "@/app/register/thanku";
import Image from "next/image";
import React, { useState } from "react";
import { SiBookstack } from "react-icons/si";

type Props = {};

const Form = () => {
  const multiplicand = 1.6;
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Subject: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let firstError = null;

    // Validation logic for each field
    const nameRegex = /^[A-Za-z]+$/; // Only letters allowed for names
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    const phoneRegex = /^(\+?\d{1,4})?[-.\s]?\d{10}$/; // Allows optional country code prefix

    if (formData.Name.trim() === "") {
      firstError = "First name is required";
      valid = false;
    } else if (!nameRegex.test(formData.Name)) {
      firstError = "First name must contain only letters";
      valid = false;
    } else if (formData.email.trim() === "") {
      firstError = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      firstError = "Invalid email format";
      valid = false;
    } else if (formData.phone.trim() === "") {
      firstError = "Contact number is required";
      valid = false;
    } else if (formData.email.trim() === "") {
      firstError = "Subject is required";
      valid = false;
    } else if (!nameRegex.test(formData.Subject)) {
      firstError = "Subject must contain only letters";
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      firstError = "Invalid phone number format";
      valid = false;
    }

    setErrors(firstError);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/xlekqwqr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Show success message or reset the form
          setShow(true);
        } else {
          setErrors("Error Contacting");
          setShow(true);
        }
      } catch (error) {
        setErrors("Error Sending Email");
        setShow(true);
      }
    } else {
      setShow(true);
    }

    // Perform form validation
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setModalMessage("");
  //   setErrors({});
  // };

  const onCancel = () => {
    // Hide the modal
    if (validateForm()!) {
      setFormData({
        Name: "",
        email: "",
        Subject: "",
        phone: "",
        message: "",
      });
    }
    setShow(false);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url('/graphicsbg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * multiplicand}px`,
        }}
        className=" flex flex-row justify-center items-center bg-fixed px-6 py-12 md:py-20"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
        <div className="absolute top-8 block left-16 h-24 w-24 rounded-full z-50 bg-gray-200/50  animation-offer"></div>
        <div className="absolute bottom-0 block -right-10 h-40 w-40 rounded-full z-50 border-4 border-blue-500 bg-transparent  animation-offer"></div>
        <div className="flex flex-col lg:flex-row justify-center items-center z-20 gap-8 lg:gap-12 w-full ">
          <div className="flex flex-col items-start gap-6 lg:w-[30rem] ">
            <div className="text-white font-bold text-4xl md:text-5xl   ">
              Contact
              <span className="text-blue-500"> Us </span> for any queries
            </div>
            <div className="text-lg text-white">
              Have questions or need assistance? We're here to help. Contact our
              experts, and we'll provide the support you require.
            </div>
            <button
              onClick={handleSubmit}
              className=" mt-2 py-2 px-12 bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col gap-8 text-white w-full lg:w-[50rem]">
            <div className="flex flex-col md:flex-row  gap-8 lg:gap-4">
              {" "}
              <input
                placeholder="Enter Your name"
                className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90 "
                type="text"
                id="Name"
                name="Name"
                onChange={handleChange}
                value={formData.Name}
              />
              <input
                placeholder="Enter Your Email"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col md:flex-row  gap-8 lg:gap-4">
              {" "}
              <input
                placeholder="Enter Your Phone"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90"
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                placeholder="Enter Your Subject"
                className="focus:placeholder-transparent rounded-lg w-full px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90"
                type="text"
                id="Subject"
                name="Subject"
                onChange={handleChange}
                value={formData.Subject}
              />
            </div>
            <div>
              <textarea
                className="focus:placeholder-transparent  rounded-lg px-4 py-4 md:py-4 md:px-5 bg-opacity-30 bg-gray-200  mb-4 h-[10rem] md:h-[18rem] w-full b  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90"
                id="subject"
                placeholder="Enter Your Message"
                name="message"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={show} onCancel={onCancel} error={errors} />
    </>
  );
};

export default Form;
