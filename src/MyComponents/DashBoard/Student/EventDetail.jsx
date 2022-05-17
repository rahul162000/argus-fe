import { IconButton } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const EventDetail = ({ show, setShow, data }) => {
  console.log(data);

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-1/2 max-h-3/4 flex relative">
        <div className="w-full flex justify-end p-4 absolute">
          <IconButton
            onClick={() => {
              setShow(false);
            }}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="w-full">
          <div className="flex w-full p-6">
            <div className="p-2 mb-4">
              <h1 className="text-2xl text-gray-2">
                Classname:
                <span className="font-bold ml-3">{data?.title}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Location:
                <span className="font-bold ml-3">{data?.location}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Instructor:
                <span className="font-bold ml-3">{data?.instructor}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Start At:
                <span className="font-bold ml-3">
                  {new Date(data?.start).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
