import React from "react";
import CompanyContact from "../../Components/CompanyContact";
import ContactForm from "../../Components/Contact";
import SideLine from "../../Components/SideLine";

export default function Contact() {
  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white px-2 md:px-8 pb-8 shadow-button-shadow-3 font-for-para">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">CONTACT</h1>
      <div className="flex flex-col xl:flex-row items-start sm::p-5">
            <div className="p-2 md:p-0 md:pr-6 xl:w-1/3 flex flex-col items-start text-lg font-medium text-gray-2">
              <div className="flex flex-row items-stretch w-full mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl title-font font-bold text-gray-3">
                  How can we help?
                </h1>
              </div>
              <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
                We are experiencing longer than usual response times due to{" "}
                <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html" target="_blank" rel="noreferrer" className="text-red-1 hover:underline"> Covid-19</a>. We
                appreciate your patience and apologize in advance for any delays
                in responding to your message.{" "}
              </p>
              <span class="w-full mb-6 h-1 bg-gray-200 rounded-full" />
              <div className="text-xs sm:text-base font-medium">
                <CompanyContact />
              </div>
            </div>
            <ContactForm width="w-full xl:w-2/3 mt-5 xl:mt-0" />
          </div>
    </div>
  );
}
