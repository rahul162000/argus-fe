import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import ProfileBar from "../../../ProfileBar";
import SideNav from "../../../SideNav";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import Alert from "../../../../../../Components/Alert";
import { useFormik } from "formik";

const ManageCoupons = () => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const [addCoupon, setAddCoupon] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const [deleteRefresh, setDeleteRefresh] = useState(0);

  useEffect(() => {
    axiosInstance
      .get(`/coupon/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCoupons(res.data.data);
      });
  }, [refresh, token]);

  useEffect(() => {
    if (coupons.length !== 0 && deleteRefresh === 0) {
      coupons.forEach((element) => {
        if (new Date() > new Date(element?.validity))
          axiosInstance
            .delete(`/coupon/delete/${element._id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setRefresh(res);
            });
      });
      setDeleteRefresh(1);
    }
  }, [coupons, token, deleteRefresh]);

  console.log(deleteRefresh);

  const validate = (values) => {
    const errors = {};
    if (!values.discount) {
      errors.discount = "*Required";
    }
    if (!values.validity) {
      errors.validity = "*Required";
    }
    if (!values.couponCode) {
      errors.couponCode = "*Required";
    }
    if (!values.usage) {
      errors.usage = "*Required";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setErrors, setValues, values } =
    useFormik({
      initialValues: {
        couponCode: "",
        usage: "",
        validity: "",
        discount: "",
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        axiosInstance
          .post(`/coupon/create`, values, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setAddCoupon(false);
            resetForm();
            setRefresh(res);
            setShowAlert({
              show: true,
              message: "Coupon Added Successfully",
              success: true,
            });
          })
          .catch((err) => {
            setShowAlert({
              show: true,
              message: "Error adding coupon",
              success: false,
            });
          });
      },
    });

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            COUPONS
          </h1>
          {showAlert.show ? (
            <Alert alert={showAlert} rmAlert={setShowAlert} />
          ) : null}

          {coupons.length === 0 ? (
            <>
              {" "}
              <p className="w-full text-center text-xl font-bold text-gray-400">
                No coupons
              </p>
            </>
          ) : (
            <>
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Coupon Code
                </h1>
                <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Validity
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Usage
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Discount
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Delete
                </h1>
              </div>
              {coupons.map((c) => {
                return (
                  <div className="flex flex-col lg:flex-row text-lg mb-6 rounded-xl shadow-cards lg:shadow-none">
                    <h1 className="text-center w-full flex items-center justify-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2  mx-1">
                      {c?.couponCode}
                    </h1>
                    <h1 className="text-center flex items-center justify-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2  mx-1">
                      {new Date(c?.validity).toLocaleDateString()}
                    </h1>
                    <h1 className="text-center flex items-center justify-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2  mx-1">
                      {c?.usage}
                    </h1>
                    <h1 className="text-center flex items-center justify-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2  mx-1">
                      {c?.discount}%
                    </h1>
                    <div className="text-center flex items-center justify-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2  mx-1">
                      <IconButton
                        onClick={() => {
                          axiosInstance
                            .delete(`/coupon/delete/${c._id}`, {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                            .then((res) => {
                              setRefresh(res);
                              setShowAlert({
                                show: true,
                                message: "Deleted Successfully",
                                success: true,
                              });
                            })
                            .catch((err) => {
                              setShowAlert({
                                show: true,
                                message: "Error deleting",
                                success: false,
                              });
                            });
                        }}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
          <div className="flex">
            <button
              onClick={() => setAddCoupon(!addCoupon)}
              className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
            >
              NEW COUPON
            </button>
          </div>
          <div className={addCoupon ? "block" : "hidden"}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3"
            >
              <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <div className="w-full lg:w-5/12">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                    {...getFieldProps("couponCode")}
                  />
                  {errors.couponCode ? (
                    <div className="w-full text-xs text-red-400">
                      {errors.couponCode}
                    </div>
                  ) : null}
                </div>
                <div className="w-full lg:w-5/12">
                  <input
                    type="Number"
                    placeholder="Discount Percentage"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                    {...getFieldProps("discount")}
                  />
                  {errors.discount ? (
                    <div className="w-full text-xs text-red-400">
                      {errors.discount}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <div className="w-full lg:w-5/12">
                  <input
                    type="date"
                    placeholder="Validity"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                    {...getFieldProps("validity")}
                  />
                  {errors.validity ? (
                    <div className="w-full text-xs text-red-400">
                      {errors.validity}
                    </div>
                  ) : null}
                </div>
                <div className="w-full lg:w-5/12">
                  <input
                    type="Number"
                    placeholder="Usage"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                    {...getFieldProps("usage")}
                  />
                  {errors.usage ? (
                    <div className="w-full text-xs text-red-400">
                      {errors.usage}
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
              >
                ADD COUPON
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
