import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get_Basket } from "../../../../../context/actions/lmsActions/basketActions";
import { get_Class } from "../../../../../context/actions/lmsActions/classActions";
import { getUsers } from "../../../../../context/actions/lmsActions/userAction";

const NavLms = (props) => {
  const [active, setActive] = useState(props.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Class());
    dispatch(get_Basket());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <nav className="flex flex-col md:flex-row max-w-1366 mx-3 2xl:mx-auto my-3 md:mb-14">
      <Link
        to="/dashboard/admin/lms/home"
        onClick={() => setActive(1)}
        className={`w-11/12 md:w-1/4  rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
          active === 1
            ? "bg-white text-red-1 shadow-none"
            : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
        }`}
      >
        CLASSES{" "}
      </Link>
      <Link
        to="/dashboard/admin/lms/license"
        onClick={() => setActive(2)}
        className={`w-11/12 md:w-1/4 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 md:mr-1 md:ml-2 border-2 border-red-1 ${
          active === 2
            ? "bg-white text-red-1 shadow-none"
            : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
        }`}
      >
        LICENSES
      </Link>
      <Link
        to="/dashboard/admin/lms/student"
        onClick={() => setActive(3)}
        className={`w-11/12 md:w-1/4 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 md:ml-1 md:mr-2 border-2 border-red-1 ${
          active === 3
            ? "bg-white text-red-1 shadow-none"
            : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
        }`}
      >
        STUDENTS
      </Link>
      <Link
        to="/dashboard/admin/lms/instructor"
        onClick={() => setActive(4)}
        className={`w-11/12 md:w-1/4 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
          active === 4
            ? "bg-white text-red-1 shadow-none"
            : "bg-red-1 text-white shadow-LMS hover:text-red-1 hover:bg-white"
        }`}
      >
        INSTRUCTORS{" "}
      </Link>
    </nav>
  );
};

export default NavLms;
