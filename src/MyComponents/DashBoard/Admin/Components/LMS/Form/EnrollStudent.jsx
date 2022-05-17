import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import SelectColumnFilter from "../../../../../../helpers/TableFilter";
import Table from "../../../../../Components/reactTable";
import Select from "react-select";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import Alert from "../../../../../Components/Alert";
import { useDispatch } from "react-redux";
import { get_Class } from "../../../../../../context/actions/lmsActions/classActions";
import { getUsers } from "../../../../../../context/actions/lmsActions/userAction";
import { userActivity } from "../../../../../../context/actions/authActions/getUserAction";

const EnrollStudent = () => {
  const students = useSelector((state) => state.users.students);
  const classList = useSelector((state) => state.class.class);
  const [selectedClass, setSelectedClass] = useState(null);
  const [studentsToShow, setStudentsToShow] = useState([]);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const dispatch = useDispatch();

  let options = [];
  classList.forEach((element) => {
    options.push({
      value: element._id,
      label: element.classname + "(" + element._id + ")",
    });
  });

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setStudentsToShow(
      students.filter(
        (f) =>
          !f?.classAttended?.includes(
            classList.filter((f) => f._id === selectedClass?.value)[0]
              ?.classname
          )
      )
    );
  }, [selectedClass, classList, students]);

  studentsToShow.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = "";
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
      accessor: "name",
      Header: "Student Name",
    },
    {
      accessor: "phone",
      Header: "Phone No.",
    },
    {
      id: "Registration",
      accessor: "createdAt",
      Header: "Registration",
    },
    {
      id: "City",
      accessor: "city",
      Header: "City",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Country",
      accessor: "country",
      Header: "Country",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Province",
      accessor: "province",
      Header: "Province",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Gender",
      accessor: "gender",
      Header: "Gender",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
  ];
  const columns = useMemo(() => headCells, []);

  const token = JSON.parse(localStorage.getItem("jwt"));
  const enroll = (e) => {
    e.preventDefault();
    const currentClass = classList.filter(
      (f) => f._id === selectedClass?.value
    )[0];
    if (
      selected.length <=
      currentClass?.noOfSpots - currentClass?.students?.length
    ) {
      axiosInstance
        .put(
          `/class/enroll/${selectedClass.value}`,
          {
            students: selected,
            classname: classList.filter(
              (f) => f._id === selectedClass?.value
            )[0].classname,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setSelectedClass(null);
          dispatch(get_Class());
          dispatch(getUsers());
          setShowAlert({
            show: true,
            message: "Students enrolled successfully",
            success: true,
          });

          selected.forEach((element) => {
            dispatch(
              userActivity(
                `Enrolled in ${currentClass?.classname} class`,
                "Admin",
                element.studentId
              )
            );
          });
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Students enrolled failed",
            success: false,
          });
        });
    } else {
      setShowAlert({
        show: true,
        message: `Only ${
          currentClass?.noOfSpots - currentClass?.students?.length
        } spots available`,
        success: false,
      });
    }
  };

  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <div className="bg-client w-full lg:w-5/12 p-5 rounded-xl">
            <Select
              placeholder="Select Class"
              className=" w-full"
              options={options}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#BA0913",
                },
              })}
              value={selectedClass}
              onChange={(selectedOption) => {
                setSelectedClass(selectedOption);
              }}
            />
          </div>
        </div>
      </form>
      {selectedClass ? (
        <div className="relative">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
          >
            Filter
          </button>
          <Table
            data={studentsToShow}
            columns={columns}
            show={show}
            setShow={setShow}
            justList={false}
            setSelected={setSelected}
          />
          <div className="flex">
            <button
              onClick={(e) => {
                if (selectedClass) {
                  enroll(e);
                } else {
                  setShowAlert({
                    show: true,
                    message: "Select a class",
                    success: false,
                  });
                }
              }}
              className="mx-auto my-6 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
            >
              ENROLL
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EnrollStudent;
