import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axiosInstance from "../../../helpers/axiosInstance";

const ModuleListCard = ({ m, completed, ongoing, courseId, index, module }) => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("jwt"));
  const [duration, setDuration] = useState(0);
  const [chapters, setChapters] = useState([]);

  const progress = useSelector((state) => state.progress.progress);
  const current = useSelector((state) => state.progress.current);

  useEffect(() => {
    axiosInstance
      .get(`/material/getModule/${courseId}/${m._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setChapters(res.data.data.Chapters);
      })
      .catch(() => {});
  }, [courseId, m._id, token]);

  useEffect(() => {
    const course = progress?.courses?.filter((f) => f.courseId === courseId)[0];

    let completedChapters = [];
    course?.completedChapters?.forEach((element) => {
      chapters.forEach((c) => {
        if (c._id === element.chapterId) {
          completedChapters.push(element.chapterId);
        }
      });
    });

    if (completedChapters?.length !== 0) {
      axiosInstance
        .post(
          "/material/getDuration",
          { chapters: completedChapters },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setDuration(res.data.data);
        })
        .catch((err) => {});
    }
  }, [token, m._id, progress?.courses, chapters]);

  //Total duration of course in m?.duration and completed duration in duration

  let startDate = null;

  if (current.completedModules.some((module) => module.moduleId === m._id)) {
    startDate = current.completedModules.filter(
      (module) => module.moduleId === m._id
    )[0].createdAt;
  } else if (current?.currentModule?.moduleId === m._id) {
    startDate = current?.currentModule?.updatedAt;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div
          onClick={() => {
            if (completed || ongoing) {
              history.push(
                `/dashboard/student/course/${courseId}/module/${
                  m?._id
                }/chapter/${module[index + 1]?._id}`
              );
            }
          }}
          className="lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0 hover:bg-red-1 font-bold hover:text-white cursor-pointer"
        >
          <div className="flex flex-col">
            <span>{m?.name}</span>
            <span className="font-semibold text-lg whitespace-pre-line">
              {m?.description}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">
            {startDate
              ? new Date(startDate).toLocaleDateString()
              : "Not Started"}
          </h1>
          <h1 className="font-bold">
            {startDate
              ? new Date(startDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{((duration / m.duration) * 100).toFixed(1)} %</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>
            {completed ? "Completed" : ongoing ? "Ongoing" : "Not Started"}
          </h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
    </>
  );
};

export default ModuleListCard;
