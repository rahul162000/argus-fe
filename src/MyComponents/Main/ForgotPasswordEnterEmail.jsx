import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import axiosInstance from "../../helpers/axiosInstance";
import Alert from "../../MyComponents/Components/Alert";

function ForgetPasswordEnterEmail() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState();
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const changePass = (e) => {
    e.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email?.trim())) {
      setShowAlert({
        show: true,
        message: "Invalid email",
        success: false,
      });
    } else {
      setLoading(true);
      axiosInstance
        .post(`/forgot-password`, {
          email: email?.trim(),
          url: process.env.REACT_APP_BASE_URL,
        })
        .then((res) => {
          setLoading(false);
          setShowAlert({
            show: true,
            message: "Email sent successfully",
            success: true,
          });
          setSent(true);
        })
        .catch((err) => {
          setLoading(false);
          setShowAlert({
            show: true,
            message: err?.response?.data?.error,
            success: false,
          });
        });
    }
  };

  return (
    <div className="w-full h-full flex flew-col md:flex-row bg-client">
      <div className="w-full mt-20 mb-6">
        <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            FORGET PASSWORD
          </h1>
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}
          {sent ? (
            <>
              <p className="w-full flex justify-center p-4 text-2xl font-semibold text-gray-400">
                Email with password reset link has been sent to your email
                address <span className="text-red-1 ml-1">{email}</span>
              </p>
            </>
          ) : (
            <form className="w-full md:w-1/2 mx-auto">
              <input
                className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={(e) => {
                  changePass(e);
                }}
                className="w-full mx-auto flex justify-center font-bold text-white bg-red-1 py-4 px-6 md:px-10 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl my-3 hover:shadow-button-inner-1"
              >
                {loading ? <CircularProgress color="inherit" /> : "SEND LINK"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordEnterEmail;
