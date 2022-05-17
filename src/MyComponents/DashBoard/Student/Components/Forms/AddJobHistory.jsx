import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getUser,
  userActivity,
} from "../../../../../context/actions/authActions/getUserAction";
import axiosInstance from "../../../../../helpers/axiosInstance";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const AddJobHistory = ({ show, setShow, user }) => {
  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit, errors, setValues, values } = useFormik({
    initialValues: {
      category: "",
      companyName: "",
      companyAddress: "",
      employeeDurationFrom: "",
      employeeDurationTo: "",
      reasonForLeaving: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
      axiosInstance
        .put("/user/addJobHistory", values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setShow(false);
          dispatch(getUser());
          dispatch(userActivity("Job History Added", user?.name, user?._id));
          resetForm();
        })
        .catch((err) => {});
    },
  });

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 ">
        <div className="w-full flex justify-end p-4 pb-0">
          <IconButton
            style={{ marginBottom: "0" }}
            onClick={() => setShow(false)}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="rounded-lg bg-white mx-4 md:mx-8 p-2 md:p-4 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-gray-2 font-bold"
          >
            <div className="flex flex-col">
              <label> Category</label>
              <select
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps("category")}
              >
                <option value="" disabled selected>
                  Select Industry
                </option>
                <option value="Administration, business and management">
                  Administration, business and management
                </option>
                <option value="Animals, land and environment">
                  Animals, land and environment
                </option>
                <option value="Computing and ICT">Computing and ICT</option>
                <option value="4Construction and building. ">
                  Construction and building.{" "}
                </option>
                <option value="Design, arts and crafts. Animator">
                  Design, arts and crafts. Animator
                </option>
                <option value="Education and training. Careers adviser">
                  Education and training. Careers adviser
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Financial services">Financial services</option>
                <option value="Garage services">Garage services</option>
                <option value="Hairdressing and beauty">
                  Hairdressing and beauty
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hospitality, catering and tourism">
                  Hospitality, catering and tourism
                </option>
                <option value="Legal and court services">
                  Legal and court services
                </option>
                <option value="Manufacturing and production">
                  Manufacturing and production
                </option>
                <option value="Performing arts and media">
                  Performing arts and media
                </option>
                <option value="Print and publishing, marketing and advertising">
                  Print and publishing, marketing and advertising
                </option>
                <option value="Retail and customer services">
                  Retail and customer services
                </option>
                <option value="Science, mathematics and statistics">
                  Science, mathematics and statistics
                </option>
                <option value="Security, uniformed and protective services">
                  Security, uniformed and protective services
                </option>
                <option value="Social sciences and religion">
                  Social sciences and religion
                </option>
                <option value="Social work and caring services">
                  Social work and caring services
                </option>
                <option value="Sport and leisure">Sport and leisure</option>
                <option value="Transport, distribution and logistics">
                  Transport, distribution and logistics
                </option>
                <option value="Others">Others</option>
              </select>
              {errors.category ? (
                <div className="w-full text-xs text-red-400">
                  {errors.category}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4">
              <label> Company Name</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps("companyName")}
              />
              {errors.companyName ? (
                <div className="w-full text-xs text-red-400">
                  {errors.companyName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4">
              <label> Address</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps("companyAddress")}
              />
              {errors.companyAddress ? (
                <div className="w-full text-xs text-red-400">
                  {errors.companyAddress}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mt-4 ">
              <label> Employment Duration</label>
              <div className="w-full flex">
                <input
                  className="mr-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                  placeholder="from"
                  type="date"
                  {...getFieldProps("employeeDurationFrom")}
                />
                <label> To</label>
                <input
                  className="ml-2 w-full border-b-2 border-client focus:border-red-1 focus:outline-none"
                  placeholder="to"
                  type="date"
                  {...getFieldProps("employeeDurationTo")}
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label> Reason for Leaving</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                {...getFieldProps("reasonForLeaving")}
              />
              {errors.reasonForLeaving ? (
                <div className="w-full text-xs text-red-400">
                  {errors.reasonForLeaving}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobHistory;
