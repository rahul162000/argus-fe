import React, { useEffect, useRef, useState } from 'react';
import Alert from '../../../../Components/Alert';
import Compressor from 'compressorjs';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  addReq,
  reqAlert,
  setupdatereq,
  updateReq,
} from '../../../../../context/actions/adminActions/requirementActions';

const RequirementsControl = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });
  const dispatch = useDispatch();
  const update = useSelector((state) => state.req.update);
  const requirementalert = useSelector((state) => state.req.requirementalert);
  const loading = useSelector((state) => state.req.addloading);
  const photoRef = useRef();

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.4,
      maxWidth: 1500,
      success: (compressedResult) => {
        setValues({ ...values, photo: compressedResult });
      },
    });
  };

  useEffect(() => {
    if (requirementalert.success !== null) {
      if (requirementalert.success) {
        setShowAlert({
          show: true,
          message: requirementalert.message,
          success: true,
        });
      } else {
        setShowAlert({
          show: true,
          message: requirementalert.message,
          success: false,
        });
      }
      dispatch(reqAlert({ success: null, message: '' }));
    }
  }, [dispatch, requirementalert]);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = '*Required';
    }
    if (!values.description) {
      errors.description = '*Required';
    }
    if (!values.price) {
      errors.price = '*Required';
    }
    if (!update.state) {
      if (!values.photo) {
        errors.photo = '*Required';
      }
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
        price: '',
        photo: null,
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        photoRef.current.value = '';
        resetForm();
        const formdata = new FormData();
        formdata.append('title', values.title);
        formdata.append('description', values.description);
        formdata.append('price', values.price);
        formdata.append('photo', values.photo);
        if (update.state) {
          dispatch(updateReq(formdata, update.data._id));
        } else {
          dispatch(addReq(formdata));
        }
      },
    });

  useEffect(() => {
    if (update.state) {
      setValues({
        title: update.data.title,
        description: update.data.description,
        price: update.data.price,
        photo: null,
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
          errors.title ? 'border-b-2 border-red-600' : 'border-b border-title'
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Title"
        {...getFieldProps('title')}
      />
      {errors.title ? (
        <div className="w-full text-xs text-red-400">{errors.title}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.price ? 'border-b-2 border-red-600' : 'border-b border-title'
        } focus:outline-none mt-4 p-1`}
        type="number"
        placeholder="Price"
        {...getFieldProps('price')}
      />
      {errors.price ? (
        <div className="w-full text-xs text-red-400">{errors.price}</div>
      ) : null}
      <textarea
        className={`w-full ${
          errors.description
            ? 'border-b-2 border-red-600'
            : 'border-b border-title'
        } focus:outline-none mt-4 p-1`}
        type="text"
        rows="3"
        placeholder="Write description"
        {...getFieldProps('description')}
      />
      {errors.description ? (
        <div className="w-full text-xs text-red-400">{errors.description}</div>
      ) : null}

      <div className="flex flex-col items-center mb-4">
        <lable className="text-gray-3 mt-4 mb-1">Upload photo of product</lable>
        <div>
          <input
            className="p-4 border border-title"
            type="file"
            accept="image/png, image/jpeg"
            ref={photoRef}
            onChange={(e) => handleCompressedUpload(e)}
          />
          {values.photo ? (
            <button
              onClick={() => {
                photoRef.current.value = '';
                setValues({ ...values, photo: null });
              }}
            >
              <FontAwesomeIcon icon="window-close" className="text-2xl ml-2" />
            </button>
          ) : null}
        </div>

        {errors.photo ? (
          <div className="w-full text-xs text-red-400">{errors.photo}</div>
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
          <> {update.state ? 'UPDATE' : 'ADD'}</>
        )}
      </button>
      {update.state ? (
        <button
          className="my-2 p-4 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          onClick={() => {
            photoRef.current.value = '';
            resetForm();
            dispatch(setupdatereq({ state: false, data: null }));
          }}
        >
          ADD NEW
        </button>
      ) : null}
    </form>
  );
};

export default RequirementsControl;
