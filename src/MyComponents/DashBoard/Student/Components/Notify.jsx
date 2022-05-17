import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../../../../argus website/PNG/IMG_0118.png";
import Message from "./Message";
import Notification from "./Notification";

function Notify({ notify, closeNotify, openNotify }) {
  const [notification, setNotification] = useState(true);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (notify === true) {
      document.addEventListener("mousedown", () => {
        closeNotify(false);
      });
    }
  }, [notify]);

  return (
    <div
      className={`z-50  w-72 sm:w-96 absolute right-4 sm:right-10 md:right-12 2xl:right-44 top-20 font-medium text-gray-3 bg-bg-card shadow-button-shadow-2 rounded-2xl ${
        notify
          ? "transition-all duration-300 opacity-100 inline-block"
          : "transition-all duration-300 opacity-0 invisible"
      }`}
    >
      <div className="bg-gray-3 flex flex-row items-center rounded-t-xl text-white text-xl">
        <button
          onClick={() => {
            openNotify();
            setNotification(true);
            setMessage(false);
          }}
          className={`w-1/2 pt-4 pb-3 ${
            notification
              ? "border-b-4 border-white"
              : "border-b-4 border-gray-3 hover:border-white"
          }`}
        >
          Notification
        </button>
        <button
          onClick={() => {
            openNotify();
            setMessage(true);
            setNotification(false);
          }}
          className={`w-1/2 pt-4 pb-3 ${
            message
              ? "border-b-4 border-white"
              : "border-b-4 border-gray-3 hover:border-white"
          }`}
        >
          Messages
        </button>
      </div>
      <div>
        <Notification notification={notification} />
        <Message message={message} />
      </div>
    </div>
  );
}

export default Notify;
