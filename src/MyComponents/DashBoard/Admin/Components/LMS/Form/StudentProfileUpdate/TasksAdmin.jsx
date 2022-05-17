import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import { docsName } from '../../../../../Student/DocsData';

const Tasks = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    setLoading(true);
    axiosInstance
      .get(`/docs2/getUserDocs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setDocs(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let arr = [];
    if (user?.employmentRecord?.length === 0) {
      arr.push(`Add employment record`);
    }
    if (!user?.jobSearch?.looking) {
      arr.push(`Add job search deatils`);
    }

    if (!user?.dateOfBirth) {
      arr.push(`Add personal details`);
    }
    if (!user?.hasCriminalRecord) {
      arr.push(`Add background details`);
    }
    if (!user?.street) {
      arr.push(`Add contact details`);
    }
    if (!user?.courses?.length === 0) {
      arr.push(`Buy a course`);
    }

    docsName.forEach((element) => {
      let doc = docs.filter((d) => d.name === element);
      if (doc.length !== 0) {
        if (doc[0].isApproved === false) {
          arr.push(`${element} doc disapproved upload again.`);
        }
      } else {
        if (element !== 'Additional Doc 1' && element !== 'Additional Doc 2')
          arr.push(`Upload ${element} doc.`);
      }
    });
    setTasks(arr);
  }, [docs, user]);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2">
        <div className="flex items-center mt-4 p-2 md:p-4 shadow-forms rounded-t-2xl">
          <span className="flex items-center text-red-1 text-4xl">
            <CheckCircleOutlineIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            To Do List
          </h1>
        </div>

        <div className="flex flex-col text-gray-2 font-bold h-90 p-2 md:p-4 overflow-y-scroll z-10">
          <div className="flex flex-wrap items-center border-b-2 border-client p-4">
            <h1 className="w-2/12">S. No. </h1>
            <p className="w-8/12">Name of the task.</p>
            <div className="w-2/12 text-center">Status</div>
          </div>
          {tasks?.map((t, index) => {
            return (
              <div className="flex flex-wrap  items-center border-b-2 border-client p-4">
                <h1 className="w-2/12">{index + 1}. </h1>
                <p className="text-gray-2 w-8/12">{t}</p>
                <div className="w-2/12 flex justify-center">
                  <CheckCircleOutlineIcon className="bg-red-1 text-white p-0.5 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex py-2 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default Tasks;
