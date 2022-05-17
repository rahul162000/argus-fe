import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import Alert from '../../../../../../Components/Alert';
import ProfileBar from '../../../ProfileBar';
import SideNav from '../../../SideNav';
import EditCourse from '../Course/EditCourse';

export const CoursePage = () => {
  const { courseId } = useParams();
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [module, setModule] = useState([]);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(null);
  const history = useHistory();
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  useEffect(() => {
    axiosInstance
      .get(`/material/getCourse/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModule(res.data.data);
      })
      .catch();
  }, [token, courseId, refresh]);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <EditCourse
        show={show}
        setShow={setShow}
        setRefresh={setRefresh}
        data={module}
        setShowAlert={setShowAlert}
      />
      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            COURSE
          </h1>
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="p-2 mb-4">
              <h1 className="text-2xl text-gray-2 ">
                Course Name:
                <span className="font-bold ml-3">{module?.Course?.name}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Course Description:
                <span className="font-bold ml-3">
                  {module?.Course?.description}
                </span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Course Duration:
                <span className="font-bold ml-3">
                  {module?.Course?.duration}
                </span>
              </h1>
            </div>
            <div className="">
              <button
                onClick={() => setShow(true)}
                className="font-bold px-8 py-3 bg-green-1 text-white text-xl rounded-2xl hover:bg-white hover:text-green-1 border-2 border-green-1 m-2"
              >
                Update
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  axiosInstance
                    .delete(`/material/deleteCourse/${module?.Course?._id}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                    .then(() => {
                      history.goBack();
                    })
                    .catch((err) => {
                      setShowAlert({
                        show: true,
                        message: 'Error deleting course',
                        success: false,
                      });
                    });
                }}
                className="font-bold px-8 py-3 bg-red-1 text-white text-xl rounded-2xl hover:bg-white hover:text-red-1 border-2 border-red-1 m-2"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Module
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Duration
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Module Description
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Created
            </h1>
          </div>
          {module?.Module?.map((c) => {
            return (
              <>
                <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
                  <h1
                    onClick={() => {
                      history.push(
                        `/dashboard/admin/lms/course/${courseId}/module/${c._id}`,
                      );
                    }}
                    className="lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0 hover:bg-red-1 hover:text-white font-bold cursor-pointer"
                  >
                    {c?.name}
                  </h1>
                  <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    <h1 className="font-bold">{c?.duration} min</h1>
                  </div>
                  <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    <h1 className="">{c?.description}</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center lg:w-3/12 px-3 py-2 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                    <h1>
                      {new Date(c?.createdAt).toLocaleString('en-Us', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </h1>
                  </div>
                </div>
              </>
            );
          })}
          <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
