import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import CompanyContact from "../../../../Components/CompanyContact";
import Alert from "../../../../Components/Alert";
import { useDispatch } from "react-redux";
import {
  contactAlert,
  updateContact,
} from "../../../../../context/actions/adminActions/contactAction";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const validate = (values) => {
  const errors = {};
  if (!values.phoneNumber) {
    errors.phoneNumber = "*Required";
  } else if (values.phoneNumber.length < 4) {
    errors.phoneNumber = "Must be greater 4 numbers";
  } else if (values.phoneNumber.length > 14) {
    errors.phoneNumber = "Must be less than 14 numbers";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.address) {
    errors.address = "*Required";
  }
  if (!values.mapLocation) {
    errors.mapLocation = "*Required";
  }

  return errors;
};

const FooterControl = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const dispatch = useDispatch();
  const contactalert = useSelector((state) => state.contact.contactalert);
  const loading = useSelector((state) => state.contact.loading);

  useEffect(() => {
    if (contactalert.success !== null) {
      if (contactalert.success) {
        setShowAlert({
          show: true,
          message: contactalert.message,
          success: true,
        });
      } else {
        setShowAlert({
          show: true,
          message: contactalert.message,
          success: false,
        });
      }
      dispatch(contactAlert({ success: null, message: "" }));
    }
  }, [dispatch, contactalert]);

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      address: "",
      mapLocation: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(updateContact(values));
      resetForm();
    },
  });

  return (
    <div className="flex flex-col md:flex-row py-4 px-2 sm:px-4 md:px-8 text-lg text-gray-3">
      <form
        className="flex flex-col items-center py-4 pl-2 pr-6 w-full md:w-6/12 "
        onSubmit={handleSubmit}
      >
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
        <input
          className={`w-full ${
            errors.phoneNumber
              ? "border-b-2 border-red-600"
              : "border-b border-client"
          } focus:outline-none mt-4 p-1`}
          type="text"
          placeholder="Phone Number"
          {...getFieldProps("phoneNumber")}
        />
        {errors.phoneNumber ? (
          <div className="w-full text-xs text-red-400">
            {errors.phoneNumber}
          </div>
        ) : null}
        <input
          className={`w-full ${
            errors.email
              ? "border-b-2 border-red-600"
              : "border-b border-client"
          } focus:outline-none mt-4 p-1`}
          type="text"
          placeholder="Email"
          {...getFieldProps("email")}
        />
        {errors.email ? (
          <div className="w-full text-xs text-red-400">{errors.email}</div>
        ) : null}
        <input
          className={`w-full ${
            errors.address
              ? "border-b-2 border-red-600"
              : "border-b border-client"
          } focus:outline-none mt-4 p-1`}
          type="text"
          placeholder="Address"
          {...getFieldProps("address")}
        />
        {errors.address ? (
          <div className="w-full text-xs text-red-400">{errors.address}</div>
        ) : null}
        <input
          className={`w-full ${
            errors.mapLocation
              ? "border-b-2 border-red-600"
              : "border-b border-client"
          } focus:outline-none mt-4 p-1`}
          type="text"
          placeholder="Google maps url"
          {...getFieldProps("mapLocation")}
        />
        {errors.mapLocation ? (
          <div className="w-full text-xs text-red-400">
            {errors.mapLocation}
          </div>
        ) : null}
        <button
          className="mb-2 mt-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          type="submit"
        >
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <Loader
                type="TailSpin"
                color="lightgray"
                height={30}
                width={30}
              />
            </div>
          ) : (
            "UPDATE"
          )}
        </button>
      </form>
      <div className="w-full md:w-6/12 px-6 border-2 border-red-1 mx-auto rounded-xl">
        <CompanyContact />
      </div>
    </div>
  );
};

export default FooterControl;
