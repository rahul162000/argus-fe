import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearStorage } from "../../../../context/actions/authActions/setStorageAction";
import profile from "./../../../../argus website/PNG/IMG_0118.png";
import { setToken } from "../../../../context/actions/authActions/setStorageAction";
import {
  isAuthenticated,
  setUser,
} from "../../../../context/actions/authActions/getUserAction";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function ProfileBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [option, setOption] = useState(false);

  useEffect(() => {
    if (option === true) {
      document.addEventListener("mousedown", () => {
        setOption(!option);
      });
    }
  }, [option]);

  return (
    <div className="max-w-1200 mx-auto">
      <div className="pt-3 flex flex-row items-center">
        <h1 className="ml-9 text-xl sm:text-2xl text-gray-3 font-bold font-for-para">
          Hii, Admin
        </h1>
        <div className="ml-auto flex justify-around items-center">
          <div className="text-sm sm:text-xl mx-1 sm:mr-4 text-gray-3">
            {new Date().toLocaleDateString("en-GB")}
          </div>

          <button
            onClick={() => {
              setOption(!option);
            }}
            className="inline-block mx-2 sm:mx-8 2xl:mr-0 md:ml-4 bg-gray-200 hover:bg-red-1 rounded-xl p-2 text-gray-2 hover:text-white"
          >
            <PersonOutlineOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>

      <div
        className={`z-50 w-64 sm:w-72 absolute right-4 sm:right-10 md:right-12 top-20 font-medium text-gray-3 bg-bg-card shadow-button-shadow-2 rounded-2xl ${
          option
            ? "transition-all duration-300 opacity-100 inline-block"
            : "transition-all duration-300 opacity-0 invisible"
        }`}
      >
        <div className="text-gray-2 text-base font-bold bg-gray-200 rounded-xl">
          <Link to="/dashboard/admin/messages">
            <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
              <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">
                ➔
              </span>{" "}
              Manage Messages
            </h1>
          </Link>
          <Link to="/dashboard/admin/coupon">
            <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
              <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">
                ➔
              </span>{" "}
              Manage Coupons
            </h1>
          </Link>
          <Link to="/dashboard/admin/changepassword">
            <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
              <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">
                ➔
              </span>{" "}
              Change Password
            </h1>
          </Link>
          <Link to="/dashboard/admin/subscribers">
            <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
              <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">
                ➔
              </span>{" "}
              Manage Subscribers
            </h1>
          </Link>
          <Link
            onClick={() => {
              dispatch(clearStorage());
              dispatch(isAuthenticated("false"));
              dispatch(setUser({}));
              dispatch(setToken(null));
              history.push("/");
            }}
          >
            <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
              <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">
                ➔
              </span>{" "}
              Logout
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
