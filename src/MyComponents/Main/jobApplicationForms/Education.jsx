import React from "react";

const Education = ({ setFormNo, formNo, formData, setFormData }) => {
  return (
    <div className="pb-2">
      <div className="w-full flex px-2 lg:px-10 items-center">
        <div className="w-full">
          <label className="text-base lg:text-lg text-gray-400">
            What is your highest level of education?
          </label>
          <select
            value={formData.highestLevelOfEducation}
            onChange={(e) =>
              setFormData({
                ...formData,
                highestLevelOfEducation: e.target.value,
              })
            }
            className="p-5 rounded-lg mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 bg-white"
          >
            <option selected disabled value={null}>
              Select education
            </option>
            <option value="None or Less Than High School">
              None or Less Than High School
            </option>
            <option value="High School Graduate">High School Graduate</option>
            <option value="Associate's degree:">
              One or Two years program in a College or a University
            </option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctoral degree">Doctoral degree</option>
            <option value="Others">Others</option>
          </select>
          {!formData.highestLevelOfEducation ? (
            <div className="w-full text-xs text-red-400 mt-1">*Required</div>
          ) : null}
        </div>
      </div>
      <div className="w-full flex flex-col px-2 lg:px-10 mt-6">
        <label className="text-lg text-gray-400">
          Did you acquire the above mentioned education in Canada?
        </label>
        <div className="flex">
          <div
            onClick={() =>
              setFormData({ ...formData, educationInCanada: true })
            }
            className={`${
              formData.educationInCanada
                ? "bg-red-1 text-white"
                : "bg-white text-gray-400"
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mt-2 w-full rounded-lg`}
          >
            YES
          </div>
          <div
            onClick={() =>
              setFormData({ ...formData, educationInCanada: false })
            }
            className={`${
              formData.educationInCanada === false
                ? "bg-red-1 text-white"
                : "bg-white text-gray-400"
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 ml-2 mt-2 w-full rounded-lg`}
          >
            NO
          </div>
        </div>
        {formData.educationInCanada === null ? (
          <div className="w-full text-xs text-red-400 mt-1">*Required</div>
        ) : null}
      </div>
      <div className="w-full px-10 flex mt-2 lg:mt-6 ">
        <button
          onClick={() => setFormNo(3)}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
        >
          BACK
        </button>
        <button
          onClick={() => {
            formData.highestLevelOfEducation === "" ||
            formData.educationInCanada === ""
              ? setFormNo(2)
              : setFormNo(1);
          }}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Education;
