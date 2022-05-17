import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import Select from 'react-select';
import { get_Class } from '../../../../../../../context/actions/lmsActions/classActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const EditClass = ({
  selectedClass,
  setShowAlert,
  classOptions,
  locationOptions,
  show,
  setShow,
}) => {
  const token = JSON.parse(localStorage.getItem('jwt'));

  const [selectedIns, setSelectedIns] = useState(null);
  const dispatch = useDispatch();
  const instructor = useSelector((state) => state.users.instructors);

  let options = [];
  instructor.forEach((element) => {
    options.push({
      value: element._id,
      label: element.name + '(' + element._id + ')',
    });
  });

  let classOpt = [];
  classOptions?.forEach((element) => {
    classOpt.push({
      value: element?.text,
      label: element?.text,
    });
  });

  let locationOpt = [];
  locationOptions?.forEach((element) => {
    locationOpt.push({
      value: element?.text,
      label: element?.text,
    });
  });

  const validate = (values) => {
    const errors = {};
    if (!values.classname) {
      errors.classname = '*Required';
    }
    if (!values.date) {
      errors.date = '*Required';
    }
    if (!values.location) {
      errors.location = '*Required';
    }
    return errors;
  };

  const {
    getFieldProps,
    handleSubmit,
    errors,
    setValues,
    setErrors,
    resetForm,
    values,
  } = useFormik({
    initialValues: {
      classname: '',
      date: '',
      location: '',
      noOfSpots: 0,
      students: [],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      axiosInstance
        .put(
          `/class/update/${selectedClass?._id}`,
          {
            classname: values.classname,
            date: values.date,
            location: values.location,
            noOfSpots: values.noOfSpots,
            instructor: selectedIns?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          setShow(false);
          setSelectedIns(null);
          resetForm();
          dispatch(get_Class());
          setShowAlert({
            show: true,
            message: 'Class Updated Successfully',
            success: true,
          });
        })
        .catch((err) => {
          console.log(err);
          setShowAlert({
            show: true,
            message: 'Error updating class',
            success: false,
          });
        });
    },
  });

  useEffect(() => {
    setSelectedIns({
      value: selectedClass?.instructorId,
      label:
        selectedClass?.instructorName + '(' + selectedClass?.instructorId + ')',
    });
    setValues({
      classname: selectedClass?.classname,
      date: selectedClass?.date,
      location: selectedClass?.location,
      noOfSpots: selectedClass?.noOfSpots,
      students: [],
    });
  }, [selectedClass, setValues]);

  const deleteClass = (e) => {
    e.preventDefault();
    axiosInstance
      .delete(`/class/delete/${selectedClass?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setShow(false);
        setSelectedIns(null);
        resetForm();
        dispatch(get_Class());
        setShowAlert({
          show: true,
          message: 'Class Deleted Successfully',
          success: true,
        });
      })
      .catch(() => {
        setShowAlert({
          show: true,
          message: 'Error deleting class',
          success: false,
        });
      });
  };

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-11/12 lg:w-1/2">
        <div className="w-full flex justify-end p-4">
          <IconButton onClick={() => setShow(false)}>
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3 px-4 scale-90 md:scale-100"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly mb-3 lg:my-4">
            <div className="w-full lg:w-5/12">
              <div className="bg-client p-4 w-full rounded-xl">
                <Select
                  placeholder="Select class"
                  className="w-full"
                  options={classOpt}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'lightgray',
                      primary: '#BA0913',
                    },
                  })}
                  value={
                    values.classname !== ''
                      ? { value: values.classname, label: values.classname }
                      : null
                  }
                  onChange={(selectedOption) => {
                    setValues({ ...values, classname: selectedOption.value });
                  }}
                />
              </div>

              {errors.classname ? (
                <div className="w-full text-xs text-red-400">
                  {errors.classname}
                </div>
              ) : null}
            </div>
            <div className="w-full lg:w-5/12 mt-3 lg:mt-0">
              <div className="bg-client p-4 w-full rounded-xl">
                <Select
                  placeholder="Select Instructor"
                  className="w-full"
                  options={options}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'lightgray',
                      primary: '#BA0913',
                    },
                  })}
                  value={selectedIns}
                  onChange={(selectedOption) => {
                    setSelectedIns(selectedOption);
                    setErrors({ ...errors, selectedIns: '' });
                  }}
                />
              </div>

              {errors.selectedIns ? (
                <div className="w-full text-xs text-red-400">
                  {errors.selectedIns}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly lg:mb-4">
            <div className="w-full lg:w-5/12">
              <input
                type="datetime-local"
                className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                {...getFieldProps('date')}
              />
              {errors.date ? (
                <div className="w-full text-xs text-red-400">{errors.date}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-5/12 mt-3 lg:mt-0">
              <div className="bg-client p-4 w-full rounded-xl">
                <Select
                  placeholder="Select class"
                  className="w-full"
                  options={locationOpt}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'lightgray',
                      primary: '#BA0913',
                    },
                  })}
                  value={
                    values.location !== ''
                      ? { value: values.location, label: values.location }
                      : null
                  }
                  onChange={(selectedOption) => {
                    setValues({ ...values, location: selectedOption.value });
                  }}
                />
              </div>
              {errors.location ? (
                <div className="w-full text-xs text-red-400">
                  {errors.location}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly lg:mb-4">
            <div className="w-full lg:w-5/12 mt-3 lg:mt-0">
              <input
                type="number"
                placeholder="Number of Spots"
                className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                {...getFieldProps('noOfSpots')}
              />
            </div>
            <div className="w-full lg:w-5/12">
              <input
                type="number"
                placeholder="Number of Spots"
                className="bg-client hidden md:invisible p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              />
            </div>
          </div>
          <div className="flex justify-around w-full">
            <button
              onClick={(e) => {
                deleteClass(e);
              }}
              className="my-8 w-1/2 lg:w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg text-base md:text-xl"
            >
              DELETE CLASS
            </button>

            <button
              type="submit"
              className="my-8 w-1/2 lg:w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg text-base md:text-xl"
            >
              EDIT CLASS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClass;
