import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axiosInstance from "../../helpers/axiosInstance";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import SideLine from "./../Components/SideLine";

const Courses = () => {
  const [faq, setFaq] = useState(0);
  const history = useHistory();

  const courses = useSelector((state) => state.progress.courses);

  console.log(courses);

  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
              COURSES
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-no-repeat bg-mapbg bg-contain">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="Training Page" className="w-full" />

              {courses.map((c) => {
                return (
                  <>
                    <div className="flex flex-row items-stretch w-full mt-14 mb-8">
                      <SideLine />
                      <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                        {c?.name}
                      </h1>
                    </div>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6 whitespace-pre-line">
                      {c?.description}
                    </p>
                    <button
                      onClick={() =>
                        history.push(`/dashboard/student/payment/${c?._id}`)
                      }
                      className="mx-auto md:mx-0 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-10 sm:mt-0 hover:shadow-button-inner-1 mb-8"
                    >
                      REGISTER
                    </button>
                  </>
                );
              })}

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Basic Security Training Course topics
                </h1>
              </div>
              <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row mb-6">
                <div className="">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Introduction to the Security Industry
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Basic
                    Procedures{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Regulations{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Use of
                    Force Theory
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Emergencies{" "}
                  </li>
                </div>
                <div className="md:mx-10">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Health
                    & Safety
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Canadian Legal System & Authorities{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Communication I & II{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Conflict Resolution
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Diversity & Sensitivity
                  </li>
                </div>
              </ul>
              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  FAQ
                </h1>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(1)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">1.</span> Where
                    do I take the test?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 1 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 1
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 1 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>
                    Testing services for the Ministry of Community Safety and
                    Correctional Services, Private Security Investigator
                    Security Guards Branch is only available through an approved
                    agency called SERCO. Please be cautious of other entities
                    who suggest they can offer testing services. SERCO,
                    operating as Ontario Security Guard and Private Investigator
                    may be contacted by telephone at 1-866-248-2555, 8:00 am to
                    5:00 pm, Monday to Friday or through their website at:{" "}
                    <a
                      href="http://www.ontariosecuritytesting.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-1 hover:underline"
                    >
                      www.ontariosecuritytesting.com{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(2)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">2.</span> Is
                    there a website to answer my questions?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 2 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 2
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 2 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>Yes,
                    please visit{" "}
                    <a
                      href="http://www.ontariosecuritytesting.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-1 hover:underline"
                    >
                      www.ontariosecuritytesting.com{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(3)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">3.</span> How
                    much does it cost?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 3 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 3
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 3 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    test fee is $66.50 plus applicable taxes.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(4)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">4.</span> Does
                    this fee include the cost of my license?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 4 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 4
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 4 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    licensing fee and test fee are two separate costs — one for
                    the test and one for the license.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(5)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">5.</span> Where
                    do I take the training?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 5 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 5
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 5 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>
                    Training programs are offered at Authorized Argus Training
                    Centers. Course is offered every other week. Contact Us for
                    Location.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(6)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">6.</span> Is
                    everything included in the price of the course?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 6 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 6
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 6 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>Yes.
                    There are no hidden fees. Study manual, First Aid/CPR
                    certification, license assistance, and notary services are
                    all included.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(7)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">7.</span> What
                    is the cost to the five days of training?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 7 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 7
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 7 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    training will be provided to non-licensed persons who want
                    to become security guards at a cost of $199.00 plus HST.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(8)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">8.</span> If I
                    have to take the test more than once, do I have to pay again
                    each time?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 8 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 8
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 8 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>Yes,
                    if you fail the test you must pay to re-write it.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(9)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">9.</span> Do I
                    have to take the test each time my license is going to
                    expire?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 9 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 9
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 9 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>No,
                    you only need to pass the test once to be qualified for
                    license renewals.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(10)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">10.</span> Do I
                    have to take the test each time my license is going to
                    expire?How many questions are on the test?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 10 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 10
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 10 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    test is comprised of 60 multiple choice questions with four
                    possible answers each. The test is supervised by a SERCO
                    ‘Invigilator’, an employee assigned to supervise all test
                    participants to ensure that all rules are adhered to. Please
                    see the SERCO website below for more details:{" "}
                    <a
                      href="http://www.ontariosecuritytesting.com/candidate_protocol.html"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-1 hover:underline"
                    >
                      www.ontariosecuritytesting.com/candidate_protocol.html
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(11)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">11.</span> How
                    much time is given to complete the test?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 11 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 11
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 11 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    time limit for the test is 75 minutes. Breaks are allowed
                    only under strict supervision and details are available at
                    the website. If you finish your test early, you must remain
                    in the testing facility for a minimum of 60 minutes before
                    you can submit your test to the Invigilator and be excused
                    from the facility. renewals.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(12)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">12.</span> When
                    will I get back my test results?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 12 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 12
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 12 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    results of the test are typically made available within 24
                    hours of completion. However, it may take up to 2 – 5
                    business days after the completion of the test before they
                    are made available at{" "}
                    <a
                      href="http://www.ontariosecuritytesting.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-1 hover:underline"
                    >
                      www.ontariosecuritytesting.com
                    </a>
                    .
                  </div>
                  <div
                    className={faq === 12 ? "block text-base mt-2" : "hidden"}
                  >
                    Once you have been confirmed that you have successfully
                    passed the test, you may apply for a license with the
                    Ministry (in accordance with their standards and practices).
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(13)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">13.</span> When
                    is the expiry date on my license? What is the cost of the
                    license?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 13 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 13
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 13 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>The
                    expiry date of the license is set two years from the date of
                    issue. You are required to renew your license every two
                    years. The cost of the license is $80.
                  </div>
                </div>
              </div>
              <div
                className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl rounded-lg"
                onClick={() => setFaq(14)}
              >
                <div className="flex flex-row">
                  <p>
                    <span className="text-red-1 font-bold mr-2">14.</span> I am
                    already certified in First Aid/CPR. Do I still need to
                    attend the CPR training day?
                  </p>
                  <p className="text-red-1 font-bold ml-auto text-xl cursor-pointer">
                    {faq === 14 ? "" : "+"}
                  </p>
                </div>
                <div
                  className={
                    faq === 14
                      ? "transition-all opacity-100 duration-700"
                      : "transition-all opacity-0 duration-700"
                  }
                >
                  <div
                    className={faq === 14 ? "block text-base mt-2" : "hidden"}
                  >
                    <span className="text-red-1 font-bold mr-2">Ans) </span>No.
                    As of October 1, 2015, all persons holding a current valid
                    certificate from a recognized training provider are only
                    required to attend four days of training and will be exempt
                    from the fifth day.
                  </div>
                  <div
                    className={faq === 14 ? "block text-base mt-2" : "hidden"}
                  >
                    Argus Security must be provided with a copy of your First
                    Aid/CPR certificate.
                  </div>
                  <div
                    className={faq === 14 ? "block text-base mt-2" : "hidden"}
                  >
                    If you are unable to provide us with a copy of your
                    certificate you will be required to attend all five days of
                    training.
                  </div>
                </div>
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
