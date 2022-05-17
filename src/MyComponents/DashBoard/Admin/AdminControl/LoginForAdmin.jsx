import React, { useState } from 'react';
import logo from '../../../../argus website/SVG/Logowith shadow.svg';
import { useHistory } from 'react-router-dom';
import Alert from '../../../Components/Alert';

// eslint-disable-next-line no-unused-vars
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../../../helpers/axiosInstance';
import {
  setToken,
  setUserID,
} from '../../../../context/actions/authActions/setStorageAction';
import {
  isAuthenticated,
  setUser,
} from '../../../../context/actions/authActions/getUserAction';

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = '*Required';
  }

  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const LoginForAdmin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      axiosInstance
        .post('/signin', values)
        .then((data) => {
          dispatch(setToken(data?.data?.token));
          dispatch(setUserID(data?.data?.user?._id));
          dispatch(setUser(data?.data?.user));
          dispatch(isAuthenticated('true'));
          resetForm();
          history.push('/dashboard/admin/home');
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: err?.response?.data?.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <div className="block fixed top-0 z-100 overflow-hidden">
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-no-repeat bg-hero">
        <div className="content text-3xl text-center md:text-left lg:w-2/3">
        </div>
        <div className="w-1/3 mx-auto flex flex-col items-center">
          <form
            className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
            onSubmit={handleSubmit}
          >
            {showAlert.show ? (
              <Alert alert={showAlert} rmAlert={setShowAlert} />
            ) : null}
            <img src={logo} alt="Logo" className="w-20 mb-3" />

            <h1 className="text-black text-2xl mt-1 mb-3">Admin Login</h1>

            <input
              className="w-full py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-500">{errors.email}</div>
            ) : null}
            <input
              className="w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="password"
              placeholder="Password"
              {...getFieldProps('password')}
            />
            {errors.password ? (
              <div className="w-full text-xs text-red-500">
                {errors.password}
              </div>
            ) : null}

            <button
              className="w-1/2 mt-3 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForAdmin;
