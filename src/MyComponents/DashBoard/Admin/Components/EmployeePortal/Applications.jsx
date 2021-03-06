import React, { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../../../../helpers/axiosInstance";
import SelectColumnFilter from "../../../../../helpers/TableFilter";
import ProfileBar from "../ProfileBar";
import SideNav from "../SideNav";
import Table from "../../../../Components/reactTable";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import { Download, DownloadDone } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Applications = () => {
  const [show, setShow] = useState(false);
  const [applications, setApplications] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    axiosInstance
      .get(`/application/get-all?page=1&limit=100000`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res?.data?.data?.applications;
        data.forEach((element) => {
          for (const key in element) {
            if (element[key] === true) {
              element[key] = "Yes";
            } else if (element[key] === false) {
              element[key] = "No";
            }
          }
        });
        setApplications(data);
      });
  }, []);

  const headCells = [
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "email",
      Header: "Email",
    },
    {
      accessor: "licenceNo",
      Header: "License No.",
    },
    {
      accessor: "yearsOfExp",
      Header: "Years of Experience",
    },
    {
      id: "Eligibility Type",
      accessor: "eligibilityType",
      Header: "Eligibility Type",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Highest Level of Edu.",
      accessor: "highestLevelOfEducation",
      Header: "Highest Level of Edu.",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Registration",
      accessor: "createdAt",
      Header: "Applied On",
    },
    {
      id: "Can Drive",
      accessor: "canDrive",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Valid Guard License",
      accessor: "validSecurityGuardLicence",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Eligible to work in Canada",
      accessor: "elegibleToWorkInCanada",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Education in Canada",
      accessor: "educationInCanada",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Prior Experience",
      accessor: "priorExperience",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
  ];
  const columns = useMemo(() => headCells, []);

  const [classes, setClasses] = useState([]);
  const token = JSON.parse(localStorage.getItem("jwt"));
  const getAllClasses = () => {
    axiosInstance
      .get("/application/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClasses(res?.data?.data?.applications);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-16 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav active={4} />
      </div>
      <div className="w-9/12 sm:w-10/12 mx-auto">
        <ProfileBar />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 sm:mx-3 2xl:mx-auto my-8 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            APPLICATIONS
          </h1>

          <div className="py-4 px-6">
            <div className="relative ">
              <div className="flex justify-end items-center">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className=" w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
                >
                  Filter
                </button>

                <div>
                  {!isEmpty(classes) ? (
                    <CSVLink
                      filename="allApplications"
                      data={classes}
                      onClick={() =>
                        toast.success("File downloaded successfuly")
                      }
                      className="w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
                    >
                      Download
                    </CSVLink>
                  ) : (
                    <button
                      onClick={() => {
                        getAllClasses();
                      }}
                      className="w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
                    >
                      Export
                    </button>
                  )}
                </div>
              </div>

              <Table
                data={applications}
                columns={columns}
                show={show}
                setShow={setShow}
                justList={true}
                setSelected={setSelected}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
