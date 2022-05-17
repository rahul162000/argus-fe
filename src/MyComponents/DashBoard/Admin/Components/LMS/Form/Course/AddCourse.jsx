import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Alert from "../../../../../../Components/Alert";

const AddCourse = ({ button, setButton, setCourseRefresh }) => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.description) {
      errors.description = "*Required";
    }

    if (!values.price) {
      errors.price = "*Required";
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        price: "",
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        const token = JSON.parse(localStorage.getItem("jwt"));
        axiosInstance
          .post("/material/addCourse", values, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setCourseRefresh(res);
            resetForm();
            setShowAlert({
              show: true,
              message: "Course added successfully",
              success: true,
            });
          })
          .catch((err) => {
            setShowAlert({
              show: true,
              message: "Error adding course",
              success: false,
            });
          });
      },
    });

  return (
    <div className={`${button ? "block" : "hidden"}`}>
      <div className="px-11">
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center text-lg font-bold"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
          <div className="w-full lg:w-5/12">
            <input
              type="text"
              placeholder="Enter Course Name"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("name")}
            />
            {errors.name ? (
              <div className="w-full text-xs text-red-400">{errors.name}</div>
            ) : null}
          </div>

          <div className="w-full lg:w-5/12 mt-4 lg:mt-0">
            <input
              type="Number"
              placeholder="Course price"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("price")}
            />
            {errors.price ? (
              <div className="w-full text-xs text-red-400">{errors.price}</div>
            ) : null}
          </div>
        </div>
        <div className="w-full lg:w-11/12">
          <textarea
            type="textarea"
            placeholder="Course description"
            className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 h-60"
            {...getFieldProps("description")}
          />
          {errors.description ? (
            <div className="w-full text-xs text-red-400">
              {errors.description}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="mt-4 mb-12 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
