import React, { useState } from 'react';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
import Alert from '../../../../../../Components/Alert';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const ManageClassName = ({
  show,
  setShow,
  setRefreshClassLocation,
  classOptions,
  locationOptions,
}) => {
  const token = JSON.parse(localStorage.getItem('jwt'));

  const [buttons, setButtons] = useState({
    class: true,
    location: false,
  });

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const [classname, setClassname] = useState('');
  const [location, setLocation] = useState('');

  const createConstant = (e, name, text) => {
    e.preventDefault();
    axiosInstance
      .post(
        '/constant/create',
        { name, text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setRefreshClassLocation(res);
        setShowAlert({
          show: true,
          message: 'Added Successfully',
          success: true,
        });
        setClassname('');
        setLocation('');
      })
      .catch((err) => {
        setShowAlert({
          show: true,
          message: 'Error adding',
          success: false,
        });
      });
  };

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-1/2 ">
        <div className="w-full flex justify-end p-4 pb-0">
          <IconButton
            style={{ marginBottom: '0' }}
            onClick={() => setShow(false)}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => {
              setButtons({
                class: true,
                location: false,
              });
            }}
            type="submit"
            className={`my-2 w-56 mr-6 py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg ${
              buttons.class ? 'bg-white text-red-1' : 'bg-red-1 text-white'
            }`}
          >
            CLASSNAME
          </button>
          <button
            onClick={() => {
              setButtons({
                class: false,
                location: true,
              });
            }}
            type="submit"
            className={`my-2 w-56 ml-6  py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg ${
              buttons.location ? 'bg-white text-red-1' : 'bg-red-1 text-white'
            }`}
          >
            LOCATIONS
          </button>
        </div>
        <div className="mx-6 mt-4">
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}
        </div>

        {buttons.class ? (
          <div className="flex flex-wrap justify-center items-center text-lg font-bold w-full">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center my-4">
              <div className="w-full lg:w-5/12  mr-4">
                <input
                  type="text"
                  placeholder="Class Name"
                  className="bg-client p-4 w-full rounded-lg"
                  value={classname}
                  onChange={(e) => setClassname(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => {
                  createConstant(e, 'Class', classname);
                }}
                className="my-4 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
              >
                ADD CLASS
              </button>
            </div>
            <div className="w-full pb-6 max-h-96 overflow-y-scroll">
              <div className="w-full flex justify-center">
                <h1 className="text-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Class Name
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Action
                </h1>
              </div>
              {classOptions.map((c) => {
                return (
                  <div className="w-full mt-2 flex justify-center">
                    <h1 className="text-center flex items-center justify-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-semibold rounded-xl border-2  mx-1">
                      {c?.text}
                    </h1>
                    <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-semibold rounded-xl border-2  mx-1">
                      <IconButton
                        onClick={() => {
                          axiosInstance
                            .delete(`/constant/delete/${c._id}`, {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                            .then((res) => {
                              setRefreshClassLocation(res);
                              setShowAlert({
                                show: true,
                                message: 'Deleted Successfully',
                                success: true,
                              });
                            })
                            .catch((err) => {
                              setShowAlert({
                                show: true,
                                message: 'Error deleting',
                                success: false,
                              });
                            });
                        }}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {buttons.location ? (
          <div className="flex flex-wrap justify-center items-center text-lg font-bold w-full">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center my-4">
              <div className="w-full lg:w-5/12  mr-4">
                <input
                  type="text"
                  placeholder="Locations"
                  className="bg-client p-4 w-full rounded-lg"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => {
                  createConstant(e, 'Location', location);
                }}
                className="my-4 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
              >
                ADD LOCATION
              </button>
            </div>
            <div className="w-full pb-6 max-h-96 overflow-y-scroll">
              <div className="w-full flex justify-center">
                <h1 className="text-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Location Name
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Action
                </h1>
              </div>
              {locationOptions.map((l) => {
                return (
                  <div className="w-full mt-2 flex justify-center">
                    <h1 className="text-center flex items-center justify-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-semibold rounded-xl border-2  mx-1">
                      {l?.text}
                    </h1>
                    <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-semibold rounded-xl border-2  mx-1">
                      <IconButton
                        onClick={() => {
                          axiosInstance
                            .delete(`/constant/delete/${l._id}`, {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                            .then((res) => {
                              setRefreshClassLocation(res);
                              setShowAlert({
                                show: true,
                                message: 'Deleted Successfully',
                                success: true,
                              });
                            })
                            .catch((err) => {
                              setShowAlert({
                                show: true,
                                message: 'Error deleting',
                                success: false,
                              });
                            });
                        }}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ManageClassName;
