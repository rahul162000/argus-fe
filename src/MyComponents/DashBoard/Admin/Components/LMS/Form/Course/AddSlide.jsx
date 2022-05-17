import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Compressor from "compressorjs";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Alert from "../../../../../../Components/Alert";

const AddSlide = ({ button, setButton, course }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [slideType, setSlideType] = useState(null);
  const imageRef = useRef();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [module, setModule] = useState([]);
  const [chapter, setChapter] = useState([]);

  let courseOptions = [];
  let moduleOptions = [];
  let chapterOptions = [];

  useEffect(() => {
    if (selectedCourse?.value) {
      axiosInstance
        .get(`/material/getCourse/${selectedCourse?.value}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setModule(res?.data?.data?.Module);
        });
    }
  }, [selectedCourse?.value, token]);

  useEffect(() => {
    if (selectedCourse?.value && selectedModule?.value) {
      axiosInstance
        .get(
          `/material/getModule/${selectedCourse?.value}/${selectedModule?.value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setChapter(res?.data?.data?.Chapters);
        });
    }
  }, [selectedModule?.value, token, selectedCourse?.value]);

  course.forEach((element) => {
    courseOptions.push({ value: element._id, label: element.name });
  });

  module.forEach((element) => {
    moduleOptions.push({ value: element._id, label: element.name });
  });

  chapter.forEach((element) => {
    chapterOptions.push({ value: element._id, label: element.name });
  });

  const validate = (values) => {
    const errors = {};

    if (slideType?.value === "1") {
      if (!values.title) {
        errors.title = "*Required";
      }
      if (!values.text) {
        errors.text = "*Required";
      }
      if (!values.image) {
        errors.image = "*Required";
      }
    }
    if (slideType?.value === "2") {
      if (!values.question) {
        errors.question = "*Required";
      }
      if (!values.optionA) {
        errors.optionA = "*Required";
      }
      if (!values.optionB) {
        errors.optionB = "*Required";
      }
      if (!values.optionC) {
        errors.optionC = "*Required";
      }
      if (!values.optionD) {
        errors.optionD = "*Required";
      }
      if (!values.correctOpt) {
        errors.correctOpt = "*Required";
      }
    }
    return errors;
  };

  const {
    getFieldProps,
    handleSubmit,
    errors,
    setValues,
    values,
    setErrors,
    resetForm,
  } = useFormik({
    initialValues: {
      title: null,
      text: null,
      image: null,
      question: null,
      optionA: null,
      optionB: null,
      optionC: null,
      optionD: null,
      correctOpt: null,
      position: null,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      if (selectedCourse && selectedModule && selectedChapter) {
        if (slideType?.value === "1") {
          const formdata = new FormData();
          formdata.append("title", values.title);
          formdata.append("text", values.text);
          formdata.append("image", values.image);
          formdata.append("chapterId", selectedChapter?.value);
          if (!(values.position === null || values.position === "")) {
            formdata.append("position", values.position - 1);
          }
          axiosInstance
            .put("/material/addSlide", formdata, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              imageRef.current.value = null;
              resetForm();
              setShowAlert({
                show: true,
                message: "Slide added successfully",
                success: true,
              });
            })
            .catch((err) => {
              setShowAlert({
                show: true,
                message: "Error adding slide",
                success: false,
              });
            });
        } else if (slideType?.value === "2") {
          axiosInstance
            .put(
              "/material/addQuestion",
              {
                question: values.question,
                optionA: values.optionA,
                optionB: values.optionB,
                optionC: values.optionC,
                optionD: values.optionD,
                correctOpt: values.correctOpt,
                chapterId: selectedChapter?.value,
                position:
                  values.position === null || values.position === ""
                    ? null
                    : values.position - 1,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              resetForm();
              setShowAlert({
                show: true,
                message: "Question slide added successfully",
                success: true,
              });
            })
            .catch((err) => {
              setShowAlert({
                show: true,
                message: "Error adding question slide",
                success: false,
              });
            });
        }
      } else {
        setShowAlert({
          show: true,
          message: "Select all fields",
          success: false,
        });
      }
    },
  });

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.4,
      maxWidth: 1500,
      success: (compressedResult) => {
        setValues({ ...values, image: compressedResult });
      },
    });
  };

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
          <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 lg:w-5/12">
            <Select
              placeholder="Select course"
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
                setSelectedCourse(selectedOption);
              }}
            />
          </div>
          <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 lg:w-5/12 mt-4 lg:mt-0">
            <Select
              placeholder="Select module"
              className="w-full"
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
                setSelectedModule(selectedOption);
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
          <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 lg:w-5/12">
            <Select
              placeholder="Select chapter"
              className="w-full"
              options={chapterOptions}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#BA0913",
                },
              })}
              value={selectedChapter}
              onChange={(selectedOption) => {
                setSelectedChapter(selectedOption);
              }}
            />
          </div>
          <div className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 lg:w-5/12 mt-4 lg:mt-0">
            <Select
              placeholder="Select type"
              className="w-full"
              options={[
                { value: "1", label: "Normal Slide" },
                { value: "2", label: "Question" },
              ]}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#BA0913",
                },
              })}
              value={slideType}
              onChange={(selectedOption) => {
                setSlideType(selectedOption);
                setErrors({});
                resetForm();
              }}
            />
          </div>
        </div>

        {slideType?.value === "1" ? (
          <>
            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className="w-full lg:w-11/12">
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("title")}
                />
                {errors.title ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.title}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className=" w-full lg:w-5/12">
                <div className="flex ">
                  <input
                    type="file"
                    accept="image/png, image/jpeg,image/jpg"
                    placeholder="Slide image"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                    ref={imageRef}
                    onChange={(e) => {
                      handleCompressedUpload(e);
                    }}
                  />
                  {values.image !== null ? (
                    <button
                      onClick={() => {
                        imageRef.current.value = null;
                        setValues({ ...values, image: null });
                      }}
                    >
                      <FontAwesomeIcon
                        icon="window-close"
                        className="text-2xl ml-2"
                      />
                    </button>
                  ) : null}
                </div>
                {errors.image ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.image}
                  </div>
                ) : null}
              </div>
              <div className="w-full lg:w-5/12">
                <input
                  type="number"
                  placeholder="Position"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 lg:mt-0"
                  {...getFieldProps("position")}
                />
              </div>
            </div>
            <div className="w-full lg:w-11/12">
              <textarea
                type="textarea"
                placeholder="Slide text"
                className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 h-60"
                {...getFieldProps("text")}
              />
              {errors.text ? (
                <div className="w-full text-xs text-red-400">{errors.text}</div>
              ) : null}
            </div>
          </>
        ) : null}

        {slideType?.value === "2" ? (
          <>
            {" "}
            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className="w-full lg:mx-12">
                <input
                  type="text"
                  placeholder="Question"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("question")}
                />
                {errors.question ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.question}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className="w-full lg:w-5/12">
                <input
                  type="text"
                  placeholder="Option A"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("optionA")}
                />
                {errors.optionA ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.optionA}
                  </div>
                ) : null}
              </div>
              <div className="w-full lg:w-5/12 mt-4 lg:my-4">
                <input
                  type="text"
                  placeholder="Option B"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("optionB")}
                />
                {errors.optionB ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.optionB}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className="w-full lg:w-5/12">
                <input
                  type="text"
                  placeholder="Option C"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("optionC")}
                />
                {errors.optionC ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.optionC}
                  </div>
                ) : null}
              </div>
              <div className="w-full lg:w-5/12">
                <input
                  type="text"
                  placeholder="Option D"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 lg:mt-0"
                  {...getFieldProps("optionD")}
                />
                {errors.optionD ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.optionD}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-4 lg:my-4">
              <div className="w-full lg:w-5/12">
                <select
                  type="text"
                  placeholder="Correct Option"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  {...getFieldProps("correctOpt")}
                >
                  <option value="" disabled selected>
                    Select Correct Option
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
                {errors.correctOpt ? (
                  <div className="w-full text-xs text-red-400">
                    {errors.correctOpt}
                  </div>
                ) : null}
              </div>
              <div className="w-full lg:w-5/12">
                <input
                  type="number"
                  placeholder="Position"
                  className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2 mt-4 lg:mt-0"
                  {...getFieldProps("position")}
                />
              </div>
            </div>
          </>
        ) : null}

        <button
          type="submit"
          className="mt-4 mb-12 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD SLIDE
        </button>
      </form>
    </div>
  );
};

export default AddSlide;
