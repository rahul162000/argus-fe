import React, { useState } from "react";
import { useFormik } from "formik";
import Alert from "../../Components/Alert";
import axiosInstance from "../../../helpers/axiosInstance";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import {
  isAuthenticated,
  setUser,
} from "../../../context/actions/authActions/getUserAction";
import {
  setToken,
  setUserID,
} from "../../../context/actions/authActions/setStorageAction";
import Logo from "./../../../argus website/SVG/Logowith shadow.svg";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Required";
  }
  if (!values.lastname) {
    errors.lastname = "*Required";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "*Required";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be atleast 6 characters";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignUp = ({ setOpen }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: "",
      email: "",
      name: "",
      lastname: "",
      dateOfBirth: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      axiosInstance
        .post(`/signup`, values)
        .then(() => {
          axiosInstance.post("/signin", values).then((response) => {
            setLoading(false);
            dispatch(setUser(response?.data?.user));
            dispatch(setUserID(response?.data?.user?._id));
            dispatch(setToken(response?.data?.token));
            dispatch(isAuthenticated("true"));
            history.push("/dashboard/student/home");
            resetForm();
            console.log(values);
          });
        })
        .catch((err) => {
          setLoading(false);
          setShowAlert({
            show: true,
            message: err?.response?.data?.error,
            success: false,
          });
          console.log(values);
          resetForm();
        });
    },
  });

  return (
    <div className="p-5 h-screen w-full flex flex-col md:flex-row items-center justify-center bg-cover bg-hero">
      <div className="w-full sm:w-9/12 bg-white rounded-3xl flex flex-col lg:flex-row p-6">
        <form className=" lg:p-4 w-full lg:w-1/2 lg:border-r-2 border-gray-200">
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}
          <img
            src={Logo}
            alt=""
            className="block lg:hidden h-40 w-40 transform hover:scale-105 duration-200 mx-auto"
          />
          <div>
            <div className="flex justify-between">
              <div className="w-5/12 flex flex-col">
                <input
                  className={`mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                  type="text"
                  placeholder="First Name"
                  {...getFieldProps("name")}
                />
                {errors.name ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className="w-5/12 flex flex-col">
                <input
                  className={` mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                  type="text"
                  placeholder="Last Name"
                  {...getFieldProps("lastname")}
                />
                {errors.lastname ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.lastname}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex mt-3 items-center justify-between">
              <label className="text-sm text-gray-2 w-1/2">Date Of Birth</label>
              <div className="w-full">
                <input
                  className={` w-full mt-1 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                  type="date"
                  placeholder="D.O.B."
                  {...getFieldProps("dateOfBirth")}
                />
                {errors.dateOfBirth ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.dateOfBirth}
                  </div>
                ) : null}
              </div>
            </div>
            <input
              className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
              type="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-400">{errors.email}</div>
            ) : null}
            <input
              className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
              type="password"
              placeholder="Password"
              {...getFieldProps("password")}
            />
            {errors.password ? (
              <div className="w-full text-xs text-red-400">
                {errors.password}
              </div>
            ) : null}
          </div>
        </form>
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <img
            src={Logo}
            alt=""
            className="hidden lg:block h-40 w-40 transform hover:scale-105 duration-200"
          />
          <button
            className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg my-3 mb-2"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <Loader
                  type="TailSpin"
                  color="white"
                  height={28}
                  width={28}
                  radius={0}
                />
              </div>
            ) : (
              <>Join</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
