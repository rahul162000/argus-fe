import React, { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import SelectColumnFilter from "../../../../../../helpers/TableFilter";
import DocsTable from "../../../../../Components/docsTable";
import ShowDoc from "./ShowDoc";
import Loader from "react-loader-spinner";

const DocumentApproval = () => {
  const [docsList, setDocsList] = useState([]);
  const [showDoc, setShowDoc] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(null);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    setLoading(true);
    axiosInstance
      .get(`/docs2/getAllDocs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDocsList(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [refresh]);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  docsList.forEach((element) => {
    for (const key in element) {
      if (key === "isApproved") {
        if (element[key] === null) {
          element[key] = "No action taken";
        }
      }
      if (element[key] === null) {
        element[key] = "";
      }
      if (element[key] === true) {
        element[key] = "True";
      }
      if (element[key] === false) {
        element[key] = "False";
      }
    }
  });

  const headCells = [
    {
      id: "Student ID",
      accessor: "docId",
      Header: "Student ID",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Student Name",
      accessor: "username",
      Header: "Student Name",
    },
    {
      accessor: "name",
      Header: "Document Name",
    },
    {
      id: "CreatedAt",
      accessor: "createdAt",
      Header: "Registration",
    },
    {
      id: "IsApproved",
      accessor: "isApproved",
      Header: "IsApproved",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Name",
      accessor: "name",
      Header: "Name",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div className="relative mt-4">
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {docsList.length === 0 ? (
            <p className="text-xl font-bold text-gray-400 w-full text-center">
              No Documents to Show
            </p>
          ) : (
            <>
              <ShowDoc
                show={showDoc}
                setShow={setShowDoc}
                data={selectedDoc}
                refreshDoc={setRefresh}
              />
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
              >
                Filter
              </button>
              <DocsTable
                data={docsList}
                columns={columns}
                show={show}
                setShow={setShow}
                justList={true}
                setSelected={setSelected}
                func={(data) => {
                  setShowDoc(true);
                  setSelectedDoc(data);
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DocumentApproval;
