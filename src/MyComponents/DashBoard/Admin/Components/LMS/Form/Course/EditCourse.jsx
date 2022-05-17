import { IconButton } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const EditCourse = ({ show, setShow, setRefresh, data, setShowAlert }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = '*Required';
    }
    if (!values.description) {
      errors.description = '*Required';
    }

    if (!values.price) {
      errors.price = '*Required';
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues } = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put(`/material/editCourse/${data?.Course?._id}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setRefresh(res);
          resetForm();
          setShow(false);
          setShowAlert({
            show: true,
            message: 'Course updated successfully',
            success: true,
          });
        })
        .catch((err) => {
          setShow(false);
          setShowAlert({
            show: true,
            message: 'Error updating course',
            success: false,
          });
        });
    },
  });

  useEffect(() => {
    setValues({
      name: data?.Course?.name,
      description: data?.Course?.description,
      price: data?.Course?.price,
    });
  }, [setValues, data]);

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg">
        <div className="w-full flex justify-end p-4">
          <IconButton onClick={() => setShow(false)}>
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-center text-lg font-bold"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
            <div className="w-full lg:w-5/12">
              <input
                type="text"
                placeholder="Course name"
                className="bg-client p-5 w-full"
                {...getFieldProps('name')}
              />
              {errors.name ? (
                <div className="w-full text-xs text-red-400">{errors.name}</div>
              ) : null}
            </div>

            <div className="w-full lg:w-5/12">
              <input
                type="Number"
                placeholder="Course price"
                className="bg-client p-5 w-full"
                {...getFieldProps('price')}
              />
              {errors.price ? (
                <div className="w-full text-xs text-red-400">
                  {errors.price}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full lg:w-11/12">
            <textarea
              type="textarea"
              placeholder="Course description"
              className="bg-client p-5 w-full  mt-8 lg:mt-4 h-60"
              {...getFieldProps('description')}
            />
            {errors.description ? (
              <div className="w-full text-xs text-red-400">
                {errors.description}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            EDIT COURSE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
