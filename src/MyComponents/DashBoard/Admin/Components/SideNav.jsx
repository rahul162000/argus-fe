import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../../../argus website/SVG/Logowith shadow.svg";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CropRotateOutlinedIcon from "@mui/icons-material/CropRotateOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";

export default function SideNav(props) {
  const [active, setActive] = useState(props.active);

  return (
    <div className="bg-red-1 bg-overlay-copy bg-no-repeat bg-left bg-cover bg-blend-multiply min-h-screen">
      <div className="pt-8">
        <Link to="/">
          <img
            src={Logo}
            alt="Argus Logo"
            className="w-24 md:w-32 mx-auto mb-8 transform hover:scale-105 duration-200"
          />
        </Link>
        <nav className="w-full text-base font-medium">
          <Link
            to="/dashboard/admin/home"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 1
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <DashboardCustomizeOutlinedIcon />
            </span>
            <span className="hidden md:block">Dashboard</span>
          </Link>
          <Link
            to="/dashboard/student/calendar"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 2
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <BallotOutlinedIcon />
            </span>
            <span className="hidden md:block">Activity</span>
          </Link>
          <Link
            to="/dashboard/student/calendar"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 3
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <CropRotateOutlinedIcon />
            </span>
            <span className="hidden md:block">Shifts</span>
          </Link>
          <Link
            to="/dashboard/admin/employee/applications"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 4
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <AccountBoxOutlinedIcon />
            </span>
            <span className="hidden md:block">Employees</span>
          </Link>
          <Link
            to="/dashboard/student/calendar"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 5
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <LocationOnOutlinedIcon />
            </span>
            <span className="hidden md:block">Locations</span>
          </Link>
          <Link
            to="/dashboard/admin/lms/home"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 6
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <BorderColorOutlinedIcon />
            </span>
            <span className="hidden md:block">LMS</span>
          </Link>
          <Link
            to="/dashboard/student/purchase"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 7
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <PeopleOutlinedIcon />
            </span>
            <span className="hidden md:block">Clients</span>
          </Link>
          <Link
            to="/dashboard/admin/websitecontrols"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 8
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <LanguageOutlinedIcon />
            </span>
            <span className="hidden md:block">Website</span>
          </Link>
          <Link
            to="/dashboard/admin/reports"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 9
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <AssessmentOutlinedIcon />
            </span>
            <span className="hidden md:block">Reports</span>
          </Link>
          <Link
            to="/dashboard/student/contact"
            className={`flex items-center pl-2 py-3 pr-4  text-white hover:bg-white hover:text-red-1 rounded-lg border-b-2 border-opacity-50 shadow-button-inner-1 ${
              active === 10
                ? "bg-white text-red-1 shadow-none"
                : "bg-transparent text-white hover:text-red-1 hover:bg-white"
            }`}
          >
            <span className="inline-block mx-auto md:mx-3 xl:mx-6">
              <BackupOutlinedIcon />
            </span>
            <span className="hidden md:block">Backup</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
