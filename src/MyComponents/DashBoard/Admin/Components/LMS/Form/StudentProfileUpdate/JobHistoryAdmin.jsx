import React from 'react';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import { IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import { useDispatch } from 'react-redux';
import { userActivity } from '../../../../../../../context/actions/authActions/getUserAction';

const JobHistory = ({ user, setShow, setRefreshData }) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('jwt'));

  const deleteRecord = (id) => {
    axiosInstance
      .delete(`/user/deleteJobHistoryAdmin/${user?._id}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(userActivity('Job Record Deleted', 'Admin', user?._id));
        setRefreshData(res);
      })
      .catch((err) => {});
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2">
        <div className="flex items-center mt-4 p-2 md:p-4 shadow-forms rounded-t-2xl">
          <span className="flex items-center text-red-1 text-4xl">
            <RestorePageOutlinedIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            Job History
          </h1>
        </div>
        {user?.employmentRecord?.length === 0 ? (
          <p className="w-full text-center text-xl font-bold text-gray-400">
            Add employment record
          </p>
        ) : (
          <>
            <div className="flex flex-col text-gray-2 font-bold placeholder-red-1 h-72 p-2 md:p-4 overflow-y-scroll z-10">
              {user?.employmentRecord?.map((m, index) => {
                return (
                  <form className="flex flex-col text-gray-2 font-bold mb-4">
                    <div className="w-full flex justify-between">
                      <label className="text-red-1">#{index + 1}</label>
                      <IconButton
                        onClick={() => {
                          deleteRecord(m?._id);
                        }}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </div>
                    <div className="flex flex-col">
                      <label> Category</label>
                      <input
                        disabled
                        className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                        value={m?.category}
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label> Company Name</label>
                      <input
                        disabled
                        className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                        value={m?.companyName}
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label> Address</label>
                      <input
                        disabled
                        className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                        value={m?.companyAddress}
                      />
                    </div>
                    <div className="flex flex-col mt-4 ">
                      <label> Employment Duration</label>
                      <div className="w-full flex">
                        <input
                          disabled
                          className="mr-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                          placeholder="from"
                          type="date"
                          value={m?.employeeDurationFrom}
                        />
                        <label> To</label>
                        <input
                          disabled
                          className="ml-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                          placeholder="to"
                          type="date"
                          value={m?.employeeDurationTo}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-4">
                      <label> Reason for Leaving</label>
                      <input
                        disabled
                        className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                        value={m?.reasonForLeaving}
                      />
                    </div>
                  </form>
                );
              })}
            </div>
          </>
        )}
        <div className="w-full flex justify-center">
          <button
            onClick={() => setShow(true)}
            className="mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
          >
            {user?.employmentRecord?.length === 0 ? 'Add' : 'Add More +'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
