import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { API } from '../../../../../api';
import {
  deleteEOM,
  setupdateeom,
} from '../../../../../context/actions/adminActions/eomAction';
import Loader from 'react-loader-spinner';

export const EmpOfMonTable = () => {
  const dispatch = useDispatch();
  const eom = useSelector((state) => state.eom.eomAdmin);
  const loading = useSelector((state) => state.eom.loading);
  const deleteloading = useSelector((state) => state.eom.deleteloading);
  const [deleteId, setdeleteId] = useState(null);
  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      {/* Card of table */}
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {eom.map((data) => {
            let skills;
            if (data?.skills) {
              skills = data?.skills[0].split(',');
            }
            return (
              <div
                key={data._id}
                className="flex flex-col md:flex-row border-2 text-lg items-center"
              >
                <div className="flex flex-col items-center text-center w-full md:w-2/12">
                  <img
                    src={
                      `${API}/eom/get-photo/empImage-${data._id}?` +
                      new Date().getTime()
                    }
                    alt=""
                    className="w-24 h-24 rounded-full p-2"
                  />
                  <h1 className="px-3 py-1 text-red-1 font-semibold">
                    {data.empName}
                  </h1>
                </div>
                <div className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
                  <h1 className="font-medium text-xl">{data.empDesc}</h1>
                  <p className="text-base">Skills : {skills.toString()}</p>
                </div>
                <div className="flex flex-col items-center mx-auto">
                  <button
                    onClick={() => {
                      dispatch(deleteEOM(data._id));
                      setdeleteId(data._id);
                    }}
                    className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
                  >
                    {deleteloading && deleteId === data._id ? (
                      <div className="w-full flex items-center justify-center">
                        <Loader
                          type="ThreeDots"
                          color="white"
                          height={30}
                          width={30}
                        />
                      </div>
                    ) : (
                      'Delete'
                    )}
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setupdateeom({ state: true, data: data }));
                    }}
                    className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-blue-400 hover:bg-blue-100 hover:border-blue-400"
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
