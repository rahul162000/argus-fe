import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { userActivity } from '../../../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../../../helpers/axiosInstance';

const BackgroundDetails = ({ user, setRefreshData }) => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.hasCriminalRecord) {
      errors.hasCriminalRecord = '*Required';
    }
    if (!values.hasVechicle) {
      errors.hasVechicle = '*Required';
    }
    if (!values.hasLicenseToDrive) {
      errors.hasLicenseToDrive = '*Required';
    }
    if (!values.levelOfEducation) {
      errors.levelOfEducation = '*Required';
    }
    if (!values?.languagesKnown[0]) {
      errors.languagesKnown = '*Required';
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues } = useFormik({
    initialValues: {
      hasCriminalRecord: '',
      hasVechicle: '',
      hasLicenseToDrive: '',
      levelOfEducation: '',
      languagesKnown: [''],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put(`/user/updateAdmin/${user?._id}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(
            userActivity('Background Details Added', 'Admin', user?._id),
          );
          setRefreshData(res);
          resetForm();
        })
        .catch((err) => {});
    },
  });

  useEffect(() => {
    setValues({
      hasCriminalRecord: user?.hasCriminalRecord,
      hasVechicle: user?.hasVechicle,
      hasLicenseToDrive: user?.hasLicenseToDrive,
      levelOfEducation: user?.levelOfEducation,
      languagesKnown: [user?.languagesKnown],
    });
  }, [user, setValues]);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2"
      >
        <div className="flex items-center mt-4 p-2 md:p-4 shadow-forms rounded-t-2xl">
          <span className="flex items-center text-red-1 text-4xl">
            <BorderColorIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            Background Declaration
          </h1>
        </div>

        <div className="flex flex-col text-gray-2 font-bold placeholder-red-1 h-72 p-2 md:p-4 overflow-y-scroll z-10">
          <div className="flex flex-col">
            <label> Do you have a criminal record ?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasCriminalRecord')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasCriminalRecord ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasCriminalRecord}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Are you fully licensed to drive ?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasLicenseToDrive')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasLicenseToDrive ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasLicenseToDrive}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Do you own a vehicle ?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasVechicle')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasVechicle ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasVechicle}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col mt-4">
            <label> What is your highest level of Education?</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('levelOfEducation')}
            >
              <option value="" disabled selected></option>
              <option value="None or Less Than High School">
                None or Less Than High School
              </option>
              <option value="High School Graduate">High School Graduate</option>
              <option value="Associate's degree:">
                One or Two years program in a College or a University
              </option>
              <option value="Bachelor's degree">Bachelor's degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctoral degree">Doctoral degree</option>
              <option value="Others">Others</option>
            </select>
            {errors.levelOfEducation ? (
              <div className="w-full text-xs text-red-400">
                {errors.levelOfEducation}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label>
              Spoken Languages (Multiple Selections Can be Made From a dropdown
              of Languages)
            </label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('languagesKnown[0]')}
            />
            {errors?.languagesKnown ? (
              <div className="w-full text-xs text-red-400">
                {errors?.languagesKnown}
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

export default BackgroundDetails;
