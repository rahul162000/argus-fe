import React, { useEffect, useRef, useState } from "react";
import Alert from "../../../../Components/Alert";
import Compressor from "compressorjs";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addTestimonial,
  setupdatetestimonial,
  testimonailAlert,
  updateTestimonial,
} from "../../../../../context/actions/adminActions/testimonialAction";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Testimonials() {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const dispatch = useDispatch();
  const update = useSelector((state) => state.testimonial.update);
  const testimonialalert = useSelector(
    (state) => state.testimonial.testimonialalert
  );
  const loading = useSelector((state) => state.testimonial.addloading);
  const ref = useRef();

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.4,
      maxWidth: 1500,
      success: (compressedResult) => {
        setValues({ ...values, testimonialImg: compressedResult });
      },
    });
  };

  useEffect(() => {
    if (testimonialalert.success !== null) {
      if (testimonialalert.success) {
        setShowAlert({
          show: true,
          message: testimonialalert.message,
          success: true,
        });
      } else {
        setShowAlert({
          show: true,
          message: testimonialalert.message,
          success: false,
        });
      }
      dispatch(testimonailAlert({ success: null, message: "" }));
    }
  }, [dispatch, testimonialalert]);

  const validate = (values) => {
    const errors = {};
    if (!values.client) {
      errors.client = "*Required";
    }
    if (!values.description) {
      errors.description = "*Required";
    }
    if (!values.company) {
      errors.company = "*Required";
    }
    if (!update.state) {
      if (!values.testimonialImg) {
        errors.testimonialImg = "*Required";
      }
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        client: "",
        description: "",
        company: "",
        testimonialImg: null,
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        ref.current.value = "";
        resetForm();
        const formdata = new FormData();
        formdata.append("name", values.client);
        formdata.append("description", values.description);
        formdata.append("role", values.company);
        formdata.append("photo", values.testimonialImg);
        formdata.append("isApproved", false);
        formdata.append("priority", 0);
        if (update.state) {
          dispatch(updateTestimonial(formdata, update.data._id));
        } else {
          dispatch(addTestimonial(formdata));
        }
      },
    });

  useEffect(() => {
    if (update.state) {
      setValues({
        client: update.data.name,
        description: update.data.description,
        company: update.data.role,
        testimonialImg: null,
      });
    }
  }, [setValues, update]);

  return (
    <form
      className="flex flex-col items-center py-4 px-2 sm:px-4 md:px-8 text-lg text-gray-3"
      onSubmit={handleSubmit}
    >
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}
      <input
        className={`w-full ${
          errors.client ? "border-b-2 border-red-600" : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Name of Client"
        {...getFieldProps("client")}
      />
      {errors.client ? (
        <div className="w-full text-xs text-red-400">{errors.client}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.company
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Name of Company client is from"
        {...getFieldProps("company")}
      />
      {errors.company ? (
        <div className="w-full text-xs text-red-400">{errors.company}</div>
      ) : null}
      <textarea
        className={`w-full ${
          errors.description
            ? "border-b-2 border-red-600"
            : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        rows="3"
        placeholder="Write Testimonial by the client."
        {...getFieldProps("description")}
      />
      {errors.description ? (
        <div className="w-full text-xs text-red-400">{errors.description}</div>
      ) : null}

      <div className="flex flex-col items-center mb-4">
        <lable className="text-gray-3 mt-4 mb-1">
          Upload Image of the Client
        </lable>
        <div>
          <input
            className="p-4  border border-client"
            type="file"
            accept="image/png, image/jpeg"
            ref={ref}
            onChange={(e) => handleCompressedUpload(e)}
          />
          {values.testimonialImg ? (
            <button
              onClick={() => {
                ref.current.value = "";
                setValues({ ...values, testimonialImg: null });
              }}
            >
              <FontAwesomeIcon icon="window-close" className="text-2xl ml-2" />
            </button>
          ) : null}
        </div>

        {errors.testimonialImg ? (
          <div className="w-full text-xs text-red-400">
            {errors.testimonialImg}
          </div>
        ) : null}
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
            ref.current.value = "";
            resetForm();
            dispatch(setupdatetestimonial({ state: false, data: null }));
          }}
        >
          ADD NEW
        </button>
      ) : null}
    </form>
  );
}
