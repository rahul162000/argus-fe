import React, { useState } from "react";

const Experience = ({
  setFormNo,
  formNo,
  formData,
  setFormData,
  submitForm,
}) => {
  const [checkBox, setCheckBox] = useState(null);

  console.log(checkBox);

  return (
    <div className="pb-2">
      <div className="w-full flex flex-col px-2 lg:px-10 mt-6">
        <label className="text-base lg:text-lg text-gray-400">
          Do you have any prior Security experience in Canada?
        </label>
        <div className="flex">
          <div
            onClick={() => setFormData({ ...formData, priorExperience: true })}
            className={`${
              formData.priorExperience
                ? "bg-red-1 text-white"
                : "bg-white text-gray-400"
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mt-2 w-full rounded-lg`}
          >
            YES
          </div>
          <div
            onClick={() => setFormData({ ...formData, priorExperience: false })}
            className={`${
              formData.priorExperience === false
                ? "bg-red-1 text-white"
                : "bg-white text-gray-400"
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 ml-2 mt-2 w-full rounded-lg`}
          >
            NO
          </div>
        </div>
        {formData.priorExperience === null ? (
          <div className="w-full text-xs text-red-400 mt-1">*Required</div>
        ) : null}
      </div>

      <div className="w-full flex px-2 lg:px-10 mt-6">
        <div className="w-full mr-2">
          <label className="text-base lg:text-lg text-gray-400">
            Number of years of experience?
          </label>
          <input
            type="number"
            placeholder="Years of experience"
            className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
            value={formData.yearsOfExp}
            onChange={(e) =>
              setFormData({ ...formData, yearsOfExp: e.target.value })
            }
          />
          {!formData.yearsOfExp ? (
            <div className="w-full text-xs text-red-400 mt-1">*Required</div>
          ) : null}
        </div>
      </div>
      <div className="w-full flex px-2 lg:px-10 mt-6">
        <div className="w-full flex items-center">
          <input
            type="checkbox"
            className="w-12 lg:w-4 h-12 lg:h-10"
            value={checkBox}
            onChange={(e) => setCheckBox(e.target.checked)}
          />
          <p className="text-gray-2 ml-2">
            <span className="text-red-1">*</span> By checking this box I affirm
            that all the information provided is true to the best of my
            knowledge.
          </p>
        </div>
      </div>
      <div className="w-full px-10 flex mt-6 ">
        <button
          onClick={() => setFormNo(2)}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
        >
          BACK
        </button>
        <button
          onClick={(e) => {
            if (checkBox) {
              {
                formData.yearsOfExp === "" || formData.priorExperience === ""
                  ? alert("Fill Form")
                  : submitForm(e);
              }
            }
          }}
          className={` ${
            checkBox ? "hover:text-red-1 hover:bg-white" : "opacity-40"
          } flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg  border-4 border-double  border-red-1   text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1`}
        >
          FINISH
        </button>
      </div>
    </div>
  );
};

export default Experience;
