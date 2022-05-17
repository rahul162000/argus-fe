import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import axiosInstance from "../../../../helpers/axiosInstance";
import ProfilePicture from "./../../../../argus website/PNG/IMG_0118.png";

function Message({ message }) {
  const loading = useSelector((state) => state.notification.messageLoading);
  const messages = useSelector((state) => state.notification.messages);
  return (
    <div
      className={`rounded w-full h-96 mb-2 font-medium text-gray-3 bg-bg-card overflow-y-scroll ${
        message
          ? "transition-all duration-300 opacity-100 block"
          : "transition-all duration-300 opacity-0 hidden"
      }`}
    >
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {messages.length === 0 ? (
            <>
              {" "}
              <p className="w-full text-center text-xl font-bold text-gray-400 mt-10">
                No messages to show
              </p>
            </>
          ) : (
            <>
              {messages.map((m) => {
                return (
                  <div className="border-b-3 border-white text-sm py-2 px-4 leading-snug rounded-xl text-gray-2">
                    <div className="flex my-2">
                      <img
                        className="w-12 h-12 mr-3 rounded-lg"
                        src={ProfilePicture}
                        alt=""
                      />
                      <div className="border-3 border-white px-2 w-full rounded-lg">
                        <div className="block mb-1 font-bold">{m.userName}</div>
                      </div>
                    </div>
                    <div className="font-bold mt-4 mb-1.5">
                      Subject : {m.subject}
                    </div>
                    <p className="whitespace-pre-line">{m.message}</p>
                    <div className="text-xs font-bold text-right mt-1">
                      {new Date(m.createdAt).toLocaleDateString("en-GB")}{" "}
                      <span className="">
                        {new Date(m.createdAt).toLocaleTimeString(`en-US`, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Message;
