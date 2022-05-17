import React, { useState } from "react";
import Basket from "./Components/LMS/Form/Basket/Basket";
import DocumentApproval from "./Components/LMS/Form/DocumentApproval";
import LicensedStudents from "./Components/LMS/Form/LicensedStudents";
import LicensedStudent from "./Components/LMS/Form/LicensedStudents";
import UpdateTrainingNo from "./Components/LMS/Form/UpdateTrainingNo";
import NavLms from "./Components/LMS/NavLms";
import ProfileBar from "./Components/ProfileBar";
import SideNav from "./Components/SideNav";

export const LmsLicense = () => {
  const [show, setShow] = useState(1);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-16 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav active={6} />
      </div>
      <div className="w-9/12 sm:w-10/12 mx-auto">
        <ProfileBar />
        <NavLms active={2} />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-72 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <nav className="flex flex-col md:flex-row text-gray-3 text-lg items-center">
            <button
              onClick={() => setShow(1)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold -mt-64 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 1 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setShow(2)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 lg:mr-1 lg:ml-2 bg-white hover:shadow-button-shadow-3 ${
                show === 2 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Baskets
            </button>
            <button
              onClick={() => setShow(3)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 lg:ml-1 lg:mr-2 bg-white hover:shadow-button-shadow-3 ${
                show === 3 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Licensed
            </button>
            <button
              onClick={() => setShow(4)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 4 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Training No.
            </button>
          </nav>
          <div className="p-4">
            <div className={show === 1 ? "block" : "hidden"}>
              <DocumentApproval />
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              <Basket />
            </div>
            <div className={show === 3 ? "block" : "hidden"}>
              <LicensedStudents />
            </div>
            <div className={show === 4 ? "block" : "hidden"}>
              <UpdateTrainingNo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsLicense;
