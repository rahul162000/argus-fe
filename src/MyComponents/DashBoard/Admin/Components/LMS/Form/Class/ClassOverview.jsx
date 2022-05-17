import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ClassList from './ClassList';
import { Pagination } from '@mui/material';
import Loader from 'react-loader-spinner';
import AddClass from './AddClass';
import EditClass from './EditClass';
import Alert from '../../../../../../Components/Alert';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import { useDispatch } from 'react-redux';
import { get_Class } from '../../../../../../../context/actions/lmsActions/classActions';
const ClassOverview = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [newclass, setnewclass] = useState(false);
  const classList = useSelector((state) => state.class.class);
  const loading = useSelector((state) => state.class.loading);
  const [page, setPage] = useState(1);
  const [pageData, setpageData] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedClassShow, setSelectedClassShow] = useState(null);
  const [classOptions, setClassOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [show, setShow] = useState(false);
  const [refreshClassLocation, setRefreshClassLocation] = useState(null);

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  useEffect(() => {
    if (classList.length === 0) {
      dispatch(get_Class());
    }
  }, [dispatch, classList]);

  useEffect(() => {
    setpageData(classList.slice((page - 1) * 5, page * 5));
  }, [page, classList]);

  useEffect(() => {
    axiosInstance
      .get('/constant/getAll?name=Class', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClassOptions(res.data.data);
      });
  }, [token, refreshClassLocation]);

  useEffect(() => {
    axiosInstance
      .get('/constant/getAll?name=Location', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLocationOptions(res.data.data);
      });
  }, [token, refreshClassLocation]);

  return (
    <div>
      <EditClass
        selectedClass={selectedClass}
        setShowAlert={setShowAlert}
        classOptions={classOptions}
        locationOptions={locationOptions}
        show={show}
        setShow={setShow}
      />

      {loading ? (
        <>
          <div className="w-full flex items-center justify-center">
            <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
          </div>
        </>
      ) : (
        <>
          {classList.length === 0 ? (
            <p className="w-full text-center text-2xl mt-6 font-bold text-gray-400">
              No class
            </p>
          ) : (
            <>
              {' '}
              <div className="px-1">
                {showAlert.show ? (
                  <Alert alert={showAlert} rmAlert={setShowAlert} />
                ) : null}
              </div>
              <Pagination
                className="p-1 mb-4"
                count={Math.ceil(classList.length / 5)}
                shape="rounded"
                onChange={(event, value) => {
                  setPage(value);
                  setSelectedClassShow(null);
                }}
              />
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Class
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Date
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Enrolled
                </h1>
                <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Location
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Instructor
                </h1>
                <h1 className="text-center lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Edit
                </h1>
              </div>
              {pageData.map((c, index) => {
                return (
                  <>
                    <ClassList
                      c={c}
                      setShow={setShow}
                      selectedClass={setSelectedClass}
                      selectedClassShow={selectedClassShow}
                      setSelectedClassShow={setSelectedClassShow}
                      index={index}
                    />
                    <div className="block lg:hidden py-2.5"></div>
                  </>
                );
              })}
            </>
          )}
        </>
      )}

      <div className="flex">
        <button
          onClick={() => setnewclass(!newclass)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW CLASS
        </button>
      </div>
      {newclass ? (
        <AddClass
          classOptions={classOptions}
          locationOptions={locationOptions}
          setRefreshClassLocation={setRefreshClassLocation}
        />
      ) : null}
    </div>
  );
};

export default ClassOverview;
