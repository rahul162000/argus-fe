import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {
  setCurrentCourse,
  updateModule,
} from '../../../context/actions/userActions';
import axiosInstance from '../../../helpers/axiosInstance';
import ModuleListCard from './ModuleListCard';

const Modules = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [module, setModule] = useState([]);
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress.progress);
  const current = useSelector((state) => state.progress.current);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/material/getCourse/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setModule(res.data.data.Module);
      })
      .catch(() => {
        setLoading(false);
        history.goBack();
      });
  }, [token, courseId, history, dispatch, progress?.courses]);

  useEffect(() => {
    dispatch(
      setCurrentCourse(
        progress?.courses?.filter((f) => f.courseId === courseId)[0],
      ),
    );
  }, [courseId, dispatch, progress?.courses]);

  useEffect(() => {
    if (current) {
      if (
        current?.completedModules?.length === 0 &&
        current?.currentModule === null
      ) {
        if (module?.length !== 0) {
          dispatch(updateModule({ moduleId: module[0]._id, id: current._id }));
        }
      }
    }
  }, [current, dispatch, module]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        MODULES
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {module.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No modules to show
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
              {module.map((m, index) => {
                let completed = false;
                let ongoing = false;
                if (
                  current?.completedModules?.some(
                    (module) => module.moduleId === m._id,
                  )
                ) {
                  completed = true;
                }
                if (current?.currentModule?.moduleId === m._id) {
                  ongoing = true;
                }

                return (
                  <ModuleListCard
                    m={m}
                    completed={completed}
                    ongoing={ongoing}
                    index={index}
                    courseId={courseId}
                    module={module}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Modules;
