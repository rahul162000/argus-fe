import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../../../../helpers/axiosInstance";

const AttendanceList = ({ data, className }) => {
  const [studentAttendence, setStudentAttendence] = useState(data?.attendence);
  const token = JSON.parse(localStorage.getItem("jwt"));
  const students = useSelector((state) => state.users.students);
  let student = students.filter((f) => f._id === data?.studentId)[0];
  const [note, setNote] = useState(data?.note);

  console.log(className);
  useEffect(() => {
    setNote(data?.note);
  }, [data?.note]);

  const markAttendence = (e, attendence) => {
    e.preventDefault();
    axiosInstance
      .put(
        `/class/attendence/${data._id}/${student?._id}`,
        { attendence, note, className },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setStudentAttendence(attendence);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
      <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <h1 className="font-bold">{student?._id}</h1>
      </div>
      <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <h1 className="">{student?.name}</h1>
      </div>
      <div className="flex flex-col justify-center text-center lg:w-4/12 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <input
          className="text-left px-3 py-3 rounded-xl outline-none ring-0"
          placeholder="Type Here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
        {studentAttendence === false ? (
          <h1 className="w-5/12  my-auto rounded-xl py-4 text-red-1 :bg-white border-2 border-red-1">
            A
          </h1>
        ) : (
          <h1
            onClick={(e) => markAttendence(e, false)}
            className=" cursor-pointer w-5/12 bg-red-1 my-auto rounded-xl py-4 text-white hover:text-red-1 hover:bg-white border-2 border-red-1"
          >
            A
          </h1>
        )}
        {studentAttendence === true ? (
          <h1 className="w-5/12  my-auto rounded-xl py-4 text-green-1 bg-white border-2 border-green-1">
            P
          </h1>
        ) : (
          <h1
            onClick={(e) => markAttendence(e, true)}
            className="cursor-pointer w-5/12 bg-green-1 my-auto rounded-xl py-4 text-white hover:text-green-1 hover:bg-white border-2 border-green-1"
          >
            P
          </h1>
        )}
      </div>
    </div>
  );
};

export default AttendanceList;
