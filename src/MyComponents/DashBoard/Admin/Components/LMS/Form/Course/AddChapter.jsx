import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Alert from "../../../../../../Components/Alert";

const AddChapter = ({ button, setButton, course }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [module, setModule] = useState([]);

  let courseOptions = [];
  let moduleOptions = [];
  useEffect(() => {
    axiosInstance
      .get(`/material/getCourse/${selectedCourse?.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModule(res?.data?.data?.Module);
      });
  }, [selectedCourse?.value, token]);

  course.forEach((element) => {
    courseOptions.push({ value: element._id, label: element.name });
  });

  module.forEach((element) => {
    moduleOptions.push({ value: element._id, label: element.name });
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
    if (!values.moduleId) {
      errors.moduleId = "*Required";
    }
    if (!values.duration) {
      errors.duration = "*Required";
    }

    return errors;
  };

  const {
    getFieldProps,
    setFieldValue,
    handleSubmit,
    errors,
    setValues,
    resetForm,
    values,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      courseId: "",
      moduleId: "",
      duration: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      axiosInstance
        .post("/material/addChapter", values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          resetForm();
          setSelectedCourse(null);
          setSelectedModule(null);
          setShowAlert({
            show: true,
            message: "Chapter added successfully",
            success: true,
          });
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Error adding chapter",
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
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <div className="w-full lg:w-5/12">
            <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2">
              <Select
                placeholder="Select Course"
                className="w-full"
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
          <div className="w-full lg:w-5/12  mt-4 lg:mt-0">
            <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2">
              <Select
                placeholder="Select Module"
                className=" w-full"
                options={moduleOptions}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "lightgray",
                    primary: "#BA0913",
                  },
                })}
                value={selectedModule}
                onChange={(selectedOption) => {
                  setFieldValue("moduleId", selectedOption.value);
                  setSelectedModule(selectedOption);
                }}
              />
            </div>
            {errors.moduleId ? (
              <div className="w-full text-xs text-red-400">
                {errors.moduleId}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around lg:my-4">
          <div className="w-full lg:w-5/12">
            <input
              type="text"
              placeholder="Chapter Name"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("name")}
            />
            {errors.name ? (
              <div className="w-full text-xs text-red-400">{errors.name}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-5/12">
            <input
              type="number"
              placeholder="Chapter Duration"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 lg:mt-0"
              {...getFieldProps("duration")}
            />
            {errors.duration ? (
              <div className="w-full text-xs text-red-400">
                {errors.duration}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full lg:w-11/12">
          <textarea
            type="textarea"
            placeholder="Chapter description"
            className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 h-60"
            {...getFieldProps("description")}
          />
          {errors.descriptions ? (
            <div className="w-full text-xs text-red-400">
              {errors.descriptions}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-4 mb-12 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD CHAPTER
        </button>
      </form>
    </div>
  );
};

export default AddChapter;
