import React from "react";

import accountable from "./../../argus website/SVG/2. Accountable.svg";
import { Link } from "react-router-dom";
import section4_img1 from "./../../argus website/PNG/Video1.png";
import section4_img2 from "./../../argus website/PNG/3.Charlie.png";
import quotes from "../../argus website/SVG/Appostrophies square.svg";
import signature from "./../../argus website/SVG/01.svg";
import section6 from "./../../argus website/PNG/sdm.png";
import section4img from "./../../argus website/PNG/raw-2_edited.png";
import section5 from "./../../argus website/PNG/0000000.png";
import camera from "./../../argus website/SVG/3. camera.svg";
import EmployeeMonth from "../Components/EmployeeMonth";
import ClientTestimonial from "../Components/ClientTestimonial";
import ClientCorousal from "../Components/ClientCorousal";
import { useSelector } from "react-redux";
import SideLine from "../Components/SideLine";
import { useRef } from "react";
import useOnScreen from "../../helpers/onScreen";
import siren from "./../../argus website/SVG/3. Light.svg";

export default function Home() {
  const contact = useSelector((state) => state.contact);
  const testimonial = useSelector((state) => state.testimonial.testimonial);

  const ref1 = useRef();
  const isWhiteLineVisible = useOnScreen(ref1);

  const ref2 = useRef();
  const isQouteVisible = useOnScreen(ref2);

  return (
    <div className="font-for-para">
      {/* Section 1 */}
      <div className="">
        <div className="py-28 sm:py-64 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-center sm:bg-left lg:bg-bottom bg-no-repeat bg-hero bg-cover"></div>
      </div>

      {/* Section 2 CAll Us */}
      <div className="px-4 sm:px-8 md:px-12 2xl:px-0 mx-auto max-w-1366 sm:mt-0 md:-mt-24 2xl:-mt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mx-auto">
          <div className="">
            <h1 className="flex-grow sm:pr-16 text-3xl sm:text-number font-bold font-for-para text-gray-400 lg:mb-1.5">
              Call Us <br />
            </h1>
            <a
              className="text-red-1 text-number md:text-4xl lg:text-6xl font-bold"
              href={`tel:${contact.phoneNumber}`}
            >
              {contact.phoneNumber}
            </a>
          </div>
          <Link
            to="/services"
            className="flex-shrink-0 font-bold text-white bg-red-1 py-5 px-4 md:px-12 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-lg mt-6 sm:mt-0 hover:shadow-button-inner-1 text-center"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>

      {/* Section 3  Accountable */}
      <div className="text-gray-600 font-for-para overflow-hidden mx-auto">
        <div className="flex flex-col md:flex-row px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-4 pb-2 mt-8 text-white justify-center">
          <div className="bg-red-1 w-full md:w-6/12 px-3 py-5 flex flex-row items-center justify-start">
            <img src={accountable} alt="" className="w-16 p-1 mx-4 sm:mx-10" />
            <div className="text-lg">
              <p>100% Accountable</p>
              <h1 className="font-bold">Know the Truth for Peace of Mind</h1>
            </div>
          </div>
          <div className="bg-gray-3 w-full md:w-6/12 px-3 py-5 flex flex-row items-center justify-start">
            <img src={accountable} alt="" className="w-16 p-1 mx-4 sm:mx-10" />
            <div>
              <p>100% Accountable</p>
              <h1 className="font-bold">
                Real Time Updates Regarding Incidents
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 Introducing Argus Security */}
      <div className="bg-contain bg-no-repeat bg-mapbg2 font-for-para">
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-12 pb-12 md:pb-28 font-for-para">
          <div className="flex flex-wrap items-start">
            <div className="items-end w-full md:w-1/2 flex flex-col md:pr-4 lg:pr-12">
              <img
                src={section4_img1}
                alt="Argus Security Services"
                className="w-full xl:w-11/12 pb-8 border-b-8 border-red-1 lg:mr-auto"
              />
              <img
                src={section4_img2}
                alt="Argus Security Services"
                className="bg-white w-8/12 pt-4 pl-4 -mt-36 md:-md-40 lg:-mt-52 xl:-mt-80"
              />
            </div>
            <div className="md:pl-3 w-full md:w-1/2 flex flex-col items-start">
              <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
                  Introducing Argus Security Services
                </h1>
              </div>
              <p className="leading-normal text-base lg:text-lg font-medium text-gray-2 mb-8">
                Argus Security ensures the team adherence to company rules and
                regulations. Our goal is to make our clients the direct
                beneficiaries of our policies and procedures.{" "}
              </p>
              <ul className="text-gray-2 font-medium text-base lg:text-lg flex flex-col md:flex-row mb-4">
                <div>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Optimized Mobile Patrols
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Fool
                    Proof Checkpoints
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> GPS
                    Tracking
                  </li>
                </div>
                <div className="md:ml-12">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Reliable Fire Watch
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Tangible Proof of Service
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Efficient Dispatching System
                  </li>
                </div>
              </ul>
              <div>
                <div className="px-2 py-2 mx-auto">
                  <div className="w-full text-left">
                    <img
                      src={quotes}
                      alt=""
                      ref={ref2}
                      className={`w-8 inline-block text-red-1 ml-4 -mb-6 ${
                        isQouteVisible
                          ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
                          : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
                      }  motion-safe:animate-scaleIn`}
                    />
                    <p className="leading-relaxed text-base lg:text-xl font-medium text-gray-2 bg-gray-200 px-6 py-6 lg:px-12 lg:py-8 shadow-speech">
                      Success is not result of the amount of time we put in,
                      instead its the quality of time we put in.
                    </p>
                    <div class="w-11 overflow-hidden inline-block -mb-4">
                      <div class=" h-16 bg-gray-200 rotate-60 transform origin-top-right shadow-speech-2"></div>
                    </div>
                    <div className="pb-4 flex items-center ">
                      <img
                        src={section4img}
                        className="w-20 h-20 p-1 border-2 border-red-1"
                        alt=""
                      />
                      <div className="ml-8">
                        <img src={signature} alt="" className="w-60" />
                        <p className="text-gray-3 text-base lg:text-lg font-bold">
                          CEO & CO FOUNDER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={camera}
          alt=""
          className="w-40 h-40 mr-auto hidden md:block -mt-60 lg:-mt-44"
        />
      </div>

      {/* Section 5 Services */}
      <div className="bg-client">
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-14 pb-6 md:pb-12 font-for-para">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap w-full items-baseline">
              <div className="w-full flex flex-col md:flex-row items-start md:items-center pb-8">
                <div className="flex flex-row items-stretch md:pr-24">
                  <SideLine />
                  <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
                    Firsthand information to our operations
                  </h1>
                </div>
                <p className="leading-relaxed font-medium text-lg text-gray-2 pt-10 md:pt-0 ">
                  As a client you will gain first hand access to day-today
                  operations and daily occurrence reposts.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-between text-center mb-6">
            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-client mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-white md:h-56 xl:h-44">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      GATED COMMUNITY
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      NFS marked vehicles, communication between residents &
                      security staff and efficient use of technology
                    </p>
                  </div>
                  <div className="bg-white rounded-b-lg">
                    <Link to="/services">
                      <button className="w-full p-4 text-gray-2 font-bold bg-white hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner-1">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-client mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-white md:h-56 xl:h-44">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      CORPORATE
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Risk management, Information security, Corporate
                      Governance, Compliance and Ethics Programs.
                    </p>
                  </div>
                  <div className="bg-white rounded-b-lg">
                    <Link to="/services">
                      <button className="w-full p-4 text-gray-2 font-bold bg-white hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner-1">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-client mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-white md:h-56 xl:h-44">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      RESIDENTIAL
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Peace of mind, theft deterrent, minimize property damager
                      and safeguard against trespassing.
                    </p>
                  </div>
                  <div className="bg-white rounded-b-lg">
                    <Link to="/services">
                      <button className="w-full p-4 text-gray-2 font-bold bg-white hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner-1">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 Call Us */}
      <div className="w-full">
        <img src={siren} alt="" className="w-40 h-40 mr-auto -mb-40" />
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 flex flex-col items-center justify-center py-14">
          <div className="w-full sm:w-9/12 flex flex-row items-end justify-center mx-auto pt-32 sm:pt-0">
            <img src={section5} className="w-24 h-24" alt="" />
            <a href={`tel:${contact.phoneNumber}`} className="mb-14 -ml-6">
              <svg
                className="w-14 h-14 bg-white rounded-xl"
                xmlns="http://www.w3.org/2000/svg"
                width="85.04"
                height="85.003"
                viewBox="0 0 85.04 85.003"
              >
                <g
                  id="Phone_logo"
                  data-name="Phone logo"
                  transform="translate(-36.779 -122.722)"
                >
                  <g
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(36.779 122.722)"
                  >
                    <path
                      id="Path_220"
                      data-name="Path 220"
                      d="M79.314,207.685c-9.468,0-18.936-.114-28.4.039A14.16,14.16,0,0,1,36.9,196.274a9.917,9.917,0,0,1-.072-1.8c0-19.279.081-38.557-.051-57.835a14,14,0,0,1,10.785-13.589,12.738,12.738,0,0,1,2.8-.316q28.778-.027,57.553-.012a13.774,13.774,0,0,1,13.6,11.835,25.224,25.224,0,0,1,.283,3.559q.027,27.564.012,55.131a14.357,14.357,0,0,1-11.7,14.357,8.32,8.32,0,0,1-1.646.075Q93.888,207.691,79.314,207.685ZM83,180.3c-.566-.361-1.185-.683-1.724-1.107A60.382,60.382,0,0,1,67.9,164.642c-1.1-1.685-.969-2.452.6-3.643,1.224-.927,2.44-1.871,3.664-2.8a1.574,1.574,0,0,0,.379-2.365,27.928,27.928,0,0,0-3.054-4.206,85.954,85.954,0,0,0-6.559-5.858,2.692,2.692,0,0,0-3.8.274c-3.761,3.634-5.355,8.042-4.242,13.207,2.184,10.163,7.1,18.683,15.545,24.956A37.953,37.953,0,0,0,92.9,192.191c3.288.054,7.287-2.72,8.267-5.6a3.33,3.33,0,0,0-.223-2.635,30.807,30.807,0,0,0-9.465-8.319,2.876,2.876,0,0,0-3.5.2C86.338,177.218,84.78,178.695,83,180.3Zm-4.134-37.973c2.323.3,4.407.445,6.441.848,7.867,1.552,13.24,6.2,16.384,13.5,2.5,5.794,3.18,11.932,3.264,18.159.018,1.282.692,1.938,1.781,1.91a1.6,1.6,0,0,0,1.643-1.892c-.129-2.034-.2-4.074-.3-6.11a38.941,38.941,0,0,0-3.075-13.406c-2.99-7.07-7.964-12.16-15.358-14.666a31.836,31.836,0,0,0-13.92-1.489c-1.965.22-3.923.539-5.861.939a1.577,1.577,0,0,0-1.258,1.925,1.476,1.476,0,0,0,1.622,1.4,9.98,9.98,0,0,0,1.342-.081C74.076,143.017,76.573,142.653,78.871,142.325Zm.4,8.273c-.563,0-1.462-.009-2.365.006a2.7,2.7,0,0,0-.575.15c-1.643.412-2.262,1.107-1.995,2.232.241,1.011,1.393,1.465,2.84,1.249A13.993,13.993,0,0,1,80.436,154a11.8,11.8,0,0,1,8.505,4.037c2.975,3.607,4.158,7.93,4.609,12.488a1.874,1.874,0,0,0,1.862,1.916,1.66,1.66,0,0,0,1.607-2.172,64.193,64.193,0,0,0-1.934-8.514C92.668,154.783,87.087,150.253,79.271,150.6Z"
                      transform="translate(-36.779 -122.722)"
                      fill="#ba0913"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <h2 className="leading-relaxed text-lg font-bold text-gray-2 pl-7">
              24 HOURS <br /> SERVICE
              <br /> AVAILABLE
            </h2>
          </div>
          <p className="text-lg title-font font-bold text-gray-900 text-center pt-4">
            Have any questions? Feel free to contact our office today at{" "}
            <a
              className="text-red-1 text-2xl"
              href={`tel:${contact.phoneNumber}`}
            >
              {contact.phoneNumber}
            </a>
          </p>
        </div>
      </div>

      {/* Section 7 Know you partners */}
      <div className="bg-cover bg-black-1 font-for-para">
        <div className="text-white body-font px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1500 font-for-para pt-10 bg-triangles bg-no-repeat bg-left-top">
          <div className="lg:px-5">
            <div className="flex flex-col-reverse md:flex-row items-stretch">
              <div className="bg-handcuffs bg-contain bg-center bg-opacity-10 bg-no-repeat flex flex-col lg:flex-row items-end overflow-hidden lg:overflow-visible">
                <img
                  src={section6}
                  alt="Argus Security"
                  className="block md:hidden lg:block -mb-28 sm:-mb-32 lg:mb-0"
                />
                <img
                  src={signature}
                  alt=""
                  className="block md:hidden lg:block w-9/12 mb-4 lg:-ml-72"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:p-4 flex flex-col items-start">
                <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl xl:text-4xl font-bold text-white">
                    Know your
                    <br />
                    Partners-in-Protection
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <Link
                    to="/about"
                    className="px-6 py-4 text-sm font-bold bg-red-1 border border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-4 text-sm font-bold bg-red-1 border my-4 md:my-0 sm:mx-4 border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg"
                  >
                    CONTACT US
                  </Link>
                  <Link
                    to="/organisationstructure"
                    className="px-6 py-4 text-sm font-bold bg-red-1 border border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg"
                  >
                    ARGUS HIERARCHY
                  </Link>
                </div>
                <p className="leading-relaxed font-medium text-lg pt-6 sm:pb-10 lg:pb-3 lg:pr-0 2xl:pr-24 ">
                  At Argus Security Services we maintain a prominent level of
                  training for our guards in response to our highly sensitive
                  sites. We offer 24/7 fast and reliable security services.
                  Qualifications of our Directors are as follows:
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 lg:mb-0 w-full">
                  <div>
                    <img
                      src={section4img}
                      className="w-44 lg:w-28 xl:w-36 mr-8 hidden sm:block lg:hidden xl:block"
                      alt=""
                    />
                  </div>
                  <div>
                    <ul className="py-4 text-lg sm:text-sm lg:text-lg xl:text-sm xl:font-bold">
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Member of Law society of Ontario
                      </li>
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Police Foundation Certified
                      </li>
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span> 7
                        Years of Security Experience
                      </li>
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Sometimes buys me Coffee
                      </li>
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Good Taste in Movies
                      </li>
                      <li className="flex flex-row items-start py-0.5 sm:py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Good Guy Though{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8 Covid 19 CTA */}
      <div className="bg-red-1 bg-repeat-y bg-cta-bg bg-top bg-stretch-x bg bg-blend-multiply">
        <div className="px-4 sm:px-8 lg:px-14 2xl:px-0 mx-auto max-w-1366 py-4 md:py-12 flex flex-col md:flex-row justify-around items-stretch md:items-center font-for-para">
          <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-2 md:mb-0">
            <span
              ref={ref1}
              className={`h-auto min-w-8 w-8-px max-w-8 bg-white mr-7 rounded-full ${
                isWhiteLineVisible
                  ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
                  : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
              }  motion-safe:animate-scaleIn`}
            ></span>
            <h1 className="text-3xl lg:text-4xl lex-grow sm:pr-14 font-bold text-white leading-tight">
              Covid 19 Procedures and much more to safeguard your business.
            </h1>
          </div>
          <a
            href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 font-bold text-white py-5 px-12 focus:outline-none hover:bg-white border-4 border-double border-white hover:text-red-1 rounded-lg text-lg mt-6 mb-8 md:mt-0 md:mb-0 hover:shadow-button-inner-1 text-center"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>

      {/* Section 9 Client Testimonial */}
      <ClientTestimonial testimonial={testimonial} />

      {/* Section 10 Employee of the Month */}
      <EmployeeMonth />

      {/* Section 11 Sponsors */}
      <ClientCorousal />
    </div>
  );
}
