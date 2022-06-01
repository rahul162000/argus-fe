import React, { useEffect, useMemo, useState } from 'react';
import SideNav from './Components/SideNav';
import ProfileBar from './Components/ProfileBar';
import Table from '../../Components/reactTable';
import axiosInstance from '../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../helpers/TableFilter';
import { Pagination } from '@mui/material';

export default function ContactFormMessage() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/contact-user/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        setMessages(
          res.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          ),
        ),
      );
  }, []);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-16 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-10/12 sm:w-10/12 mx-auto">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto my-8 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            MESSAGES
          </h1>
          <div className="relative">
            <Pagination
              className="p-1 mb-4"
              count={Math.ceil(messages.length / 5)}
              shape="rounded"
              onChange={(event, value) => {
                setPage(value);
              }}
            />
            <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
              <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Name
              </h1>
              <h1 className="text-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Messages
              </h1>
              <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Phone No.
              </h1>
              <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Sent On
              </h1>
            </div>
            {messages.slice((page - 1) * 5, page * 5).map((b, index) => {
              return (
                <div className="flex flex-col lg:flex-row text-base xl:text-lg items-stretch mb-6 lg:mb-2 border-2 lg:border-0 rounded-xl">
                  <h1 className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    {b?.name}
                  </h1>
                  <h1 className="flex flex-col justify-center text-center lg:w-5/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    {b?.message}
                  </h1>
                  <h1 className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    {b?.phoneNumber}
                  </h1>
                  <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    <h1 className="">
                      {new Date(b?.createdAt).toDateString()}
                    </h1>
                    <h1 className="font-bold">
                      {new Date(b?.createdAt).toLocaleString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
