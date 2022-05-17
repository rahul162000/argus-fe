import React, { Component } from "react";
import about_image from "./../../../argus website/PNG/Checkpoints.png";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import SideLine from "./../../Components/SideLine";

class ToursCheckpoints extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                TOURS & CHECKPOINTS
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
                    Complete Officer Accountability
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Providing full accountability in a security guard company is a
                  critical differentiator and a scalable advantage. Clients
                  expect transparency on where and when guards are active and
                  what is actually getting done. But traditional guard tour
                  systems lack the ability to show clients what guard activity
                  looks like in real-time.
                </p>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Painting a Complete Picture
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Silvertrac’s digital guard tour system software provides a
                  complete story of every security guard tour with:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Custom
                    tour sequences
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Step-by-step post instructions
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Live
                    tour updates{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> GPS
                    mapping/checkpoint verification{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Photo
                    and/or written note reporting requirements for increased
                    accountability{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Instant
                    notifications on checkpoint scanning{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Painting a Complete Picture
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Silvertrac’s digital guard tour system software provides a
                  complete story of every security guard tour with:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Custom
                    tour sequences
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Step-by-step post instructions
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Live
                    tour updates{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> GPS
                    mapping/checkpoint verification{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Photo
                    and/or written note reporting requirements for increased
                    accountability{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Instant
                    notifications on checkpoint scanning{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    An All-Inclusive Mobile Guard App
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Everything guards need for rounds exists within an intuitive
                  mobile guard app that:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Scans
                    checkpoints using QR Codes, Barcodes, or NFC Tags
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Sends
                    specific instructions to the phone for each hit
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                    Automatically logs GPS and time-stamping on each scan{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Shows
                    time left before each tour is due{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="font-bold text-red-1 mr-2">✓</span> Crosses
                    out each hit as it happens{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Send Relevant Information Quickly
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Guards need someone behind the scenes to create and dispatch
                  tasks in order to stay focused. That’s why every piece of data
                  gets sent back to the issue monitor database automatically.
                  The Issue Monitor gathers all scanned checkpoint data from the
                  field and prepares it in your Daily Activity Reports. Allowing
                  management to better measure guard performance and address
                  issues before they cost a contract. All of this radically
                  streamlines daily operations, keeps guards focused,
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

export default ToursCheckpoints;
