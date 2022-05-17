import React, { useState } from 'react';
import Logo from './../../argus website/SVG/Logowith shadow.svg';
import { Link } from 'react-router-dom';
import CompanyContact from '../Components/CompanyContact';
import Alert from '../Components/Alert';
import { useFormik } from 'formik';
import axiosInstance from '../../helpers/axiosInstance';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Footer = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      await axiosInstance
        .post(`/subscription/save`, values)
        .then((response) => {
          setShowAlert({
            show: true,
            message: 'Subscribed successfully',
            success: true,
          });
          resetForm();
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: err.response.data.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <footer className="bg-black-1 font-for-para">
      <div className="text-white text-lg md:text-sm body-font bg-top bg-no-repeat bg-cover bg-footer bg-opacity-5">
        <div className="container px-4 sm:px-8 lg:px-12 2xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-col lg:flex-row text-left md:text-center order-first items-start">
            <div className="w-full md:w-3/4 flex flex-wrap md:text-left text-center order-first mx-auto">
              <div className="lg:w-1/3 w-full md:px-8 lg:px-0 pt-4">
                <Link to="/">
                  <img
                    src={Logo}
                    className="w-32 mx-auto lg:mx-0 my-2 transform hover:scale-105 duration-200"
                    alt="Logo "
                  />
                </Link>
                <p className="text-white leading-loose text-center lg:text-left">
                  Your protection is Our Mission. Proudly serving business and
                  residential sector in Ontario.
                </p>
                <hr className="border-1 border-gray-600 w-full mr-3 my-3" />
                <div className="text-left">
                  <CompanyContact />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-0 lg:px-8 md:px-8 pt-10 lg:pt-32">
                <h2 className="title-font font-bold text-white tracking-widest text-2xl md:text-sm mb-7 text-left">
                  EXPLORE
                </h2>
                <nav className="list-none mb-10 text-left sn:text-center">
                  <li className="my-0.5">
                    {' '}
                    <Link to="/about" className="text-white  hover:text-red-1">
                      ➔ About
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link
                      to="/services"
                      className="text-white  hover:text-red-1"
                    >
                      ➔ Our Services
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/" className="text-white  hover:text-red-1">
                      ➔ Covid-19 Plan
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/" className="text-white  hover:text-red-1">
                      ➔ Organization Structure
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/jobs" className="text-white  hover:text-red-1">
                      ➔ Jobs
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/" className="text-white  hover:text-red-1">
                      ➔ Personnel
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link
                      to="/training"
                      className="text-white  hover:text-red-1"
                    >
                      ➔ Training
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link
                      to="/contact"
                      className="text-white  hover:text-red-1"
                    >
                      ➔ Contact Us
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link
                      to="/technology"
                      className="text-white  hover:text-red-1"
                    >
                      ➔ Technology
                    </Link>{' '}
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-0 lg:px-4 md:px-8 pt-10 lg:pt-32">
                <h2 className="title-font font-bold text-white tracking-widest text-2xl md:text-sm mb-7 text-left">
                  SERVICES
                </h2>
                <nav className="list-none mb-10 text-left sn:text-center">
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Gated Community Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Construction Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Parking Enforcement
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Residential Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Corporate Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Industrial Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Private Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Mobile Security
                      </button>
                    </Link>{' '}
                  </li>
                  <li className="my-0.5">
                    {' '}
                    <Link to="/services">
                      <button className="text-white  hover:text-red-1">
                        ➔ Event Security
                      </button>
                    </Link>{' '}
                  </li>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/12 bg-red-1 mx-auto mb-2 lg:mb-0">
              <div className="w-full px-4 text-center items-center pt-6 pb-6">
                <div className="flex flex-col bg-red-1 items-center mx-auto">
                  {showAlert.show ? (
                    <Alert alert={showAlert} rmAlert={setShowAlert} />
                  ) : null}
                  <div className="px-5">
                    <div className="bg-contain bg-no-repeat bg-center bg-shape pt-12 pb-8 ">
                      <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3 text-center pb-2">
                        NEWSLETTER
                      </h2>
                      <p className="text-white font-medium text-lg mt-2 text-center leading-relaxed">
                        Signup to get our daily latest security news and
                        updates.
                      </p>
                    </div>
                  </div>

                  <form
                    className="w-full px-6 pt-2 pb-8 "
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="email"
                      className="w-full myt-4 mb-2 bg-white border border-gray-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Enter Email"
                      {...getFieldProps('email')}
                    />
                    {errors.email ? (
                      <div className="w-full text-xs text-white text-left">
                        {errors.email}
                      </div>
                    ) : null}
                    <button
                      className="w-full p-4 rounded-lg font-bold text-white bg-black hover:bg-white hover:text-red-700 mt-3"
                      type="submit"
                    >
                      REGISTER NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-3">
          <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 max-w-1366 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-white">
              © Copyright 2021 by Argus Security Services Corp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
