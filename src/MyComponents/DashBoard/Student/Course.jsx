import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  getProgress,
  getUsersCourse,
  setCurrentCourse,
} from '../../../context/actions/userActions';
import axiosInstance from '../../../helpers/axiosInstance';
import CourseListCard from './CourseListCard';

const Course = () => {
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress.progress);
  const courses = useSelector((state) => state.progress.course);
  const loading = useSelector((state) => state.progress.loading);
  const token = JSON.parse(localStorage.getItem('jwt'));

  useEffect(() => {
    dispatch(getUsersCourse(token));
  }, [dispatch]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        Courses
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {courses.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No courses to show
            </p>
          ) : (
            <>
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-6/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Course
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Started
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Progress
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Status
                </h1>
              </div>
              {courses.map((c, index) => {
                let time = progress?.courses?.filter(
                  (f) => f?.courseId === c?._id,
                )[0];

                let startedAt = new Date(
                  parseInt(time?._id.toString().substring(0, 8), 16) * 1000,
                ).toLocaleString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                });
                return (
                  <>
                    <CourseListCard c={c} startedAt={startedAt} index={index} />
                  </>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Course;
