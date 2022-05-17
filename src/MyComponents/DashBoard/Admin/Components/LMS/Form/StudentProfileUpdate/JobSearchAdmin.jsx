import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { userActivity } from '../../../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../../../helpers/axiosInstance';

const JobSearch = ({ user, setRefreshData }) => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.looking) {
      errors.looking = '*Required';
    }
    if (!values.wantEmail) {
      errors.wantEmail = '*Required';
    }
    if (!values.prefferedCity) {
      errors.prefferedCity = '*Required';
    }
    if (!values.availability) {
      errors.availability = '*Required';
    }
    if (!values.wageRange) {
      errors.wageRange = '*Required';
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues } = useFormik({
    initialValues: {
      looking: '',
      wantEmail: '',
      prefferedCity: '',
      availability: '',
      wageRange: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put(
          `/user/updateAdmin/${user?._id}`,
          { jobSearch: values },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          dispatch(userActivity('Job Search Added', 'Admin', user?._id));
          setRefreshData(res);
          resetForm();
        })
        .catch((err) => {});
    },
  });

  useEffect(() => {
    setValues({
      looking: user?.jobSearch?.looking,
      wantEmail: user?.jobSearch?.wantEmail,
      prefferedCity: user?.jobSearch?.prefferedCity,
      availability: user?.jobSearch?.availability,
      wageRange: user?.jobSearch?.wageRange,
    });
  }, [setValues, user]);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2"
      >
        <div className="flex items-center mt-4 p-2 md:p-4 shadow-forms rounded-t-2xl">
          <span className="flex items-center text-red-1 text-4xl">
            <WorkOutlineIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            Job Search
          </h1>
        </div>

        <div className="flex flex-col text-gray-2 font-bold placeholder-red-1 h-72 p-2 md:p-4 overflow-y-scroll z-10">
          <div className="flex flex-col">
            <label> Are you looking for a job?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('looking')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.looking ? (
              <div className="w-full text-xs text-red-400">
                {errors.looking}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Email me about new opportunities?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('wantEmail')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.wantEmail ? (
              <div className="w-full text-xs text-red-400">
                {errors.wantEmail}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label>Maximum Travel Radius (Bar to select values)</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('prefferedCity')}
            />

            {errors.prefferedCity ? (
              <div className="w-full text-xs text-red-400">
                {errors.prefferedCity}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label>Availability</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('availability')}
            >
              <option value="" selected disabled></option>
              <option value="Early Morning">Early Morning</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
              <option value="Weekend">Weekend</option>
              <option value="Shift">Shift</option>
              <option value="On Call">on Call</option>
              <option value="Overtime">Overtime</option>
              <option value="Flexible">Flexible</option>
              <option value="To be Determined">To be Determined</option>
            </select>
            {errors.availability ? (
              <div className="w-full text-xs text-red-400">
                {errors.availability}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Wage Range (Bar to select values)</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('wageRange')}
            />
            {errors?.wageRange ? (
              <div className="w-full text-xs text-red-400">
                {errors?.wageRange}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex shadow-forms-1 z-20 rounded-b-2xl">
          <button
            type="submit"
            className=" mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;
