import React, { Component } from "react";
import about_image from "./../../../argus website/PNG/Dispatch.png";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import SideLine from "./../../Components/SideLine";

class DispatchTasks extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                DISPATCH & TASKS
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
                    Dispatch Overview
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  This feature provides Team Argus everything they need to
                  easily dispatch tasks out to the field and simplify
                  communication between guards in the field, dispatch, and
                  supervisors from one convenient location. Silvertrac’s
                  centralized dispatch and task management makes it easy to
                  manage teams better, solve issues faster, and do what’s best
                  for clients with amazing features like:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Intuitive dashboards
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Pass
                    down notes from shift to shift or post to post{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Live
                    GPS maps{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Scheduling for tasks and guard tours{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Automation of sending recurring tasks and reminders{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Messaging within the Silvertrac mobile app for guards
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-6 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Dispatching One-Off Tasks
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Dispatching one-off tasks has never been simpler. Assign tasks
                  directly from the issue monitor in three easy steps:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Select
                    “New Action” to pick any property in the system
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Add
                    “New Issue Type” and include any additional notes{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Assign
                    the new task to a specific guard or the first available
                    officer{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-6 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Simple Task Assignment for Guards
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Once assigned, guards complete a process that is just as easy
                  as dispatching tasks:
                </p>

                <ul className="text-gray-2 text-lg mb-8">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> The
                    guard assigned is instantly notified on their device with a
                    description of the task and where to complete it.
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> They
                    can handle the task right away and include pictures, notes
                    or audio files for reports.{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Once
                    complete, the guard submits the task back to the dispatcher
                    and updates{" "}
                  </li>
                </ul>

                <div className="flex flex-row items-stretch w-full mt-6 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Simplified Field Operations Management
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  The Issue Monitor makes managing field operations easy. Every
                  issue is colorcoded based on its status. Quickly filter for
                  relevant issues, access live GPS updates, and keep a finger on
                  the pulse of any issue, at any property. The issue monitor
                  will show when guards receive a task, when they confirm it,
                  and when they solve it. Every task is added to all relevant
                  reports - including incident reports, Daily Activity Reports,
                  and summary reports so clients receive them quickly and
                  accurately
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

export default DispatchTasks;
