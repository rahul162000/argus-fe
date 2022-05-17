import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactForm from "./Contact";
import callus_logo from "./../../argus website/SVG/Call us now.svg";

function SideBarAbout() {
  const contact = useSelector((state) => state.contact);

  return (
    <div className=" lg:w-1/3 md:w-1/2 md:pl-6 lg:pl-8 xl:pl-12  flex-col md:ml-auto w-full md:mt-0 hidden md:block">
      <div className="text-gray-2 text-xl font-bold bg-gray-200 mb-8">
        <h1 className="font-bold bg-gray-3 text-white text-xl p-5">
          <span className="ml-8">Services</span>
        </h1>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{" "}
            Residential Security
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{" "}
            Commercial Security
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-0.5 xl:mx-4">➔</span> Event
            Security
          </h1>
        </Link>
        <Link to="/courses">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{" "}
            Security License
          </h1>
        </Link>
        <Link to="/jobs">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{" "}
            Employment
          </h1>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center text-center mx-auto px-6 py-10 bg-gray-200 mt-32 mb-8">
        <img src={callus_logo} alt="" className="w-56 -mt-32 mb-2 " />
        <h1 className="text-xl leading-relaxed font-bold text-gray-2 p-2 mb-4">
          Professional Help to get back your peace of mind
        </h1>
        <a
          className="w-full text-2xl p-4 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg mt-10 sm:mt-0 hover:shadow-button-inner-1"
          href={`tel:${contact.phoneNumber}`}
        >
          {contact.phoneNumber}
        </a>
      </div>
      <ContactForm />
    </div>
  );
}

export default SideBarAbout;
