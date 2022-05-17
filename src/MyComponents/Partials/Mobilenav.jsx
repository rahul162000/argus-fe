import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LogIn from "../DashBoard/Student/Login";
import Login from "../DashBoard/Student/Login";

const Mobilenav = ({ openNav, setOpenNav }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div
        className={`z-40 absolute ${
          openNav
            ? "transition-all opacity-100 duration-500 transform scale-x-100 origin-right"
            : "transition-all opacity-0 duration-500 transform scale-x-0 origin-right"
        }`}
      >
        <div className="min-h-screen h-full w-screen flex flex-row font-for-para">
          <div className="sm:w-1/2 md:w-7/12 h-auto bg-red-1 bg-opacity-50"></div>
          <div className="w-full sm:w-1/2 md:w-5/12 bg-gray-3 h-screen overflow-scroll">
            <nav className="list-none text-lg mt-16">
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/about" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    ABOUT
                  </div>
                </Link>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/services" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    SERVICES
                  </div>
                </Link>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/jobs" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    JOBS
                  </div>
                </Link>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/courses" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    COURSES
                  </div>
                </Link>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/contact" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    CONTACT
                  </div>
                </Link>
              </li>
              <li className="hover:border-white text-white">
                <Link to="/technology" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    TECHNOLOGY
                  </div>
                </Link>
              </li>
            </nav>

            <nav className="list-none text-lg mt-8 bg-gray-3 mb-12">
              <li className="border-b border-mobile-nav-border text-white text-3xl">
                <div
                  onClick={() => setOpenNav(false)}
                  className="border-l-8 py-2.5 pl-3 border-opacity-0 font-bold"
                >
                  Portals
                </div>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <div
                  open={open}
                  onClick={() => {
                    if (user?.role === 1) {
                      history.push("/dashboard/student/home");
                    } else {
                      setOpen(true);
                    }
                  }}
                >
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    STUDENT PORTAL
                  </div>
                </div>
              </li>
              <li className="border-b border-mobile-nav-border hover:border-white text-white">
                <Link to="/about" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    CLIENT PORTAL
                  </div>
                </Link>
              </li>
              <li className="text-white">
                <Link to="/about" onClick={() => setOpenNav(false)}>
                  <div className="border-l-8 py-2.5 pl-10 border-opacity-0 hover:border-opacity-100 hover:bg-black font-bold">
                    EMPLOYEE PORTAL
                  </div>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <Login open={open} setOpen={setOpen} />
    </>
  );
};
export default Mobilenav;
