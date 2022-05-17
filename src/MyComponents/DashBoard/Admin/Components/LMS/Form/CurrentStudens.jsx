import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../../../../helpers/TableFilter';
import Table from '../../../../../Components/reactTable';

const CurrentStudens = () => {
  const students = useSelector((state) => state.users.students);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  const history = useHistory();

  students.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = '';
      }
    }
  });

  const headCells = [
    {
      id: 'Student ID',
      accessor: 'docId',
      Header: 'Student ID',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      accessor: 'name',
      Header: 'Student Name',
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
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div className="relative mt-4">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
      >
        Filter
      </button>
      <Table
        data={students}
        columns={columns}
        show={show}
        setShow={setShow}
        justList={true}
        setSelected={setSelected}
        func={(id) => {
          history.push(`/dashboard/admin/lms/student/lookup/${id}`);
        }}
      />
    </div>
  );
};

export default CurrentStudens;
