import React, { useEffect, useRef, useState } from "react";
import { Button, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useParams } from "react-router";
import axiosInstance from "../../../helpers/axiosInstance";
import Slider from "react-slick";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { API } from "../../../api";
import Countdown from "react-countdown";
import MCQ from "./MCQ";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getProgress,
  updateChapter,
  updateCompletedChapter,
  updateCompletedModule,
  updateModule,
  updateTimestamp,
} from "../../../context/actions/userActions";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <IconButton
        onClick={() => {
          window.speechSynthesis.cancel();
          onClick();
        }}
        style={{marginLeft:"auto"}}
      >
        <NavigateNextRoundedIcon color="black" style={{ fontSize: "60px" }} />
      </IconButton>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        color: "black",
        left: "-60px",
      }}
    >
      <IconButton
        onClick={() => {
          window.speechSynthesis.cancel();
          onClick();
        }}
        style={{marginRight:"auto"}}
      >
        <NavigateBeforeRoundedIcon color="black" style={{ fontSize: "60px" }} />
      </IconButton>
    </div>
  );
}

const ChapterContent = ({ show, setShow, currentChapter, chapter, index }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const { courseId, nextModule, moduleId } = useParams();
  const dispatch = useDispatch();

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const progress = useSelector((state) => state.progress.progress);
  const current = useSelector((state) => state.progress.current);

  useEffect(() => {
    if (currentChapter?._id) {
      setLoading(true);
      axiosInstance
        .get(`/material/getChapter/${courseId}/${currentChapter?._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setSlides(res.data.data.slides);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [token, courseId, currentChapter?._id]);

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "350px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "200px",
          arrows: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: "170px",
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          arrows: false,
        },
      },
    ],
  };

  const time = new Date(Date.now() + current?.currentChapterTimestamp * 60000);
  const synthRef = useRef(window.speechSynthesis);

  const countDownRef = useRef();
  if (show) {
    countDownRef?.current?.api?.start();
  }

  const renderer = ({ seconds, hours, minutes, completed }) => {
    return (
      <span className="text-2xl font-bold text-gray-2">
        {hours !== 0 ? (hours < 10 ? "0" + hours : hours) + " :" : null}{" "}
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    );
  };

  if (!synthRef.current.pending) {
    synthRef.current.cancel();
  }

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white flex flex-col items-center rounded-lg w-11/12 lg:w-3/4 h-5/6 lg:h-3/4 relative">
        <div className="w-full flex justify-end px-2">
          <IconButton
            onClick={() => {
              setShow(false);
              setSlides([]);
              countDownRef?.current?.api?.stop();
              setCompleted(false);
              dispatch(getProgress());
              synthRef.current.cancel();
            }}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        {completed ? (
          <div className="text-2xl font-bold text-gray-2 w-full text-center ">
            Chapter Completed!!!
          </div>
        ) : null}
        {current?.completedChapters?.some(
          (chapter) =>
            chapter.chapterId === currentChapter?._id ||
            current?.currentChapter.chapterId === null
        ) ? null : (
          <Countdown
            ref={countDownRef}
            renderer={renderer}
            date={time}
            autoStart={false}
            onTick={({ minutes, hours, seconds }) => {
              if (seconds === 0) {
                if (hours !== 0) {
                  dispatch(
                    updateTimestamp({
                      time: hours * 60 + minutes,
                      id: current?._id,
                    })
                  );
                } else {
                  dispatch(
                    updateTimestamp({ time: minutes, id: current?._id })
                  );
                }
              }
            }}
            intervalDelay={1000}
            onStart={() => {
              console.log("Timer started");
            }}
            onStop={() => {
              console.log("Timer stopped");
            }}
            onComplete={() => {
              if (index === chapter?.length - 1) {
                dispatch(
                  updateCompletedChapter({
                    chapterId: currentChapter?._id,
                    id: current?._id,
                  })
                );
                dispatch(
                  updateCompletedModule({
                    moduleId: moduleId,
                    id: current?._id,
                  })
                );
                dispatch(
                  updateModule({ moduleId: nextModule, id: current?._id })
                );
              } else {
                dispatch(
                  updateChapter({
                    chapterId: chapter[index + 1]?._id,
                    duration: chapter[index + 1]?.duration,
                    id: current?._id,
                  })
                );
                dispatch(
                  updateCompletedChapter({
                    chapterId: currentChapter?._id,
                    id: current?._id,
                  })
                );
              }
              setCompleted(true);
            }}
          />
        )}
        <div className="w-full">
          <Slider prevArrow nextArrow {...settings} className="w-full">
            {slides.map((data) => {
              let utterThis;
              if (data?.title) {
                let voices = synthRef.current.getVoices();
                utterThis = new SpeechSynthesisUtterance(
                  data?.title + data?.text
                );
                utterThis.voice = voices[0];
                utterThis.rate = 0.8;
              }
              return (
                <div
                  key={data._id}
                  className="p-6 flex flex-row justify-center items-center"
                >
                  {data?.question === null ? (
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 h-full flex items-center justify-center mb-2.5">
                          <img
                            className="w-32 lg:w-full"
                            src={`${API}/material/getSlideImg/${courseId}/${currentChapter?._id}/${data?._id}`}
                            alt=""
                          />
                        </div>
                        <div className="lg:w-1/2 h-60 lg:h-96 overflow-y-scroll lg:pl-4">
                          <h1>{data?.title}</h1>
                          <p className="whitespace-pre-line">{data?.text}</p>
                        </div>
                      </div>
                      <div>
                        <IconButton
                          onClick={() => {
                            if (
                              synthRef.current.paused &&
                              synthRef.current.speaking
                            ) {
                              console.log(synthRef.current);
                              synthRef.current.resume();
                            } else {
                              console.log(synthRef.current);
                              synthRef.current.cancel();
                              synthRef.current.speak(utterThis);
                            }
                          }}
                        >
                          <PlayArrowRoundedIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            if (
                              synthRef.current.speaking &&
                              !synthRef.current.paused
                            ) {
                              synthRef.current.pause();
                              console.log(synthRef.current);
                            }
                          }}
                        >
                          <PauseRoundedIcon />
                        </IconButton>
                      </div>
                    </div>
                  ) : (
                    <MCQ data={data} />
                  )}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
