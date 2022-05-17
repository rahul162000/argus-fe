import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  setCurrentCourse,
  updateChapter,
} from "../../../context/actions/userActions";
import axiosInstance from "../../../helpers/axiosInstance";
import ChapterContent from "./ChapterContent";

const Chapter = () => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const { courseId, moduleId } = useParams();

  const [chapter, setChapter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [index, setIndex] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress.progress);
  const current = useSelector((state) => state.progress.current);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/material/getModule/${courseId}/${moduleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setChapter(res.data.data.Chapters);
      })
      .catch(() => {
        setLoading(false);
        history.goBack();
      });
  }, [token, courseId, history, moduleId]);

  useEffect(() => {
    dispatch(
      setCurrentCourse(
        progress?.courses?.filter((f) => f.courseId === courseId)[0]
      )
    );
  }, [courseId, dispatch, progress?.courses]);

  useEffect(() => {
    if (current && chapter.length !== 0) {
      if (
        current?.currentChapter?.chapterId === null ||
        current?.currentChapter === null
      ) {
        if (module?.length !== 0) {
          if (current?.currentModule?.moduleId === moduleId) {
            dispatch(
              updateChapter({
                chapterId: chapter[0]?._id,
                duration: chapter[0]?.duration,
                id: current._id,
              })
            );
          }
        }
      } else if (
        current?.currentModule?.moduleId === moduleId &&
        !chapter?.some(
          (chapter) => chapter._id === current?.currentChapter?.chapterId
        )
      ) {
        dispatch(
          updateChapter({
            chapterId: chapter[0]?._id,
            duration: chapter[0]?.duration,
            id: current._id,
          })
        );
      }
    }
  }, [current, dispatch, chapter, moduleId]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <ChapterContent
        show={show}
        setShow={setShow}
        currentChapter={currentChapter}
        chapter={chapter}
        index={index}
      />
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        CHAPTERS
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {chapter.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No chapters to show
            </p>
          ) : (
            <>
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-6/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Chapter
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
              {chapter.map((c, index) => {
                let completed = false;
                let ongoing = false;
                if (
                  current?.completedChapters?.some(
                    (chapter) => chapter.chapterId === c._id
                  )
                ) {
                  completed = true;
                }
                if (current?.currentChapter?.chapterId === c._id) {
                  ongoing = true;
                }

                let startDate = null;

                if (
                  current?.completedChapters.some(
                    (chapter) => chapter.chapterId === c._id
                  )
                ) {
                  startDate = current?.completedChapters.filter(
                    (chapter) => chapter.chapterId === c._id
                  )[0].createdAt;
                } else if (current?.currentChapter?.chapterId === c._id) {
                  startDate = current?.currentChapter?.updatedAt;
                }

                return (
                  <>
                    <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
                      <div
                        onClick={() => {
                          if (completed || ongoing) {
                            setShow(true);
                            setCurrentChapter(c);
                            setIndex(index);
                          }
                        }}
                        className="lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0 hover:bg-red-1 font-bold hover:text-white cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span>{c?.name}</span>
                          <span className="font-semibold text-lg whitespace-pre-line">
                            {c?.description}
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
                        <h1 className="">
                          {completed
                            ? "100%"
                            : ongoing
                            ? `${(
                                ((c.duration -
                                  current?.currentChapterTimestamp) /
                                  c.duration) *
                                100
                              ).toFixed(1)} %`
                            : "Not started"}
                        </h1>
                      </div>
                      <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                        <h1>
                          {completed
                            ? "Completed"
                            : ongoing
                            ? "Ongoing"
                            : "Not Started"}
                        </h1>
                      </div>
                    </div>
                    <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
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

export default Chapter;
