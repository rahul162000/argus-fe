import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { API } from '../../../../../api';
import {
  deleteClientCarousel,
  setupdateclientcarousel,
} from '../../../../../context/actions/adminActions/clientsAction';
import Loader from 'react-loader-spinner';

export const ClientTable = () => {
  const clients = useSelector((state) => state.client.clients);
  const loading = useSelector((state) => state.client.loading);
  const deleteloading = useSelector((state) => state.client.deleteloading);
  const [deleteId, setdeleteId] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="my-8 p-4 bg-white shadow-lg rounded-xl">
      {/* Card of table */}
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {clients.map((client) => {
            return (
              <div
                key={client._id}
                className="flex flex-col md:flex-row border-2 text-lg items-center"
              >
                <div className="flex flex-col items-center text-center w-full md:w-2/12">
                  <h1 className="px-3 py-1 text-red-1 font-bold">
                    {client.name}
                  </h1>
                </div>
                <div className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
                  <img
                    src={
                      `${API}/client/get-photo/${client._id}?` +
                      new Date().getTime()
                    }
                    alt=""
                    className="px-3 py-1 border-b-2 h-36 object-contain md:w-8/12 mx-auto"
                  />
                </div>
                <div className="flex flex-col items-center mx-auto">
                  <button
                    className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
                    onClick={() => {
                      dispatch(deleteClientCarousel(client._id));
                      setdeleteId(client._id);
                    }}
                  >
                    {deleteloading && deleteId === client._id ? (
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
                      dispatch(
                        setupdateclientcarousel({ state: true, data: client }),
                      );
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
