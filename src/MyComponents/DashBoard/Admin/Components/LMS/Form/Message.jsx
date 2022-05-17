import { Pagination } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import Alert from "../../../../../Components/Alert";
import ProfilePicture from "./../../../../../../argus website/PNG/IMG_0118.png";
import Table from "../../../../../Components/reactTable";
import SelectColumnFilter from "../../../../../../helpers/TableFilter";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Timeout from "smart-timeout";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import Countdown from "react-countdown";

const Message = () => {
  const [messageInput, setMessageInput] = useState(false);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState([]);

  const [message, setMessage] = useState({
    subject: "",
    message: "",
  });
  const [refreshMsg, setRefreshMsg] = useState(null);
  const [msgLoading, setMsgLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const users = useSelector((state) => state.users.users);

  const timerRef = useRef();

  users.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = "";
      }
    }
  });

  const token = JSON.parse(localStorage.getItem("jwt"));
  useEffect(() => {
    setMsgLoading(true);
    axiosInstance
      .get(`/message/get-all?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMsgLoading(false);
        setNoOfPages(res?.data?.data?.pageCount);
        setMessages(res?.data?.data?.messages);
      })
      .catch((err) => {
        setMsgLoading(false);
        setShowAlert({
          show: true,
          message: "Error fetching message",
          success: false,
        });
      });
  }, [page, token, refreshMsg]);

  const headCells = [
    {
      id: "Student ID",
      accessor: "_id",
      Header: "User ID",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      accessor: "name",
      Header: "User Name",
    },
    {
      accessor: "phone",
      Header: "Phone No.",
    },
    {
      id: "Registration",
      accessor: "createdAt",
      Header: "Registration",
    },
    {
      id: "City",
      accessor: "city",
      Header: "City",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Country",
      accessor: "country",
      Header: "Country",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Province",
      accessor: "province",
      Header: "Province",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      id: "Gender",
      accessor: "gender",
      Header: "Gender",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
  ];
  const columns = useMemo(() => headCells, []);

  const sendMessage = () => {
    let recipients = [];
    selected.forEach((element) => {
      recipients.push({ userId: element.studentId });
    });
    axiosInstance
      .post(
        `/message/create`,
        {
          subject: message.subject,
          message: message.message,
          recipients,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setPage(1);
        setRefreshMsg(res);
        setMessage({ subject: "", message: "" });
        setMessageInput(false);
        setShowAlert({
          show: true,
          message: "Message added successfully",
          success: true,
        });
      })
      .catch((err) => {
        setShowAlert({
          show: true,
          message: "Error adding message",
          success: false,
        });
      });
  };

  const renderer = ({ seconds }) => {
    return <span>{seconds} sec left</span>;
  };

  const time = Date.now() + 60000;

  return (
    <div>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}

      <div className="flex">
        <button
          onClick={() => setMessageInput(!messageInput)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW MESSAGE
        </button>
      </div>
      <div className={messageInput ? "block" : "hidden"}>
        <div className="flex flex-wrap justify-center items-center text-lg font-bold">
          <input
            type="text"
            placeholder="Subject Line"
            className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:my-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            value={message.subject}
            onChange={(e) => {
              setMessage({ ...message, subject: e.target.value });
            }}
          />
          <textarea
            type="textarea"
            placeholder="Message"
            className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-40 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            value={message.message}
            onChange={(e) => {
              setMessage({ ...message, message: e.target.value });
            }}
          />
          <div className="w-full border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3 pb-4 lg:mx-10">
            <div className="relative w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowFilter(!showFilter);
                }}
                className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
              >
                Filter
              </button>
              <Table
                data={users}
                columns={columns}
                show={showFilter}
                setShow={setShowFilter}
                justList={false}
                setSelected={setSelected}
              />
            </div>
          </div>
          <button
            onClick={() => {
              if (started) {
                timerRef?.current?.api?.stop();
                setStarted(false);
              } else {
                if (
                  !(
                    selected.length === 0 ||
                    message.subject === "" ||
                    message.message === ""
                  )
                ) {
                  timerRef?.current?.api?.start();
                  setStarted(true);
                } else {
                  setShowAlert({
                    show: true,
                    message: "Select all fields",
                    success: false,
                  });
                }
              }
            }}
            className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            {started ? (
              <Countdown
                ref={timerRef}
                renderer={renderer}
                date={new Date(time)}
                onComplete={() => {
                  sendMessage();
                  setStarted(false);
                }}
              />
            ) : (
              "ADD MESSAGE"
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold my-4">Message Board</h1>
        <Pagination
          count={noOfPages}
          shape="rounded"
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </div>
      {msgLoading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {messages.map((m) => {
            return (
              <div className="border-b-3 border-client text-lg py-2 px-4 leading-snug text-gray-2 mb-4">
                <div className="flex justify-between">
                  <div className="flex my-2">
                    <img
                      className="w-12 h-12 mr-3 rounded-lg"
                      src={ProfilePicture}
                      alt=""
                    />
                    <div className="border-3 border-white px-2 w-full rounded-lg">
                      <div className="block mb-1 font-bold">{m.userName}</div>
                      <div className="block mb-1 text-xs">{m?.position}</div>
                    </div>
                  </div>
                  <div>
                    <IconButton
                      onClick={() => {
                        axiosInstance
                          .delete(`/message/delete/${m._id}`, {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          })
                          .then((res) => {
                            setShowAlert({
                              show: true,
                              message: "Message deleted successfully",
                              success: true,
                            });

                            setRefreshMsg(res);
                          })
                          .catch((err) => {
                            setShowAlert({
                              show: true,
                              message: "Error deleting message",
                              error: false,
                            });
                          });
                      }}
                    >
                      <DeleteRoundedIcon fontSize="large" />
                    </IconButton>
                  </div>
                </div>
                <div className="font-bold mt-4 mb-1.5">{m?.subject}</div>
                {m.message}
                <div className="block mb-1 text-xs font-bold text-right mt-1">
                  {new Date(m?.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Message;
