import React, { useState } from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import { IconButton, Pagination, Table } from "@mui/material";
import { Download, DownloadDone } from "@mui/icons-material";
import { isEmpty } from "lodash";
import axiosInstance from "../../../helpers/axiosInstance";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";

export default function Reports() {
  const [classes, setClasses] = useState([]);
  const token = JSON.parse(localStorage.getItem("jwt"));
  const getAllClasses = () => {
    axiosInstance
      .get("/class/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClasses(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  // const sumbit = () => {};
  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-16 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav active={6} />
      </div>
      <div className="w-9/12 sm:w-10/12 mx-auto">
        <ProfileBar />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 sm:mx-3 2xl:mx-auto mt-72 md:mt-0 mb-10 md:my-16 pb-10 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            REPORTS
          </h1>
          <div className="relative">
            <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
              <h1 className="text-center w-full lg:w-9/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Name of data
              </h1>

              <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Download
              </h1>
            </div>

            <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
              <h1 className="flex flex-col justify-center text-center lg:w-9/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                Get all class data
              </h1>

              <div className="flex flex-col justify-center text-center items-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                {!isEmpty(classes) ? (
                  <CSVLink
                    filename="allClasses"
                    data={classes}
                    onClick={() => toast.success("File downloaded successfuly")}
                    className="w-44 h-10 bg-gray-300"
                  >
                    <DownloadDone />
                  </CSVLink>
                ) : (
                  <IconButton
                    onClick={() => getAllClasses()}
                    className="w-10 h-10 justify-center"
                  >
                    <Download />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
