import React, { useState } from "react";
import logo from "./../../../argus website/SVG/Logowith shadow.svg";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { useFormik } from "formik";
import Alert from "../../Components/Alert";
import axiosInstance from "../../../helpers/axiosInstance";
import Loader from "react-loader-spinner";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookLoginButton } from "react-social-login-buttons";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import {
  isAuthenticated,
  lastLoggedIn,
  setUser,
} from "../../../context/actions/authActions/getUserAction";
import {
  setToken,
  setUserID,
} from "../../../context/actions/authActions/setStorageAction";
import { Modal } from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "*Required";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LogIn = ({ open, setOpen }) => {
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
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await axiosInstance
        .post(`/signin`, values)
        .then((response) => {
          setLoading(false);
          dispatch(setUser(response?.data?.user));
          dispatch(setUserID(response?.data?.user?._id));
          dispatch(setToken(response?.data?.token));
          dispatch(isAuthenticated("true"));
          dispatch(lastLoggedIn());
          history.push("/dashboard/student/home");
          resetForm();
        })
        .catch((err) => {
          setLoading(false);
          setShowAlert({
            show: true,
            message: err.response.data.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black bg-opacity-80">
        <div className="w-full p-4 md:p-16 lg:p-40 bg-transparent lg:bg-white rounded-3xl flex flex-col-reverse md:flex-row items-center justify-center bg-no-repeat bg-cover lg:bg-hero">
          <div className="content text-3xl text-center md:text-left lg:w-2/3"></div>
          <div className="w-1/3 mx-auto flex flex-col items-center">
            <button
              onClick={() => {
                setOpen(false);
                setLoading(false);
              }}
            >
              {" "}
              {/*Close Button*/}
              <FontAwesomeIcon
                icon="window-close"
                className="text-3xl text-white bg-black fixed top-4 right-4"
              />
            </button>
            <form
              className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
              onSubmit={handleSubmit}
            >
              {showAlert.show ? (
                <Alert alert={showAlert} rmAlert={setShowAlert} />
              ) : null}
              <img src={logo} alt="Logo" className="w-20 mb-3" />

              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
              {errors.email ? (
                <div className="w-full text-xs text-red-400">
                  {errors.email}
                </div>
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

              <button
                className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg my-3 mb-2"
                type="submit"
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
                  <>Login</>
                )}
              </button>
              <span
                onClick={() => {
                  history.push("/forgot-pass");
                  setOpen(false);
                }}
                className="text-red-1 cursor-pointer font-bold hover:text-red-500"
              >
                Forgot Password
              </span>
              <p className="text-gray-900 font-bold text-center my-2">
                Not yet Registered ?
                <span
                  onClick={() => {
                    history.push("/dashboard/student/signup");
                    setOpen(false);
                  }}
                  className="text-blue-500 cursor-pointer"
                >
                  {" "}
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogIn;
