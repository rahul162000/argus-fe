import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Alert from "../../../../../../Components/Alert";

const AddModule = ({ button, setButton, course }) => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [selectedCourse, setSelectedCourse] = useState(null);

  let courseOptions = [];

  course.forEach((element) => {
    courseOptions.push({ value: element._id, label: element.name });
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.description) {
      errors.description = "*Required";
    }
    if (!values.courseId) {
      errors.courseId = "*Required";
    }

    return errors;
  };

  const { getFieldProps, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      description: "",
      courseId: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
      axiosInstance
        .post("/material/addModule", values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          resetForm();
          setSelectedCourse(null);
          setShowAlert({
            show: true,
            message: "Module added successfully",
            success: true,
          });
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Error adding module",
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
            <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2">
              <Select
                placeholder="Select Course"
                className="w-full bg-client"
                options={courseOptions}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "lightgray",
                    primary: "#BA0913",
                  },
                })}
                value={selectedCourse}
                onChange={(selectedOption) => {
                  setFieldValue("courseId", selectedOption.value);
                  setSelectedCourse(selectedOption);
                }}
              />
            </div>
            {errors.courseId ? (
              <div className="w-full text-xs text-red-400">
                {errors.courseId}
              </div>
            ) : null}
          </div>
          <div className="w-full lg:w-5/12 mt-4 lg:mt-0">
            <input
              type="text"
              placeholder="Module Name"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("name")}
            />
            {errors.name ? (
              <div className="w-full text-xs text-red-400">{errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="w-full lg:w-11/12">
          <textarea
            type="textarea"
            placeholder="Module description"
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
          ADD MODULE
        </button>
      </form>
    </div>
  );
};

export default AddModule;
