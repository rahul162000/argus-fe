import React, { useEffect, useMemo, useState } from 'react';
import Loader from 'react-loader-spinner';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../../../../helpers/TableFilter';
import Table from '../../../../../Components/reactTable';

const HistoryLMS = () => {
  const [activity, setActivity] = useState([]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    setLoading(true);
    axiosInstance
      .get(`/user-activity/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActivity(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const headCells = [
    {
      id: 'Registration',
      accessor: 'createdAt',
      Header: 'Date',
    },
    {
      accessor: 'activityDetails',
      Header: 'Description',
    },
    {
      id: 'Action On',
      accessor: 'userName',
      Header: 'Action On',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Action By',
      accessor: 'createdBy',
      Header: 'Action By',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div className="relative mt-4">
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {activity.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No user
            </p>
          ) : (
            <>
              {' '}
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
              >
                Filter
              </button>
              <Table
                data={activity}
                columns={columns}
                show={show}
                setShow={setShow}
                justList={true}
                setSelected={setSelected}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HistoryLMS;
