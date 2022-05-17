import React, { Component } from "react";
import technology_image from "./../../../argus website/PNG/Silvertrac.png";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import SideLine from "./../../Components/SideLine";

class Technology extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                TECHNOLOGY
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-no-repeat bg-mapbg bg-contain">
          <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
            <div className="flex flex-wrap my-12">
              <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                <img
                  src={technology_image}
                  alt="About page"
                  className="mx-auto w-96"
                />

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    SilverTrac
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Argus Security uses the Silvertrac mobile app system. This
                  allows guards to clock on upon arrival at their site. We are
                  made automatically aware when our Guards arrives on site, and
                  their activities by the application of GPS. Silvertrac is the
                  mist efficient bridge between logistics and operations
                  department of Argus Security.
                </p>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  We've exceeded customer expectations and has provided the
                  level of service well above the competition using clear,
                  reliable reporting data.{" "}
                </p>

                <TechPageButtons />

                <div></div>
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;
