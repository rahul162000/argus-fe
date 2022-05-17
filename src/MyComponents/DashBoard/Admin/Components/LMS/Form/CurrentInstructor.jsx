import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../../../context/actions/lmsActions/userAction';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../../../../helpers/TableFilter';
import Alert from '../../../../../Components/Alert';
import InsTable from '../../../../../Components/insTable';

const CurrentInstructor = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const instructor = useSelector((state) => state.users.instructors);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const dispatch = useDispatch();

  instructor.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = '';
      }
    }
  });

  const headCells = [
    {
      id: 'Instructor ID',
      accessor: 'docId',
      Header: 'Instructor ID',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      accessor: 'name',
      Header: 'Instructor Name',
    },
    {
      accessor: 'phone',
      Header: 'Phone No.',
    },
    {
      id: 'Registration',
      accessor: 'createdAt',
      Header: 'Registration',
    },
    {
      id: 'City',
      accessor: 'city',
      Header: 'City',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Country',
      accessor: 'country',
      Header: 'Country',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Province',
      accessor: 'province',
      Header: 'Province',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Gender',
      accessor: 'gender',
      Header: 'Gender',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Action',
      accessor: 'Action',
      Header: 'Action',
    },
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}

      <div className="relative mt-4">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
        >
          Filter
        </button>
        <InsTable
          data={instructor}
          columns={columns}
          show={show}
          setShow={setShow}
          justList={true}
          setSelected={setSelected}
          func={(userId) => {
            axiosInstance
              .put(
                `/user/updateRole/${userId}`,
                { role: 1 },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              )
              .then(() => {
                setShowAlert({
                  show: true,
                  message: 'Deleted Successfully',
                  success: true,
                });
                dispatch(getUsers());
              })
              .catch((err) => {
                setShowAlert({
                  show: true,
                  message: 'Error deleting instructor',
                  success: false,
                });
              });
          }}
          text="DELETE"
        />
      </div>
    </div>
  );
};

export default CurrentInstructor;
