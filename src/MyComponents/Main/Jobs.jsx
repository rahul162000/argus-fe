import React, { useState } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import SideLine from "./../Components/SideLine";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonalDetails from "./jobApplicationForms/PersonalDetails";
import WorkStatus from "./jobApplicationForms/WorkStatus";
import Education from "./jobApplicationForms/Education";
import Experience from "./jobApplicationForms/Experience";
import axiosInstance from "../../helpers/axiosInstance";
import Alert from "../Components/Alert";
import { useSelector } from "react-redux";
import { API } from "../../api";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [show, setShow] = useState(false);
  const [formNo, setFormNo] = useState(4);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    country: "",
    state: "",
    address: "",
    email: "",
    elegibleToWorkInCanada: "",
    eligibilityType: "",
    validSecurityGuardLicence: "",
    licenceNo: "",
    canDrive: "",
    highestLevelOfEducation: "",
    educationInCanada: "",
    priorExperience: "",
    yearsOfExp: "",
    applyingFor: "",
  });
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const req = useSelector((state) => state.req.requirement);

  const submitForm = (e) => {
    e.preventDefault();
    let status = true;
    for (const key in formData) {
      if (
        (formData[key] === null || formData[key] === "") &&
        key !== "licenceNo"
      ) {
        status = false;
      }
    }
    if (status) {
      axiosInstance
        .post("/application/create", formData)
        .then((res) => {
          setShowAlert({
            show: true,
            message: "Application submitted successfully!!!",
            success: true,
          });
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              elegibleToWorkInCanada: "",
              eligibilityType: "",
              validSecurityGuardLicence: "",
              licenceNo: "",
              canDrive: "",
              highestLevelOfEducation: "",
              educationInCanada: "",
              priorExperience: "",
              yearsOfExp: "",
            });
            setShow(false);
          }, 2500);
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Error submitting application!!!",
            success: false,
          });
        });
    } else {
      setShowAlert({
        show: true,
        message: "Fill all fields!!!",
        success: false,
      });
    }
  };

  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
              JOBS
            </h1>
          </div>
        </div>
      </div>

      <div className="">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <button
                onClick={() => setShow(true)}
                className="mx-auto font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
              >
                APPLY NOW
              </button>
              <div className="flex flex-row items-stretch w-full mt-10 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Scope of Service
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>

              <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row">
                <div className="">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Retail
                    Malls
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Commercial Properties{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Condominiums{" "}
                  </li>
                </div>
                <div className="md:ml-10">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Industrial Sites
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Healthcare Facilities
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Mobile
                    Guard{" "}
                  </li>
                </div>
              </ul>

              <div className="flex flex-row items-stretch w-full mt-10 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Employment Requirements
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>
              <ul className="text-gray-2 font-medium text-lg mb-6">
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> A valid
                  Ontario Security Licence{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Previous
                  experience
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Education
                  (Ontario Grade 12 or equivalent)
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  Availability to work required shifts{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> No
                  criminal record
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Canadian
                  citizen or landed immigrant status
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Available
                  transportation to get to work{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> A clean
                  and professional appearance with good hygiene
                </li>
              </ul>
              <div className="flex flex-row items-stretch w-full mt-10 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Requirements
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                When working as a security guard there are some gear
                requirements which are needed so that you can perform your duty
                efficiently.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-between text-center mb-6">
                {req.map((r) => {
                  return (
                    <>
                      <div className="p-4 w-72 sm:w-96 lg:w-1/2">
                        <div className="h-full overflow-hidden ">
                          <div className="rounded-2xl">
                            <img
                              src={`${API}/requirement/get-photo/${r?._id}`}
                              alt=""
                              className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl mx-auto"
                            />
                          </div>
                          <div className=" bg-white mx-3 md:mx-0 lg:mx-3 mt-4">
                            <div className="border-t-4 border-r-4 border-l-4 border-client md:h-44 rounded-t-lg">
                              <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                                {r?.title}
                              </h2>
                              <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                                {r?.description}
                              </p>
                            </div>
                            <div className="bg-client rounded-b-lg">
                              <Link to="/contact">
                                <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto">
                                  ${r?.price}
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <button
                onClick={() => setShow(true)}
                className="mx-auto font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
              >
                APPLY NOW
              </button>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? "block" : "hidden"
        } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}
      >
        <div className="bg-client rounded-lg w-11/12 lg:w-2/3 relative pb-4">
          <div className="w-full flex justify-end p-2 absolute">
            <IconButton
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  elegibleToWorkInCanada: "",
                  eligibilityType: "",
                  validSecurityGuardLicence: "",
                  licenceNo: "",
                  canDrive: "",
                  highestLevelOfEducation: "",
                  educationInCanada: "",
                  priorExperience: "",
                  yearsOfExp: "",
                });
                setShow(false);
              }}
            >
              <CloseRoundedIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="pl-10 pr-14 mt-6">
            {showAlert.show ? (
              <Alert alert={showAlert} rmAlert={setShowAlert} />
            ) : null}
          </div>

          <div className="w-full flex justify-center mt-4 mb-4 px-4">
            <h1 className="text-3xl font-bold text-gray-3">
              {formNo === 4 ? "Personal Information" : null}
              {formNo === 3 ? "Work Status" : null}
              {formNo === 2 ? "Education" : null}
              {formNo === 1 ? "Experience" : null}
            </h1>
          </div>
          <div className="w-full px-2 lg:px-10 mb-6">
            <div className="w-full bg-white h-3 rounded-full border-3 border-white">
              <div
                className={`${
                  formNo === 1
                    ? "w-full"
                    : formNo === 2
                    ? `w-2/3`
                    : formNo === 3
                    ? `w-1/3`
                    : formNo === 4
                    ? `w-2`
                    : `w-full`
                } transition-all duration-500 bg-red-1 h-full rounded-full`}
              ></div>
            </div>
          </div>
          {formNo === 4 ? (
            <PersonalDetails
              setFormNo={setFormNo}
              formNo={formNo}
              setFormData={setFormData}
              formData={formData}
            />
          ) : null}
          {formNo === 3 ? (
            <WorkStatus
              setFormNo={setFormNo}
              formNo={formNo}
              setFormData={setFormData}
              formData={formData}
            />
          ) : null}
          {formNo === 2 ? (
            <Education
              setFormNo={setFormNo}
              formNo={formNo}
              setFormData={setFormData}
              formData={formData}
            />
          ) : null}
          {formNo === 1 ? (
            <Experience
              setFormNo={setFormNo}
              formNo={formNo}
              setFormData={setFormData}
              formData={formData}
              submitForm={submitForm}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
