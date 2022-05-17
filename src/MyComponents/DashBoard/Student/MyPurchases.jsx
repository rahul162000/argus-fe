import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../helpers/axiosInstance';

const MyPurchases = () => {
  const course = useSelector((state) => state.progress.course);
  const progress = useSelector((state) => state.progress.progress);

  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get('/myPurchases/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPurchases(res?.data?.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        MY PURCHASES
      </h1>
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-6/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Description
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Graduation
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Purchase Date
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Status
        </h1>
      </div>
      {course.map((c) => {
        let currentCourse = progress.courses.filter(
          (f) => f.courseId === c._id,
        )[0];
        return (
          <>
            <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
              <h1 className="lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
                <span className="font-semibold text-xl">{c?.name}-</span>{' '}
                {c?.description}
              </h1>
              <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                {currentCourse?.courseStatus?.completedDate ? (
                  <>
                    {' '}
                    <h1 className="">
                      {new Date(
                        currentCourse?.courseStatus?.completedDate,
                      ).toLocaleDateString()}
                    </h1>
                    <h1 className="font-bold">
                      {new Date(
                        currentCourse?.courseStatus?.completedDate,
                      ).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </h1>
                  </>
                ) : (
                  <span className="font-semibold text-xl">Not Completed</span>
                )}
              </div>
              <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="">
                  {new Date(
                    currentCourse?.courseStatus?.startedDate,
                  ).toLocaleDateString()}
                </h1>
                <h1 className="font-bold">
                  {new Date(
                    currentCourse?.courseStatus?.startedDate,
                  ).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </h1>
              </div>
              <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                <h1>
                  {currentCourse?.courseStatus?.completedStatus
                    ? 'Completed'
                    : 'Ongoing'}
                </h1>
              </div>
            </div>
            <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
          </>
        );
      })}
    </div>
  );
};

export default MyPurchases;
