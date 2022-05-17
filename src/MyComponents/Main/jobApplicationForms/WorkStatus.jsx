import React from "react";

const WorkStatus = ({ setFormNo, formNo, formData, setFormData }) => {
  return (
    <div className="p-2">
      <div className="w-full h-96 overflow-y-scroll ">
        <div className="w-full flex flex-col px-2 lg:px-10">
          <label className="text-gray-400">
            Are you Eligible to Work in Canada?
          </label>
          <div className="flex">
            <div
              onClick={() =>
                setFormData({ ...formData, elegibleToWorkInCanada: true })
              }
              className={`${
                formData.elegibleToWorkInCanada
                  ? "bg-red-1 text-white"
                  : "bg-white text-gray-400"
              }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mr-2 mt-2 w-full rounded-lg`}
            >
              YES
            </div>
            <div
              onClick={() =>
                setFormData({ ...formData, elegibleToWorkInCanada: false })
              }
              className={`${
                formData.elegibleToWorkInCanada === false
                  ? "bg-red-1 text-white"
                  : "bg-white text-gray-400"
              }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 ml-2 mt-2 w-full rounded-lg`}
            >
              NO
            </div>
          </div>
          {!formData.elegibleToWorkInCanada ? (
            <div className="w-full text-xs text-red-400 mt-1">*Required</div>
          ) : null}
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 mt-6">
          <div className="lg:mr-2 flex-1">
            <label className="text-base text-gray-400">
              Type of Eligibility
            </label>
            <select
              className="p-5 mt-2 w-full focus:outline-none ring-2 bg-white ring-white focus:ring-gray-2 rounded-lg "
              value={formData.eligibilityType}
              onChange={(e) =>
                setFormData({ ...formData, eligibilityType: e.target.value })
              }
            >
              <option selected disabled value={""}>
                Select eligibility
              </option>
              <option value="Citizen">Citizen</option>
              <option value="Permanent Resident">Permanent Resident</option>
              <option value="Worker">Worker</option>
              <option value="Student">Student</option>
            </select>
            {!formData.eligibilityType ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="flex flex-col lg:ml-2">
            <label className="text-base text-gray-400">
              Do you have a valid security guard license?
            </label>
            <div className="flex">
              <div
                onClick={() =>
                  setFormData({ ...formData, validSecurityGuardLicence: true })
                }
                className={`${
                  formData.validSecurityGuardLicence
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-center p-5 mr-2 mt-2 w-full rounded-lg`}
              >
                YES
              </div>
              <div
                onClick={() =>
                  setFormData({ ...formData, validSecurityGuardLicence: false })
                }
                className={`${
                  formData.validSecurityGuardLicence === false
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-center p-5 ml-2 mt-2 w-full rounded-lg`}
              >
                NO
              </div>
            </div>
            {formData.validSecurityGuardLicence === null ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 mt-6">
          <div className="lg:mr-2 flex-1">
            <label className="text-base text-gray-400">
              Position Applying For
            </label>
            <select
              className="p-5 mt-2 w-full focus:outline-none ring-2 bg-white ring-white focus:ring-gray-2 rounded-lg "
              value={formData.applyingFor}
              onChange={(e) =>
                setFormData({ ...formData, applyingFor: e.target.value })
              }
            >
              <option selected disabled value={""}>
                Select Position Applying For
              </option>
              <option value="test">Test</option>
              <option value="test">Test</option>
              <option value="test">Test</option>
              <option value="test">Test</option>
            </select>
            {!formData.applyingFor ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 mt-6">
          <div className="mr-2 flex-1">
            <label className="text-base text-gray-400">
              Security Guard License Number
            </label>
            <input
              type="text"
              placeholder="License number"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.licenceNo}
              onChange={(e) =>
                setFormData({ ...formData, licenceNo: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col flex-1 lg:ml-2 mt-6 lg:mt-0">
            <label className="text-base text-gray-400">
              Do you own a vehicle?
            </label>
            <div className="flex">
              <div
                onClick={() => setFormData({ ...formData, canDrive: true })}
                className={`${
                  formData.canDrive
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mr-2 mt-2 w-full rounded-lg`}
              >
                YES
              </div>
              <div
                onClick={() => setFormData({ ...formData, canDrive: false })}
                className={`${
                  formData.canDrive === false
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mr-2 mt-2 w-full rounded-lg`}
              >
                NO
              </div>
            </div>
            {formData.canDrive === null ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full px-10 flex my-6 ">
        <button
          onClick={() => setFormNo(4)}
          className="flex-1 mr-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
        >
          BACK
        </button>
        <button
          onClick={() => {
            formData.elegibleToWorkInCanada === "" ||
            formData.eligibilityType === "" ||
            formData.validSecurityGuardLicence === "" ||
            formData.licenceNo === "" ||
            formData.canDrive === "" ||
            formData.applyingFor === ""
              ? setFormNo(3)
              : setFormNo(2);
          }}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner-1"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default WorkStatus;
