import React, { useState } from "react";
import { API } from "../../../../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteTestimonial,
  setupdatetestimonial,
} from "../../../../../context/actions/adminActions/testimonialAction";
import Loader from "react-loader-spinner";

export const TestimonialTable = () => {
  const testimonial = useSelector((state) => state.testimonial.testimonial);
  const loading = useSelector((state) => state.testimonial.loading);
  const deleteloading = useSelector((state) => state.testimonial.deleteloading);
  const dispatch = useDispatch();
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
          {" "}
          {testimonial.map((testimonial) => {
            return (
              <div
                key={testimonial._id}
                className="flex flex-col md:flex-row border-2 text-lg items-center"
              >
                <div className="flex flex-col items-center py-2 text-center w-full md:w-2/12">
                  <img
                    src={
                      `${API}/testimonal/get-photo/${testimonial._id}?` +
                      new Date().getTime()
                    }
                    alt=""
                    className="w-24 h-24 rounded-full p-1 "
                  />
                  <h1 className="px-3 text-red-1 font-bold">
                    {testimonial?.name}
                  </h1>
                  <h1 className="px-3  leading-tight">{testimonial?.role}</h1>
                </div>
                <h1 className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
                  {testimonial?.description}
                </h1>
                <div className="flex flex-col items-center mx-auto">
                  <button
                    onClick={() => {
                      dispatch(deleteTestimonial(testimonial._id));
                      setdeleteId(testimonial._id);
                    }}
                    className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
                  >
                    {deleteloading && deleteId === testimonial._id ? (
                      <div className="w-full flex items-center justify-center">
                        <Loader
                          type="ThreeDots"
                          color="white"
                          height={30}
                          width={30}
                        />
                      </div>
                    ) : (
                      "Delete"
                    )}
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        setupdatetestimonial({ state: true, data: testimonial })
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
