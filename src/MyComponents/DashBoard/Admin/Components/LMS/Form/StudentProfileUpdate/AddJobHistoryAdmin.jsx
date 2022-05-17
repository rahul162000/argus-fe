import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { userActivity } from '../../../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../../../helpers/axiosInstance';

const AddJobHistory = ({ show, setShow, user, setRefreshData }) => {
  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      category: '',
      companyName: '',
      companyAddress: '',
      employeeDurationFrom: '',
      employeeDurationTo: '',
      reasonForLeaving: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put(`/user/addJobHistoryAdmin/${user._id}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setShow(false);
          dispatch(userActivity('Job History Added', 'Admin', user?._id));
          setRefreshData(res);
          resetForm();
        })
        .catch((err) => {});
    },
  });

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 ">
        <div className="w-full flex justify-end p-4 pb-0">
          <IconButton
            style={{ marginBottom: '0' }}
            onClick={() => setShow(false)}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="rounded-lg bg-white mx-4 md:mx-8 p-2 md:p-4 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-gray-2 font-bold"
          >
            <div className="flex flex-col">
              <label> Category</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps('category')}
              />
              {errors.category ? (
                <div className="w-full text-xs text-red-400">
                  {errors.category}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4">
              <label> Company Name</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps('companyName')}
              />
              {errors.companyName ? (
                <div className="w-full text-xs text-red-400">
                  {errors.companyName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4">
              <label> Address</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps('companyAddress')}
              />
              {errors.companyAddress ? (
                <div className="w-full text-xs text-red-400">
                  {errors.companyAddress}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4 ">
              <label> Employment Duration</label>
              <div className="w-full flex">
                <input
                  className="mr-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                  placeholder="from"
                  type="date"
                  {...getFieldProps('employeeDurationFrom')}
                />
                <label> To</label>
                <input
                  className="ml-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                  placeholder="to"
                  type="date"
                  {...getFieldProps('employeeDurationTo')}
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label> Reason for Leaving</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps('reasonForLeaving')}
              />
              {errors.reasonForLeaving ? (
                <div className="w-full text-xs text-red-400">
                  {errors.reasonForLeaving}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobHistory;
