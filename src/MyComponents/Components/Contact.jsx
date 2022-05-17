import { useFormik } from "formik";
import React, { useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";
import Alert from "./Alert";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "*Required";
  } else if (values.phoneNumber.length < 4) {
    errors.phoneNumber = "Must be greater 4 numbers";
  } else if (values.phoneNumber.length > 14) {
    errors.phoneNumber = "Must be less than 14 numbers";
  }
  if (!values.message) {
    errors.message = "*Required";
  }

  return errors;
};

function ContactForm({ width = "w-full" }) {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      phoneNumber: "",
      name: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axiosInstance
        .post(`/contact-user/save`, values, {
          headers: {
            Accept: "application/JSON",
            "Content-Type": "application/JSON",
          },
        })
        .then((response) => {
          setShowAlert({
            show: true,
            message: "Message sent successfully",
            success: true,
          });
          resetForm();
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Problem sending message",
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <form className={`bg-gray-200 p-6 ${width}`} onSubmit={handleSubmit}>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}
      <input
        className="w-full  py-5 px-4 focus:outline-none focus:ring-1 ring-gray-2 rounded-lg"
        type="name"
        placeholder="Your Name"
        {...getFieldProps("name")}
      />
      {errors.name ? (
        <div className="w-full text-xs text-red-400">{errors.name}</div>
      ) : null}
      <input
        className="w-full mt-3 py-5 px-4 focus:outline-none focus:ring-1 ring-gray-2 rounded-lg"
        type="telephone"
        placeholder="Phone Number"
        {...getFieldProps("phoneNumber")}
      />
      {errors.phoneNumber ? (
        <div className="w-full text-xs text-red-400">{errors.phoneNumber}</div>
      ) : null}
      <textarea
        className="w-full h-56 mt-3 py-5 px-4 focus:outline-none focus:ring-1 ring-gray-2 rounded-lg"
        type="text"
        placeholder="Write Message"
        {...getFieldProps("message")}
      />
      {errors.message ? (
        <div className="w-full text-xs text-red-400">{errors.message}</div>
      ) : null}
      <button
        type="submit"
        className="w-full text-xl lg:text-base xl:text-xl p-4 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg mt-2 hover:shadow-button-inner-1"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
