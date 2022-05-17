import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addClientCarousel,
  clientcarouselAlert,
  setupdateclientcarousel,
  updateClientCarousel,
} from "../../../../../context/actions/adminActions/clientsAction";
import Compressor from "compressorjs";
import Alert from "../../../../Components/Alert";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClientControls() {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const clientRef = useRef();
  const dispatch = useDispatch();
  const update = useSelector((state) => state.client.update);
  const clientalert = useSelector((state) => state.client.clientalert);
  const loading = useSelector((state) => state.client.addloading);

  useEffect(() => {
    if (clientalert.success !== null) {
      if (clientalert.success === true) {
        setShowAlert({
          show: true,
          message: clientalert.message,
          success: true,
        });
        dispatch(clientcarouselAlert({ success: null, message: "" }));
      } else if (clientalert.success === false) {
        setShowAlert({
          show: true,
          message: clientalert.message,
          success: false,
        });
        dispatch(clientcarouselAlert({ success: null, message: "" }));
      }
    }
  }, [clientalert, dispatch]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.4,
      maxWidth: 1500,
      success: (compressedResult) => {
        setValues({
          ...values,
          clientImg: compressedResult,
        });
      },
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.url) {
      errors.url = "*Required";
    }

    if (!update.state) {
      if (!values.clientImg) {
        errors.image = "*Required";
      }
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        name: "",
        url: "",
        clientImg: null,
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        clientRef.current.value = "";
        resetForm();
        const formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("url", values.url);
        formdata.append("logo", values.clientImg);
        if (update.state) {
          dispatch(updateClientCarousel(formdata, update.data._id));
        } else {
          dispatch(addClientCarousel(formdata));
        }
      },
    });

  useEffect(() => {
    if (update.state) {
      setValues({
        name: update.data.name,
        url: update.data.url,
        clientImg: null,
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
          errors.name ? "border-b-2 border-red-600" : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Name of Company client is from"
        {...getFieldProps("name")}
      />
      {errors.name ? (
        <div className="w-full text-xs text-red-400">{errors.name}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.url ? "border-b-2 border-red-600" : "border-b border-client"
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="URL for the company website"
        {...getFieldProps("url")}
      />
      {errors.url ? (
        <div className="w-full text-xs text-red-400">{errors.url}</div>
      ) : null}
      <div className="flex flex-col mb-4 items-center">
        <lable className="text-gray-2 mb-1 mt-4">
          Upload Logo of the Client's Company
        </lable>
        <div>
          <input
            className="p-4 border border-client"
            type="file"
            accept="image/png, image/jpeg"
            ref={clientRef}
            onChange={(e) => handleCompressedUpload(e)}
          />
          {values.clientImg !== null ? (
            <button
              onClick={() => {
                clientRef.current.value = "";
                setValues({ ...values, clientImg: null });
              }}
            >
              <FontAwesomeIcon icon="window-close" className="text-2xl ml-2" />
            </button>
          ) : null}
        </div>
        {errors.image ? (
          <div className="w-full text-xs text-red-400">{errors.image}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
      >
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loader
              type="TailSpin"
              color="lightgray"
              height={40}
              width={40}
              radius={0}
            />
          </div>
        ) : (
          <> {update.state ? "UPDATE" : "ADD"}</>
        )}
      </button>
      {update.state ? (
        <button
          className="my-2 p-4 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          onClick={() => {
            clientRef.current.value = "";
            resetForm();
            dispatch(setupdateclientcarousel({ state: false, data: null }));
          }}
        >
          ADD NEW
        </button>
      ) : null}
    </form>
  );
}
