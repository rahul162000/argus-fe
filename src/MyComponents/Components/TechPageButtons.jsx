import React from "react";
import { Link } from "react-router-dom";

export default function TechPageButtons() {
  return (
    <div className="w-full my-6 font-bold">
      <div className="w-full flex flex-col lg:flex-row ">
        <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:mr-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/incidentreporting"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">01.</span> INCIDENT REPORTING
        </Link>
        </div>
        <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:ml-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/tours&checkpoints"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">02.</span> TOURS & CHECKPOINTS
        </Link>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
      <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:mr-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/dispatch&tasks"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">03.</span> DISPATCH & TASKS
        </Link>
        </div>
        <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:ml-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/reports&data"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">04.</span> REPORTS & DATA
        </Link>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
      <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:mr-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/communication"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">05.</span> COMMUNICATIONS
        </Link>
        </div>
        <div className="w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-start p-1 mx-auto md:ml-4 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
        <Link
          to="/mobilepatrols"
          className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200"
        >
          <span className="text-red-1">06.</span> MOBILE PATROLS
        </Link>
        </div>
      </div>
    </div>
  );
}
