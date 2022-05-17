import React from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import AboutPageButtons from "../Components/AboutPageButtons";
import SideLine from "./../Components/SideLine";

export default function OrganisationStructure() {
  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
              ORGANIZATION STRUCTURE
            </h1>
          </div>
        </div>
      </div>

      <div className=" bg-no-repeat bg-mapbg">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page" />
              <p className="leading-relaxed text-lg font-medium text-gray-2 mt-14 mb-6">
                Argus Security is a customer-centric culture, and we are proud
                to put our customers first, in every area of our operation. All
                that we do revolves around our customers’ needs and
                expectations. Our organization is designed with departments that
                are guided by clear standards and procedures.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Directors Department
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Directors Department is designed to ensure that our
                operation delivers the best customer experience by ensuring that
                every department is focused on meeting and exceeding customer
                expectations. The Director’s mission is to optimize every branch
                and department business process by directing activities that
                reduce redundancy and increase customer satisfaction.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Human Resources
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Human Resources Department works in partnership with our
                employees to create a positive work environment that empowers
                our members to achieve their goals. Our organizational values of
                customer orientation, continuous improvement, teamwork, and
                achieving results are at the centre of what makes Argus Security
                one of the best employers.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Legal Department
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Legal Departments’ mission is to guide every operation
                towards legal compliance, provide advice and to protect clients.
                The Legal Department processes all formal legal disputes and
                assesses the risk to the clients. The Legal Department will
                handle complex matters by organizing the case and identifying
                areas where mitigation can apply
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Area Management Department
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Mission of the Area Management Department is to establish
                relationships with the community, communication between our
                organization and the residents, and to improve the
                neighborhood’s security level. The Area Management Department is
                also responsible for the service delivery operations and is
                tasked with improved service levels by providing oversight and
                guidance where required.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Accounting Department
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Accounting Department’s mission is to record every financial
                transaction and provide accurate, detailed, and understandable
                billing to our customers. The Accounting Department’s systems
                are integrated with our scheduling system which eliminates
                errors due to the transfer of data. Customers can expect to
                receive their invoices with a detailed report on login and out
                times, the Guard who was working on the shift, GPS verification,
                and management signature.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Dispatch Department
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Mission of the Area Management Department is to establish
                relationships with the community, communication between our
                organization and the residents, and to improve the
                neighborhood’s security level. The Area Management Department is
                also responsible for the service delivery operations and is
                tasked with improved service levels by providing oversight and
                guidance where required.
              </p>

              <AboutPageButtons />
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
