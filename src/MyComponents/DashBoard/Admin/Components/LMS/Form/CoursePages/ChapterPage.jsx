import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import Alert from '../../../../../../Components/Alert';
import ProfileBar from '../../../ProfileBar';
import SideNav from '../../../SideNav';
import EditChapter from '../Course/EditChapter';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export const ChapterPage = () => {
  const { courseId, chapterId } = useParams();
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(null);
  const history = useHistory();
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const token = JSON.parse(localStorage.getItem('jwt'));
  const [chapter, setChapter] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/material/getChapter/${courseId}/${chapterId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setChapter(res.data.data);
      })
      .catch();
  }, [token, courseId, chapterId, refresh]);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <EditChapter
        show={show}
        setShow={setShow}
        setRefresh={setRefresh}
        data={chapter}
        setShowAlert={setShowAlert}
      />

      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            CHAPTER
          </h1>
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="p-2 mb-4">
              <h1 className="text-2xl text-gray-2">
                Chapter Name:
                <span className="font-bold ml-3">{chapter?.name}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Chapter Description:
                <span className="font-bold ml-3">{chapter?.description}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Chapter Duration:
                <span className="font-bold ml-3">{chapter?.duration}</span>
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
                    .delete(`/material/deleteChapter/${chapter?._id}`, {
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
                        message: 'Error deleting chapter',
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
          {chapter?.slides?.map((c) => {
            return (
              <>
                <div className="text-gray-2 rounded-xl border-2 flex p-4 mb-2 w-full justify-end items-center">
                  <div className="flex w-full">
                    {c.text ? (
                      <>
                        <img
                          className="w-40"
                          src={`http://localhost:8000/api/material/getSlideImg/${courseId}/${chapterId}/${c._id}`}
                          alt=""
                        />
                        <div className="ml-4">
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {c?.title}
                            </span>
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {c?.text}
                            </span>
                          </h1>
                        </div>
                      </>
                    ) : null}
                    {c.question ? (
                      <>
                        <div className="">
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              Question- {c?.question}
                            </span>
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {'A)'}
                            </span>
                            {c?.optionA}
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {'B)'}
                            </span>
                            {c?.optionB}
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {'C)'}
                            </span>
                            {c?.optionC}
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              {'D)'}
                            </span>
                            {c?.optionD}
                          </h1>
                          <h1 className="text-xl">
                            <span className="text-gray-2 font-bold mr-3">
                              Correct Option-
                            </span>
                            {c?.correctOpt}
                          </h1>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div>
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        axiosInstance
                          .delete(
                            `/material/deleteSlide/${chapter?._id}/${c?._id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            },
                          )
                          .then((res) => {
                            setRefresh(res);
                          })
                          .catch((err) => {
                            setShowAlert({
                              show: true,
                              message: 'Error deleting slide',
                              success: false,
                            });
                          });
                      }}
                    >
                      <DeleteRoundedIcon fontSize="large" />
                    </IconButton>
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

export default ChapterPage;
