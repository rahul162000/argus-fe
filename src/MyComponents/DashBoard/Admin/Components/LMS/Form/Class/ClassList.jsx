import React from 'react';
import ClassStudents from './ClassStudents';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
const ClassList = ({
  c,
  setShow,
  selectedClass,
  selectedClassShow,
  setSelectedClassShow,
  index,
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center items-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">{c?.docId}</h1>
          <h1 className="text-left">{c?.classname}</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">
            {new Date(c?.date).toLocaleString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </h1>
        </div>
        <div
          onClick={() => {
            if (selectedClassShow === index) {
              setSelectedClassShow(null);
            } else {
              setSelectedClassShow(index);
            }
          }}
          className={`${
            selectedClassShow === index
              ? 'bg-red-1 text-white'
              : 'bg-white text-gray-2'
          } flex flex-col cursor-pointer justify-center text-center lg:w-2/12 px-3 py-3  rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg hover:bg-red-1 hover:text-white font-bold`}
        >
          <h1 className="">
            {c?.students?.length}/{c?.noOfSpots}
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{c?.location}</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>{c?.instructorName}</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <IconButton
            onClick={() => {
              setShow(true);
              selectedClass(c);
            }}
          >
            <EditIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div
        className={`${
          selectedClassShow === index ? 'block' : 'hidden'
        } border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3`}
      >
        <ClassStudents c={c} />
      </div>
    </div>
  );
};

export default ClassList;
