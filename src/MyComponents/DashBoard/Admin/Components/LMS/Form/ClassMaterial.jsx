import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import AddChapter from "./Course/AddChapter";
import AddCourse from "./Course/AddCourse";
import AddModule from "./Course/AddModule";
import AddSlide from "./Course/AddSlide";

export const ClassMaterial = () => {
  const [button, setButton] = useState({
    course: false,
    module: false,
    chapter: false,
    slide: false,
  });
  const [course, setCourse] = useState([]);
  const [courseRefresh, setCourseRefresh] = useState(null);
  const [active, setActive] = useState(0);

  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get("/material/getAllCourses", {})
      .then((res) => {
        setCourse(res.data.data);
      })
      .catch();
  }, [courseRefresh]);

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row justify-evenly my-4">
        <button
          onClick={() => {
            setButton({
              course: !button.course,
              module: false,
              chapter: false,
              slide: false,
            });
            setActive(1);
          }}
          className={`w-11/12 md:w-1/5 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
            active === 1
              ? "bg-white text-red-1"
              : "bg-red-1 text-white hover:text-red-1 hover:bg-white"
          }`}
        >
          ADD COURSE
        </button>
        <button
          onClick={() => {
            setButton({
              course: false,
              module: !button.module,
              chapter: false,
              slide: false,
            });
            setActive(2);
          }}
          className={`w-11/12 md:w-1/5  rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
            active === 2
              ? "bg-white text-red-1"
              : "bg-red-1 text-white hover:text-red-1 hover:bg-white"
          }`}
        >
          ADD MODULE
        </button>
        <button
          onClick={() => {
            setButton({
              course: false,
              module: false,
              chapter: !button.chapter,
              slide: false,
            });
            setActive(3);
          }}
          className={`w-11/12 md:w-1/5  rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
            active === 3
              ? "bg-white text-red-1"
              : "bg-red-1 text-white hover:text-red-1 hover:bg-white"
          }`}
        >
          ADD CHAPTER
        </button>
        <button
          onClick={() => {
            setButton({
              course: false,
              module: false,
              chapter: false,
              slide: !button.slide,
            });
            setActive(4);
          }}
          className={`w-11/12 md:w-1/5 rounded-2xl p-4 text-center text-lg font-bold mx-auto my-2 border-2 border-red-1 ${
            active === 4
              ? "bg-white text-red-1"
              : "bg-red-1 text-white hover:text-red-1 hover:bg-white"
          }`}
        >
          ADD SLIDE
        </button>
      </div>
      <AddCourse
        button={button.course}
        setButton={setButton}
        setCourseRefresh={setCourseRefresh}
      />
      <AddModule button={button.module} setButton={setButton} course={course} />
      <AddChapter
        button={button.chapter}
        setButton={setButton}
        course={course}
      />
      <AddSlide button={button.slide} setButton={setButton} course={course} />
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course
        </h1>
        <h1 className="text-center lg:w-6/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course Description
        </h1>
        <h1 className="text-center lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Duration
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Created
        </h1>
      </div>
      {course?.map((c) => {
        return (
          <>
            <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
              <h1
                onClick={() => {
                  history.push(`/dashboard/admin/lms/course/${c._id}`);
                }}
                className="lg:w-3/12 flex items-center px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0 hover:bg-red-1 hover:text-white font-bold cursor-pointer"
              >
                {c?.name}
              </h1>
              <div className="flex flex-col justify-center text-center lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="text-left whitespace-pre-line">
                  {c?.description}
                </h1>
              </div>
              <div className="flex flex-col justify-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="font-bold">{c?.duration} min</h1>
              </div>

              <div className="flex flex-col items-center justify-center text-center lg:w-2/12 px-3 py-2 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                <h1>
                  {new Date(c?.createdAt).toLocaleString("en-Us", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </h1>
                <h1>
                  {new Date(c?.createdAt).toLocaleString("en-Us", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h1>
              </div>
            </div>
            <div className="block lg:hidden py-2.5"></div>
          </>
        );
      })}
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
    </div>
  );
};

export default ClassMaterial;
