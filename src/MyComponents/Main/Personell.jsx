import React from "react";
import AboutPageButtons from "../Components/AboutPageButtons";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import SideLine from "./../Components/SideLine";

export default function Personell() {
  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
              PERSONELL
            </h1>
          </div>
        </div>
      </div>

      <div className=" bg-no-repeat bg-mapbg bg-contain">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page" />
              <p className="leading-relaxed text-lg font-medium text-gray-2 mt-14 mb-6">
                Argus Security has more than 5000 Guards available within our
                employment database and will be able to provide you with a
                licensed, insured, and bonded Security Guards service. We
                understand that by providing you with world-class service, we
                must be a world-class employer. As our Guards are our greatest
                asset; we value the importance of maintaining a good
                relationship by providing continuous opportunity, advancement,
                and superior training.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Rigorously Screened
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Argus Security Pre-employment screening process involves
                investigating the backgrounds of potential employees to make
                sure that their skills, experience, and attitude meets our
                standards. The screening process is designed to verify the
                accuracy of an applicant’s resume as well as to discover any
                possible criminal history, workers’ compensation claims, or
                employer sanctions. This helps to reduce potential risk to our
                clients and helps establish a high degree of trust with our
                customers.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Exceptionally Trained
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security Guards are all trained to meet and exceed the
                required security training that the government has regulated. In
                addition to the required government training, Argus Security
                Guards receive enhanced security training that distinguishes
                them as the highest trained in the industry. Our Guards training
                is managed by our very own Learning Management System that is
                integrated with our Human Resource System. This enables the
                Human Resource department to organize the list of Guards that
                require site-specific and advanced training programs. The Argus
                Security Learning Management System helps guide our Guards
                through the list of training programs for career advancement
                opportunities. Argus Security Guards have access to our training
                portal at any time of the day and can see their progress and
                achievements.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Professional Attitudes
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
                Argus Security is built on a culture of professionalism. Our
                Guards are trained to maintain a professional attitude. We
                define a professional attitude as someone who has respect,
                integrity, honor, and always is looking out for our customer’s
                best interest. Our Guards’ attitudes must represent the trust
                that we are building with our customers. Deviant and negligent
                behaviors are immediately corrected through a progressive
                disciplinary action plan. With automated weekly performance
                reviews and Guards’ access to their performance metrics, Argus
                Security maintains the highest level of discipline in the
                industry.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Accountability
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Each site will be given a Supervisor who will be responsible for
                the management of security operations. The Site Supervisor will
                be responsible for the site’s scheduling, reviewing reports,
                monitoring the Guards performance, and hiring and removal of
                Guards. The Site Supervisor will be given the authority to
                properly take ownership of the site security activities and will
                be given all the resources, training, and tools they need to
                accomplish their mission of providing excellent service. This is
                the best management method to ensure that your site gets all the
                attention and resources it needs.
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
