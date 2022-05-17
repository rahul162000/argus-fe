import React, { Component } from "react";
import about_image from "./../../../argus website/PNG/incidentReporting.png";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import SideLine from "./../../Components/SideLine";

class IncidentReporting extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                INCIDENT REPORTING
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
                    Robust Incident Reporting
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Simple incident reporting helps better gauge guard performance
                  & improve client relations. Incident reporting feature allows
                  guards to add the most important information anytime from any
                  site as conveniently as possible. Traditional pen & paper
                  reporting makes producing a Daily Activity Report a hassle.
                </p>

                <div className="flex flex-row items-stretch w-full mt-6 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Efficient Data Collection
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  We do not have to spend time chasing down information from
                  guards instead we use it to resolve the issues at hand.
                  Silvertrac’s intuitive mobile guard app is designed to make
                  security report writing as easy as possible so the right
                  people get the right alerts at the right time. Guards simply
                  tap and send and Silvertrac will handle the rest. Report
                  issues straight from the field - in real-time from any
                  property - based on criteria that can be included in any
                  report, like:
                </p>

                <ul className="text-gray-2 text-lg mb-7">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Time-stamped photos, audio files, and text notes.
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Priority levels and notification settings for any issue
                    type.{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Property-specific issue types{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-6 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Filtered Reports
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Each incident is immediately available for review in the Issue
                  Monitor. Reports can be filtered by property, issue type,
                  guard, priority level, and more. This allows any Argus
                  Security to easily create detailed and personalized reports
                  that have everything needed to support client demands. Reports
                  are automatically generated and ready to be delivered to
                  clients, giving them everything they need to know in one
                  bite-sized summary.
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

export default IncidentReporting;
