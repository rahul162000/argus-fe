import React, { useEffect, useState } from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import EmpOfMon from "./Components/WebsiteControlComponents/EmpOfMon";
import Testimonials from "./Components/WebsiteControlComponents/Testimonial";
import FooterControl from "./Components/WebsiteControlComponents/FooterControl";
import ClientControl from "./Components/WebsiteControlComponents/ClientControl";
import TeamControl from "./Components/WebsiteControlComponents/TeamControl";
import { TestimonialTable } from "./Components/WebsiteControlComponents/TestimonialTable";
import { EmpOfMonTable } from "./Components/WebsiteControlComponents/EmpOfMonTable";
import { ClientTable } from "./Components/WebsiteControlComponents/ClientTable";
import { TeamTable } from "./Components/WebsiteControlComponents/TeamTable";
import { useDispatch } from "react-redux";
import { getEOMAdmin } from "../../../context/actions/adminActions/eomAction";
import { getTestimonial } from "../../../context/actions/adminActions/testimonialAction";
import { getContact } from "../../../context/actions/adminActions/contactAction";
import { getClientCarousel } from "../../../context/actions/adminActions/clientsAction";
import { getTeam } from "../../../context/actions/adminActions/teamAction";
import RequirementsControl from "./Components/WebsiteControlComponents/RequirementsControl";
import { RequirementsList } from "./Components/WebsiteControlComponents/RequirementList";
import { getReq } from "../../../context/actions/adminActions/requirementActions";

export default function Home() {
  const [show, setShow] = useState(1);
  const [refresh, setrefresh] = useState();
  const [eomRefresh, seteomRefresh] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEOMAdmin());
    dispatch(getTeam());
  }, [dispatch]);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-16 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav active={8} />
      </div>
      <div className="w-9/12 sm:w-10/12 mx-auto">
        <ProfileBar />
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-1500">
          <button
            onClick={() => {
              setPage(1);
              setShow(1);
            }}
            className={`w-11/12 md:w-1/4 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
              page === 1
                ? "bg-white text-red-1 shadow-none"
                : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => {
              setPage(2);
              setShow(3);
            }}
            className={`w-11/12 md:w-1/4 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
              page === 2
                ? "bg-white text-red-1 shadow-none"
                : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
            }`}
          >
            OTHERS
          </button>
        </div>
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-72 mb-10 md:my-16 rounded-2xl">
          <nav
            className={`flex flex-col sm:flex-row justify-evenly my-2 text-lg ${
              page === 1 ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => setShow(1)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 1 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Testimonial
            </button>
            <button
              onClick={() => setShow(2)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 2 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Employee of the Month
            </button>
            <button
              onClick={() => setShow(4)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 4 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Clients
            </button>
          </nav>
          <nav
            className={`flex flex-col sm:flex-row justify-evenly my-2 text-lg ${
              page === 2 ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => setShow(3)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 3 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Company Contact
            </button>
            <button
              onClick={() => setShow(5)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 5 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => setShow(6)}
              className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-button-shadow-3 ${
                show === 6 ? "shadow-none" : "shadow-button-shadow-2"
              }`}
            >
              Requirements
            </button>
          </nav>
          <div className={show === 1 ? "block" : "hidden"}>
            <Testimonials setrefresh={setrefresh} />
            <TestimonialTable refresh={refresh} setrefresh={setrefresh} />
          </div>
          <div className={show === 2 ? "block" : "hidden"}>
            <EmpOfMon seteomRefresh={seteomRefresh} />
            <EmpOfMonTable
              eomRefresh={eomRefresh}
              seteomRefresh={seteomRefresh}
            />
          </div>
          <div className={show === 3 ? "block" : "hidden"}>
            <FooterControl />
          </div>
          <div className={show === 4 ? "block" : "hidden"}>
            <ClientControl />
            <ClientTable />
          </div>
          <div className={show === 5 ? "block" : "hidden"}>
            <TeamControl />
            <TeamTable />
          </div>
          <div className={show === 6 ? "block" : "hidden"}>
            <RequirementsControl />
            <RequirementsList />
          </div>
        </div>
      </div>
    </div>
  );
}
