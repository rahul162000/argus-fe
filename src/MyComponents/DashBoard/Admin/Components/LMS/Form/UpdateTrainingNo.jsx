import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import Select from "react-select";
import axiosInstance from "../../../../../../helpers/axiosInstance";

const UpdateTrainingNo = () => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const [pageData, setpageData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const student = useSelector((state) => state.users.students);
  const students = student.filter((data) => data.trainingNo === "");

  useEffect(() => {
    setpageData(students?.slice((page - 1) * 5, page * 5));
  }, [page, student]);

  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold"></form>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {" "}
          <Pagination
            className="p-1 mb-4"
            count={Math.ceil(students?.length / 15)}
            shape="rounded"
            onChange={(event, value) => {
              setPage(value);
            }}
          />
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Student ID
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Student Name
            </h1>
            <h1 className="text-center lg:w-4/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Training Number
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Update
            </h1>
          </div>
          {pageData?.map((s) => {
            return <TrainingNumberList data={s} />;
          })}
        </>
      )}
    </div>
  );
};
export default UpdateTrainingNo;

// Table to Update Training Number

const TrainingNumberList = ({ data }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const [trainingNo, setTrainingNo] = useState("");

  const updateTrainingNo = (trainingNo) => {
    console.log(trainingNo);
    console.log();
    axiosInstance
      .put(
        `/user/updateAdmin/${data?._id}`,
        { trainingNo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
      <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <h1 className="font-bold">{data?.docId}</h1>
      </div>
      <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <h1 className="">{data?.name}</h1>
      </div>
      <div className="flex flex-col justify-center text-center lg:w-4/12 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <input
          className="text-left px-3 py-3 rounded-xl outline-none ring-0"
          placeholder="Type Here"
          value={trainingNo}
          onChange={(e) => setTrainingNo(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
        <button
          onClick={() => updateTrainingNo(trainingNo)}
          className="w-full  my-auto rounded-xl py-4 font-bold text-white bg-red-1 border-2 border-red-1 hover:bg-white hover:text-red-1"
        >
          Update
        </button>
      </div>
    </div>
  );
};
