import React from "react";
import { Link } from "react-router-dom";
import SideLine from "../../Components/SideLine";

export default function Training() {
  return (
    <div className="font-for-para">
      <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto mt-4 mb-8 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
        <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
          TRAINING
        </h1>
        <div className="flex flex-row items-stretch w-full mt-8 mb-6">
          <SideLine />
          <h1 className="leading-tight text-3xl font-bold text-gray-3">
            STEP 1: Complete All Online Training Lessons
          </h1>
        </div>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          Please follow these instructions carefully. To proceed through the
          training lessons, you must complete the current module by the required
          time. After completing the required time, you must take the lesson
          quiz to move on to the next module.
        </p>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          You will need to accumulate the required time for the lesson time to
          progress to the next lesson. Your time accumulation will start from
          the first slide until you reach the end of the slides or select the
          pause button. If you are away from the keyboard for more than 15
          minutes, you will be automatically logged out and your time will be
          lost.
        </p>

        <div className="flex flex-row items-stretch w-full mt-8 mb-6">
          <SideLine />
          <h1 className="leading-tight text-3xl font-bold text-gray-3">
            Step 2: Complete First Aid Training
          </h1>
        </div>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          After completing all modules for the Basic Security Training and the
          final exam, you are required to register for First Aid training.
        </p>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          To schedule your First Aid Training, click on the First Aid link on
          the side menu and then press the Enroll link next to the class date
          you would like to attend.
        </p>

        <div className="flex flex-row items-stretch w-full mt-8 mb-6">
          <SideLine />
          <h1 className="leading-tight text-3xl font-bold text-gray-3">
            Step 3: Identification Submissions
          </h1>
        </div>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          After completing all modules for the Basic Security Training and the
          final exam, you are required to register for First Aid training.
        </p>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          To schedule your First Aid Training, click on the First Aid link on
          the side menu and then press the Enroll link next to the class date
          you would like to attend.
        </p>

        <div className="flex flex-row items-stretch w-full mt-8 mb-6">
          <SideLine />
          <h1 className="leading-tight text-3xl font-bold text-gray-3">
            Step 4: Consent Forms Received
          </h1>
        </div>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          You must complete, sign, and return the consent forms to us to receive
          your training completion number.
        </p>

        <div className="flex flex-row items-stretch w-full mt-8 mb-6">
          <SideLine />
          <h1 className="leading-tight text-3xl font-bold text-gray-3">
            Step 5: Preparation Complete
          </h1>
        </div>
        <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
          It is recommended that you take the preparation test before taking the
          ministry exam, as it is an indicator of your readiness. We work to
          ensure all our students are successful the first time they take the
          ministry exam.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <Link
          to="/dashboard/student/course"
          className="mx-auto font-bold text-white bg-red-1 py-2 px-6 md:px-10 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-10 sm:mt-0 hover:shadow-button-inner mb-12"
        >
          START TRAINING
        </Link>
      </div>
    </div>
  );
}
