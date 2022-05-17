import { IconButton } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const EditChapter = ({ show, setShow, setRefresh, data, setShowAlert }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = '*Required';
    }
    if (!values.description) {
      errors.description = '*Required';
    }

    if (!values.duration) {
      errors.duration = '*Required';
    }
    return errors;
  };

  console.log(data);
  const { getFieldProps, handleSubmit, errors, setValues } = useFormik({
    initialValues: {
      name: '',
      description: '',
      duartion: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put(`/material/editChapter/${data?._id}`, values, {
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
            message: 'Chapter updated successfully',
            success: true,
          });
        })
        .catch((err) => {
          setShow(false);
          setShowAlert({
            show: true,
            message: 'Error updating chapter',
            success: false,
          });
        });
    },
  });

  useEffect(() => {
    setValues({
      name: data?.name,
      description: data?.description,
      duration: data?.duration,
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
                placeholder="Chapter name"
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
                placeholder="Chapter duration"
                className="bg-client p-5 w-full"
                {...getFieldProps('duration')}
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
              placeholder="Chapter description"
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
            EDIT CHAPTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditChapter;
