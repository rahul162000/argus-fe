import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import AttendanceList from './AttendanceList';

const Attendance = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const classList = useSelector((state) => state.class.class);
  const [selectedClass, setSelectedClass] = useState(null);
  const [pageData, setpageData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [students, setStudents] = useState([]);

  let options = [];
  classList.forEach((element) => {
    options.push({
      value: element._id,
      label: element.classname + '(' + element._id + ')',
    });
  });

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/class/get/${selectedClass?.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setStudents(res.data.data.students);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [selectedClass?.value, token]);

  useEffect(() => {
    setpageData(students?.slice((page - 1) * 5, page * 5));
  }, [page, students]);

  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4 ">
          <div className="bg-client p-5 w-full lg:w-5/12 ">
            <Select
              placeholder="Select Class"
              className="w-full rounded-xl"
              options={options}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'lightgray',
                  primary: '#BA0913',
                },
              })}
              value={selectedClass}
              onChange={(selectedOption) => {
                setSelectedClass(selectedOption);
              }}
            />
          </div>
        </div>
      </form>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {pageData.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              {selectedClass === null ? 'Select class' : 'No students'}
            </p>
          ) : (
            <>
              {' '}
              <Pagination
                className="p-1 mb-4"
                count={Math.ceil(students?.length / 5)}
                shape="rounded"
                onChange={(event, value) => {
                  setPage(value);
                }}
              />
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Student ID
                </h1>
                <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Student Name
                </h1>
                <h1 className="text-center lg:w-4/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Notes
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Status
                </h1>
              </div>
              {pageData?.map((s) => {
                return (
                  <AttendanceList
                    data={s}
                    className={
                      classList.filter((f) => f._id === selectedClass?.value)[0]
                        .classname
                    }
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default Attendance;
