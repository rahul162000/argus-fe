import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import Alert from '../../../../../Components/Alert';
import Loader from 'react-loader-spinner';
import { base64StringToBlob } from 'blob-util';
import { useDispatch } from 'react-redux';
import { userActivity } from '../../../../../../context/actions/authActions/getUserAction';

const ShowDoc = ({ show, setShow, data, refreshDoc = () => {} }) => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [docData, setDocData] = useState(null);
  const [note, setNote] = useState('');
  const [refresh, setRefresh] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });
  const [b64, setB64] = useState(null);

  const [loading, setLoading] = useState(false);
  const [blob, setBlob] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?._id) {
      setLoading(true);
      axiosInstance
        .get(`/docs2/getDoc/${data?._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setDocData(res.data.data);
          setB64(Buffer.from(res?.data?.data?.data).toString('base64'));
          setBlob(
            window?.URL?.createObjectURL(
              base64StringToBlob(b64, docData?.contentType),
            ),
          );
        })
        .catch((err) => {
          setLoading(false);
          setShow(false);
        });
    }
  }, [data?._id, token, refresh, setShow, b64, docData?.contentType]);

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-11/12 lg:w-3/4 2xl:1/2 ">
        <div className="w-full flex justify-end p-0 md:p-4 relative top-0">
          <IconButton
            onClick={() => {
              setDocData(null);
              setB64(null);
              setShow(false);
            }}
          >
            <CloseRoundedIcon fontSize="medium" />
          </IconButton>
        </div>

        {loading ? (
          <div className="w-full p-10 flex items-center justify-center">
            <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
          </div>
        ) : (
          <>
            {' '}
            <div className="w-full">
              {showAlert.show ? (
                <div className="mr-16 mt-4 ml-4">
                  <Alert alert={showAlert} rmAlert={setShowAlert} />
                </div>
              ) : null}
              <div className="flex flex-col lg:flex-row w-full p-0.5 sm:p-6">
                <div className="w-full lg:w-1/2 mr-4 flex flex-col items-center justify-center">
                  <img
                    className="mb-2 h-36 sm:h-72"
                    src={`data:image/png;base64,${b64}`}
                    alt=""
                  />
                  <a
                    className="font-bold px-6 py-2 bg-red-1 text-white text-base sm:text-xl rounded-xl hover:bg-white hover:text-red-1 border-2 border-red-1"
                    download={`${docData?.name}(${docData?.userDocId}_${
                      docData?.username
                    }).${
                      docData?.contentType === 'application/pdf'
                        ? 'pdf'
                        : 'jpeg'
                    }`}
                    href={blob}
                  >
                    Download
                  </a>
                </div>
                <div className="w-full lg:w-1/2 mt-2 sm:mt-10">
                  <div className="p-2 mb-4 text-base sm:text-2xl">
                    <h1 className=" text-gray-2 ">
                      Student Id:
                      <span className="font-bold ml-3">
                        {docData?.userDocId}
                      </span>
                    </h1>
                    <h1 className=" text-gray-2">
                      Student Name:
                      <span className="font-bold ml-3">
                        {docData?.username}
                      </span>
                    </h1>
                    <h1 className=" text-gray-2">
                      Document Name:
                      <span className="font-bold ml-3">{docData?.name}</span>
                    </h1>
                    <h1 className=" text-gray-2">
                      Created At:
                      <span className="font-bold ml-3">
                        {new Date(docData?.createdAt).toDateString()}
                      </span>
                    </h1>
                    <h1 className="text-gray-2">
                      Document Status:
                      <span className="font-bold ml-3">
                        {docData?.isApproved === null
                          ? 'No Action Taken'
                          : null}
                        {docData?.isApproved === true ? 'Approved' : null}
                        {docData?.isApproved === false ? 'Disapproved' : null}
                      </span>
                    </h1>
                    {docData?.note !== '' && docData?.note !== null ? (
                      <h1 className=" text-gray-2">
                        Note:
                        <span className="font-bold ml-3">{docData?.note}</span>
                      </h1>
                    ) : null}

                    <div>
                      <input
                        type="text"
                        placeholder="Add Note"
                        className="bg-client p-3 w-full mt-4 mb-2"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />

                      <div className="flex">
                        {docData?.isApproved === true ? null : (
                          <button
                            onClick={() => {
                              axiosInstance
                                .put(
                                  `/docs2/approveDoc/${docData?._id}`,
                                  { isApproved: true, note },
                                  {
                                    headers: {
                                      Authorization: `Bearer ${token}`,
                                    },
                                  },
                                )
                                .then((res) => {
                                  dispatch(
                                    userActivity(
                                      `${docData?.name} approved`,
                                      'Admin',
                                      docData?.userId,
                                    ),
                                  );
                                  refreshDoc(res);
                                  setRefresh(res);
                                  setShowAlert({
                                    show: true,
                                    message: 'Document approved',
                                    success: true,
                                  });
                                  setNote('');
                                })
                                .catch((err) => {
                                  setShowAlert({
                                    show: true,
                                    message: 'Error approving document',
                                    success: false,
                                  });
                                });
                            }}
                            className="w-1/2 sm:w-40 font-bold py-1 sm:py-3 bg-green-1 text-white text-base sm:text-xl rounded-xl hover:bg-white hover:text-green-1 border-2 border-green-1 mr-2"
                          >
                            APPROVE
                          </button>
                        )}
                        <button
                          onClick={() => {
                            axiosInstance
                              .put(
                                `/docs2/approveDoc/${docData?._id}`,
                                { isApproved: false, note },
                                {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                },
                              )
                              .then((res) => {
                                dispatch(
                                  userActivity(
                                    `${docData?.name} disapproved`,
                                    'Admin',
                                    docData?.userId,
                                  ),
                                );
                                refreshDoc(res);
                                setRefresh(res);
                                setShowAlert({
                                  show: true,
                                  message: 'Document disapproved',
                                  success: true,
                                });
                                setNote('');
                              })
                              .catch((err) => {
                                setShowAlert({
                                  show: true,
                                  message: 'Error disapproving document',
                                  success: false,
                                });
                              });
                          }}
                          className="w-1/2 sm:w-40 font-bold py-3 bg-red-1 text-white text-base sm:text-xl rounded-xl hover:bg-white hover:text-red-1 border-2 border-red-1"
                        >
                          DISAPPROVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowDoc;
