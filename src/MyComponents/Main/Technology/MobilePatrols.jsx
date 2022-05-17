import React, { Component } from "react";
import about_image from "./../../../argus website/PNG/Reporting.png";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import SideLine from "./../../Components/SideLine";

class MobilePatrols extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                MOBILE PATROLS
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-no-repeat bg-mapbg bg-contain">
          <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
            <div className="flex flex-wrap my-12">
              <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                <img
                  src={about_image}
                  alt="About page"
                  className="mx-auto w-96"
                />

                <div className="flex flex-row items-stretch w-full mt-14 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Optimized Mobile Patrols
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  There’s an ever-increasing demand in the security industry to
                  deliver at speed and at scale. The only way to meet that
                  demand with mobile patrols is to be better, faster, and
                  cheaper, which means reducing time and cost spent in an
                  operation. Silvertrac helps optimize mobile patrols by:
                </p>
                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Tracking patrol productivity in real-time through
                    checkpoints.
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Minimizing service interruptions.
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Reducing time between sites{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Visualizing mobile patrols{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Integrating Google Maps® so guards never have to leave the
                    app{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Mobile Patrol Checkpoints
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Checkpoints are the key to Silvertrac’s mobile patrol software
                  success. They guide officers on patrol throughout each shift
                  via digital checkpoints and are easy to set up across multiple
                  properties through the Issue Monitor. All of this adds a level
                  of detail that allows teams to further optimize how drivers
                  spend their time. When a checkpoint is hit, four things
                  happen:
                </p>
                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> The
                    officer receives specific instructions for the current site.
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> A
                    pre-written note is added directly to the Daily Activity
                    Report (DAR).
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> A GPS
                    pinpoint is captured showing the time and location of the
                    hit.{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Option
                    to require a photo to be taken of the area.{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Automatically Populate Daily Activity Reports
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  In the field, guards can quickly log all security,
                  maintenance, and parking related issues at each property with
                  ease. As officers report what they see on site, Daily Activity
                  Reports and incident reports are automatically created so
                  officers won’t spend hours back at the office after each shift
                  with pen & paper.
                </p>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Track Every Vehicle-Related Cost
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Silvertrac has the tools to stay on top of every vehicle in
                  your fleet. Track vehicle usage, reduce maintenance costs, and
                  optimize routes by quickly recording important patrol vehicle
                  info like pre and post-shift inspections, maintenance
                  concerns, odometer readings, gas purchases, and more.
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

export default MobilePatrols;
