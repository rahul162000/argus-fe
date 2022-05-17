import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getUser } from '../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../helpers/axiosInstance';
import SideLine from '../../Components/SideLine';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Loader from 'react-loader-spinner';
import PayPal from './PayPal';
import {
  getProgress,
  getUsersCourse,
} from '../../../context/actions/userActions';
import Alert from '../../Components/Alert';

export default function PaymentPage() {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const [couponError, setCouponError] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [alreadyBought, setAlreadyBought] = useState(false);
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });
  const courses = useSelector((state) => state.progress.course);

  useEffect(() => {
    dispatch(getUser());
    if (!courses.some((c) => c._id === courseId)) {
      setLoading(true);
      axiosInstance
        .get(`/material/getCourseDetails/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setCourse(res?.data?.data?.Course);
          setPrice(res?.data?.data?.Course?.price);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setCourse(courses.filter((c) => c._id === courseId)[0]);
      setAlreadyBought(true);
    }
  }, [token, courseId, dispatch, courses]);

  const applyCoupon = (e) => {
    e.preventDefault();
    axiosInstance
      .post(
        '/coupon/checkCoupon',
        { couponCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setShow(true);
        showCouponMsg();
        let disc =
          course?.price - (course?.price * res?.data?.data?.discount) / 100;
        setCouponDiscount(res?.data?.data?.discount);
        setCouponMsg(res?.data?.message);
        setCouponError(false);
        setPrice(disc);
      })
      .catch((err) => {
        setCouponDiscount(0);
        setCouponMsg(err?.response?.data?.error);
        setCouponError(true);
        setShow(true);
        showCouponMsg();
      });
  };

  useEffect(() => {
    if (couponCode === '') {
      setCouponDiscount(0);
      setPrice(course?.price);
    }
  }, [couponCode, course]);

  const showCouponMsg = () => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const buyCourse = (order) => {
    axiosInstance
      .post(
        '/material/buyCourse',
        {
          courseId,
          name: course?.name,
          desc: course?.description,
          coupon: couponCode,
          originalPrice: course?.price,
          order,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(getUsersCourse());
        dispatch(getProgress());
        setShowAlert({
          show: true,
          message: 'Course Bought successfully!!!',
          success: true,
        });
        setAlreadyBought(true);
        if (couponCode !== '') {
          axiosInstance
            .post(
              '/coupon/applyCoupon',
              { couponCode },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            )
            .then()
            .catch((err) => {});
        }
      })
      .catch((err) => {
        setShowAlert({
          show: true,
          message: 'Some error occurred, payment recieved.',
          success: false,
        });
      });
  };

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <div className="font-for-para">
        <div className="px-2 md:px-0 xl:px-0 max-w-1366 mx-auto">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            CHECKOUT
          </h1>
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
            </div>
          ) : (
            <>
              {showAlert.show ? (
                <Alert alert={showAlert} rmAlert={setShowAlert} />
              ) : null}

              <div className="flex flex-col lg:flex-row w-full justify-between items-start">
                <div className="flex-1">
                  <div className="flex flex-row items-stretch w-full mt-8 mb-6">
                    <SideLine />
                    <h1 className="leading-tight text-3xl font-bold text-gray-3">
                      {course?.name}
                    </h1>
                  </div>

                  <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
                    {course?.description}
                  </p>
                </div>
                <div className="flex flex-col flex-1 lg:pl-20 justify-end items-end mt-8">
                  <div className="w-full">
                    <h1 className="w-full flex justify-between text-xl font-bold">
                      <span>Price</span>
                      <span>$ {course?.price}</span>
                    </h1>
                    <h1 className="w-full flex justify-between text-xl font-bold">
                      <span>Coupon Discount</span>
                      <span>- $ {(course?.price * couponDiscount) / 100}</span>
                    </h1>
                    <h1 className="w-full mt-2  border-t-2 flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>$ {price}</span>
                    </h1>
                  </div>
                  <div className="flex items-start w-full mt-6">
                    <div className="w-8/12 mr-4">
                      <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="bg-client p-4 w-full rounded-md"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      {show ? (
                        <>
                          {couponMsg ? (
                            <div
                              className={`w-full text-xs ${
                                couponError ? 'text-red-400' : 'text-green-1'
                              }`}
                            >
                              {couponMsg}
                            </div>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                    <button
                      onClick={(e) => applyCoupon(e)}
                      className=" w-4/12 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-md"
                    >
                      APPLY COUPON
                    </button>
                  </div>
                  {alreadyBought ? (
                    <p className="w-full text-center mt-6 text-2xl font-bold text-gray-400">
                      Course already bought!!!
                    </p>
                  ) : (
                    <div className="w-full mt-6 z-0">
                      <PayPal
                        course={course}
                        price={price}
                        setShowAlert={setShowAlert}
                        buyCourse={buyCourse}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
