import React, { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../../../../helpers/axiosInstance";
import SelectColumnFilter from "../../../../../helpers/TableFilter";
import ProfileBar from "../ProfileBar";
import SideNav from "../SideNav";
import Table from "../../../../Components/reactTable";

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

  console.log(applications);

  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav active={4} />
      </div>
      <div className="w-full">
        <ProfileBar />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 sm:mx-3 2xl:mx-auto mt-72 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            APPLICATIONS
          </h1>

          <div className="py-4 px-6">
            <div className="relative ">
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
              >
                Filter
              </button>
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
