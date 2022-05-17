import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import Alert from "../../../../Components/Alert";
import Compressor from "compressorjs";
import { useDispatch, useSelector } from "react-redux";
import {
  createEOM,
  eommessage,
  setupdateeom,
  updateEOM,
} from "../../../../../context/actions/adminActions/eomAction";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmpOfMon = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const dispatch = useDispatch();
  const eomalert = useSelector((state) => state.eom.eomalert);
  const update = useSelector((state) => state.eom.update);
  const loading = useSelector((state) => state.eom.addloading);
  const empImgRef = useRef();
  const insImgRef = useRef();
  const insSignRef = useRef();

  useEffect(() => {
    if (eomalert.success !== null) {
      if (eomalert.success === true) {
        setShowAlert({
          show: true,
          message: eomalert.message,
          success: true,
        });
        dispatch(eommessage({ success: null, message: "" }));
      } else if (eomalert.success === false) {
        setShowAlert({
          show: true,
          message: eomalert.message,
          success: false,
        });
        dispatch(eommessage({ success: null, message: "" }));
      }
    }
  }, [dispatch, eomalert]);

  const handleCompressedUpload = (e, field) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.3,
      maxWidth: 1500,
      success: (compressedResult) => {
        setValues({ ...values, [field]: compressedResult });
      },
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "*Required";
    }
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.seniorName) {
      errors.seniorName = "*Required";
    }
    if (!update.state) {
      if (!values.empImg) {
        errors.empImg = "*Required";
      }
      if (!values.instructorImg) {
        errors.instructorImg = "*Required";
      }
      if (!values.instructorSign) {
        errors.instructorSign = "*Required";
      }
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        title: "",
        name: "",
        empdescription: "",
        description: "",
        quality1: "",
        quality2: "",
        quality3: "",
        seniorName: "",
        empImg: null,
        instructorImg: null,
        instructorSign: null,
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        empImgRef.current.value = "";
        insImgRef.current.value = "";
        insSignRef.current.value = "";
        resetForm();
        const formdata = new FormData();
        formdata.append("empName", values.name);
        formdata.append("empDesc", values.empdescription);
        formdata.append("description", values.description);
        let arr = [];
        arr.push(values.quality1);
        arr.push(values.quality2);
        arr.push(values.quality3);
        formdata.append("skills", arr);
        formdata.append("instructorName", values.seniorName);
        formdata.append("instructorRole", "Area Manager");
        formdata.append("empImage", values.empImg);
        formdata.append("instructorImage", values.instructorImg);
        formdata.append("instructorSign", values.instructorSign);
        formdata.append("title", values.title);

        if (update.state) {
          dispatch(updateEOM(formdata, update.data._id));
        } else {
          dispatch(createEOM(formdata));
        }
      },
    });

  useEffect(() => {
    if (update.state) {
      setValues({
        title: update?.data?.title,
        name: update?.data?.empName,
        empdescription: update?.data?.empDesc,
        description: update?.data?.description,
        quality1: update?.data?.skills[0].split(",")[0],
        quality2: update?.data?.skills[0].split(",")[1],
        quality3: update?.data?.skills[0].split(",")[2],
        seniorName: update?.data?.instructorName,
      });
    }
  }, [setValues, update]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center py-4 px-2 sm:px-4 md:px-8 text-lg text-gray-3"
    >
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}
      <input
        className={`w-full ${
          errors.title ? "border-b-2 border-red-600" : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Title of section"
        {...getFieldProps("title")}
      />
      {errors.title ? (
        <div className="w-full text-xs text-red-400">{errors.title}</div>
      ) : null}

      <input
        className={`w-full ${
          errors.name ? "border-b-2 border-red-600" : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Name of Employee"
        {...getFieldProps("name")}
      />
      {errors.name ? (
        <div className="w-full text-xs text-red-400">{errors.name}</div>
      ) : null}
      <textarea
        className={`w-full ${
          errors.empdescription
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        rows="3"
        placeholder="Write Paragraph about the Employee"
        {...getFieldProps("empdescription")}
      />
      {errors.empdescription ? (
        <div className="w-full text-xs text-red-400">
          {errors.empdescription}
        </div>
      ) : null}
      <input
        className={`w-full ${
          errors.quality1
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Quality 1"
        {...getFieldProps("quality1")}
      />
      {errors.quality1 ? (
        <div className="w-full text-xs text-red-400">{errors.quality1}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.quality2
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Quality 2"
        {...getFieldProps("quality2")}
      />
      {errors.quality2 ? (
        <div className="w-full text-xs text-red-400">{errors.quality2}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.quality3
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Quality 3"
        {...getFieldProps("quality3")}
      />
      {errors.quality3 ? (
        <div className="w-full text-xs text-red-400">{errors.quality3}</div>
      ) : null}
      <div className="flex flex-col items-center">
        <lable className="text-gray-2 mt-4 mb-1">
          Upload Image of the Employee
        </lable>
        <div>
          <input
            className="p-4 border border-client"
            type="file"
            accept="image/png, image/jpeg"
            ref={empImgRef}
            onChange={(e) => handleCompressedUpload(e, "empImg")}
          />
          {values.empImg ? (
            <button
              onClick={() => {
                empImgRef.current.value = "";
                setValues({ ...values, empImg: null });
              }}
            >
              <FontAwesomeIcon icon="window-close" className="text-2xl ml-2" />
            </button>
          ) : null}
        </div>
        {errors.empImg ? (
          <div className="w-full text-xs text-red-400">{errors.empImg}</div>
        ) : null}
      </div>
      <input
        className={`w-full ${
          errors.seniorName
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4`}
        type="text"
        placeholder="Name of the Area Manager"
        {...getFieldProps("seniorName")}
      />
      {errors.seniorName ? (
        <div className="w-full text-xs text-red-400">{errors.seniorName}</div>
      ) : null}
      <textarea
        className={`w-full ${
          errors.description
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        rows="3"
        placeholder="Area Manager Qoute"
        {...getFieldProps("description")}
      />
      {errors.description ? (
        <div className="w-full text-xs text-red-400">{errors.description}</div>
      ) : null}
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center my-6">
        <div className="flex flex-col items-center">
          <lable className="text-gray-2 mt-4 mb-1">
            Upload Image of the Area Manager
          </lable>
          <div>
            <input
              className="p-4 border border-client"
              type="file"
              accept="image/png, image/jpeg"
              ref={insImgRef}
              onChange={(e) => handleCompressedUpload(e, "instructorImg")}
            />
            {values.instructorImg ? (
              <button
                onClick={() => {
                  insImgRef.current.value = "";
                  setValues({ ...values, instructorImg: null });
                }}
              >
                <FontAwesomeIcon
                  icon="window-close"
                  className="text-2xl ml-2"
                />
              </button>
            ) : null}
          </div>
          {errors.instructorImg ? (
            <div className="w-full text-xs text-red-400">
              {errors.instructorImg}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <lable className="text-gray-2 mt-4 mb-1">
            Upload Image of the Area Manager signature
          </lable>
          <div>
            <input
              className="p-4  border border-client "
              type="file"
              accept="image/png, image/jpeg"
              ref={insSignRef}
              onChange={(e) => handleCompressedUpload(e, "instructorSign")}
            />
            {values.instructorSign ? (
              <button
                onClick={() => {
                  insSignRef.current.value = "";
                  setValues({ ...values, instructorSign: null });
                }}
              >
                <FontAwesomeIcon
                  icon="window-close"
                  className="text-2xl ml-2"
                />
              </button>
            ) : null}
          </div>
          {errors.instructorSign ? (
            <div className="w-full text-xs text-red-400">
              {errors.instructorSign}
            </div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
      >
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loader type="TailSpin" color="lightgray" height={40} width={40} />
          </div>
        ) : (
          <> {update.state ? "UPDATE" : "ADD"}</>
        )}
      </button>
      {update.state ? (
        <button
          className="my-2 p-4 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          onClick={() => {
            empImgRef.current.value = "";
            insImgRef.current.value = "";
            insSignRef.current.value = "";
            resetForm();
            dispatch(setupdateeom({ state: false, data: null }));
          }}
        >
          ADD NEW
        </button>
      ) : null}
    </form>
  );
};

export default EmpOfMon;
