"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ConfirmModal from "../thanku";
import { CourseDB, courseData } from "@/types/propsType";

type Props = {};

async function getData() {
  const response = await fetch("https://murabbi.io/api/course");
  const courses = await response.json(); // Assuming the server returns JSON data
  return courses;
}

const Form = (props: Props) => {
  // const courses: any = await getData();
  const params = useParams();
  const key = params.courseid.split("-");

  const [courses, setCourses] = useState<courseData | null>(null); // Use a state to hold the course data

  useEffect(() => {
    async function fetchCourses() {
      const data = await getData();
      setCourses(data);
    }

    fetchCourses();
  }, []);

  console.log(courses);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [cnic, setCnic] = useState("");
  const [gender, setGender] = useState("");
  const [organization, setOrganization] = useState("");
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const validateForm = () => {
    let valid = true;
    let firstError = "";

    // Validation logic for each field
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^(\+?\d{1,4})?[-.\s]?\d{10}$/; // Only numbers allowed for contactNumber and cnic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

    if (firstName.trim() === "") {
      firstError = "First Name is required";
      valid = false;
    } else if (!nameRegex.test(firstName)) {
      firstError = "First Name must contain only letters";
      valid = false;
    } else if (lastName.trim() === "") {
      firstError = "Last Name is required";
      valid = false;
    } else if (!nameRegex.test(lastName)) {
      firstError = "Last Name must contain only letters";
      valid = false;
    } else if (course.trim() === "") {
      firstError = "Course Selection is required";
      valid = false;
    } else if (email.trim() === "") {
      firstError = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      firstError = "Invalid email format";
      valid = false;
    } else if (contactNumber.trim() === "") {
      firstError = "Contact Number is required";
      valid = false;
    } else if (!numberRegex.test(contactNumber)) {
      firstError = "Contact Number must contain only numbers";
      valid = false;
    } else if (cnic.trim() === "") {
      firstError = "CNIC is required";
      valid = false;
    } else if (!numberRegex.test(cnic)) {
      firstError = "CNIC must contain only numbers";
      valid = false;
    } else if (!gender) {
      firstError = "Gender is required";
      valid = false;
    } else if (organization.trim() === "") {
      firstError = "Organization is required";
      valid = false;
    } else if (currentDesignation.trim() === "") {
      firstError = "Current Designation is required";
      valid = false;
    }

    setError(firstError);
    return valid;
  };

  useEffect(() => {
    if (key[0] === "All") {
    } else {
      setCourse(decodeURIComponent(key[1]));
    }
  }, []);
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setfirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlastName(event.target.value);
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourse(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactNumber(event.target.value);
  };

  const handleCnicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnic(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrganization(event.target.value);
  };

  const handleCurrentDesignationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentDesignation(event.target.value);
  };

  const onCancel = () => {
    // // Reset all form fields to empty values
    if (validateForm()!) {
      setfirstName("");
      setlastName("");
      setCourse("");
      setEmail("");
      setContactNumber("");
      setCnic("");
      setGender("");
      setOrganization("");
      setCurrentDesignation("");

      // Reset the form validation errors
      setError("");
    }

    // Hide the modal
    setShow(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/xlekqwqr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            Course: course,
            Email: email,
            ContactNumber: contactNumber,
            CNIC: cnic,
            Gender: gender,
            Organization: organization,
            Designation: currentDesignation,
          }),
        });
        // If the form is valid, proceed with form submission
        // const response = await fetch("https://murabbi.io/api/register", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     FirstName: firstName,
        //     LastName: lastName,
        //     Course: course,
        //     Email: email,
        //     ContactNumber: contactNumber,
        //     CNIC: cnic,
        //     Gender: gender,
        //     Organization: organization,
        //     Designation: currentDesignation,
        //   }),
        // });

        if (response.ok) {
          setShow(true); // Replace '/success' with your desired success page URL
        } else {
          // Handle any error response
          setError("Error occured while submitting the form");
          setShow(true);
        }
      } catch (error) {
        setError("Error occured while submitting the form");
        setShow(true);
        // You can display an error message to the user or take appropriate action
      }
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <ConfirmModal isOpen={show} onCancel={onCancel} error={error} />
      <div
        className="w-full md:h-[120vh]  flex justify-center items-center  relative pt-20 pb-12   "
        style={{
          position: "relative",
          backgroundImage: `url('/graphicsbg.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>{" "}
        <div className="absolute top-16 block left-16 h-16 w-16 rounded-full z-50 bg-gray-200/50  animation-offer"></div>
        <div className="absolute bottom-0 block right-12 h-40 w-40 rounded-full z-50 border-4 border-gray-200/50 bg-transparent  animation-offer"></div>
        <div className="z-20 w-full sm:w-[60%] md:w-[80rem] bg-transparent  rounded-lg  items-center justify-center  p-6 sm:p-8 md:px-20 md:py-10  m-4 flex flex-col lg:flex-row gap-4 md:gap-8  ">
          <div className="flex flex-col  flex-wrap justify-center gap-6 md:justify-between items-start">
            <div className="text-4xl md:text-5xl text-white  font-bold  ">
              Course{" "}
              <span className="text-blue-500 leading-relaxed">
                {" "}
                Registration
              </span>{" "}
              <br /> Form
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between w-full text-white ">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-white font-bold" htmlFor="fname">
                    First Name:
                  </label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Muhammad "
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>
                <div>
                  <label className="text-white font-bold" htmlFor="fname">
                    Last Name:
                  </label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Ahmed"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>

                <div>
                  <label className="text-white font-bold" htmlFor="cnumber">
                    Contact Number:
                  </label>
                  <input
                    id="cnumber"
                    type="text"
                    placeholder="+92 XXXXXXXXXX"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>
                <div>
                  <label className="text-white font-bold" htmlFor="cnic">
                    CNIC:
                  </label>
                  <input
                    id="cnic"
                    type="text"
                    placeholder="XXXXXXXXXXXXX"
                    value={cnic}
                    onChange={handleCnicChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-white font-bold" htmlFor="email">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="muhammadali@email.com"
                    value={email}
                    onChange={handleEmailChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>

                <div>
                  <label className="text-white font-bold" htmlFor="org">
                    Organization:
                  </label>
                  <input
                    id="org"
                    type="text"
                    placeholder="XYZ"
                    value={organization}
                    onChange={handleOrganizationChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>
                <div>
                  <label className="text-white font-bold" htmlFor="cdes">
                    Current Designation:
                  </label>
                  <input
                    id="cdes"
                    type="text"
                    placeholder="XYZ"
                    value={currentDesignation}
                    onChange={handleCurrentDesignationChange}
                    className="focus:placeholder-transparent  rounded-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0 focus:bg-blue-500  focus:bg-opacity-90   "
                  />
                </div>
                <div>
                  <label className="text-white font-bold block ">Gender:</label>
                  <div>
                    <select
                      id="gender"
                      value={gender}
                      onChange={handleGenderChange}
                      className="  rounded-lg text-lg w-full px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0  text-white  "
                    >
                      <option className="" value="" >
                        Select Gender
                      </option>
                      <option
                        className="cursor-pointer text-black text-lg p-4"
                        value="Male"
                      >
                        Male
                      </option>
                      <option
                        className="cursor-pointer text-black text-lg p-4"
                        value="Female"
                      >
                        Female
                      </option>
                      <option
                        className="cursor-pointer text-black text-lg p-4"
                        value="Prefer not to say"
                      >
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label className="text-white font-bold" htmlFor="lname">
                Course:
              </label>
              <select
                id="course"
                value={course}
                onChange={handleCourseChange}
                className="  rounded-lg w-full text-lg px-4 py-4 md:py-4 mt-2 md:px-5 bg-opacity-30 bg-gray-200  focus:outline-none focus:ring-0  text-white  "
              >
                <option className="" value="" disabled>
                  Select Course
                </option>
                {courses?.data.map((course: CourseDB) => (
                  <option
                    key={course._id}
                    className="cursor-pointer text-black text-lg p-4"
                    value={course.DescriptionShort[0]}
                  >
                    {course.DescriptionShort[0]}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className=" mt-8 w-full py-3 px-12 bg-blue-500  transition-all duration-500 text-base  font-semibold text-white  rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
