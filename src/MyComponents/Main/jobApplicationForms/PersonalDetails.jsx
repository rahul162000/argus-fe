// We missed a page in the Apply now form.

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const PersonalDetails = ({ setFormNo, formNo, formData, setFormData }) => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  let countryOptions = [];
  let stateOptions = [];

  Country?.getAllCountries()?.forEach((element) => {
    countryOptions.push({ value: element?.isoCode, label: element?.name });
  });

  State?.getStatesOfCountry(country?.value)?.forEach((element) => {
    stateOptions.push({ value: element?.isoCode, label: element?.name });
  });

  // useEffect(() => {
  //   setCountry({ value: null, label: formData?.country });
  //   setState({ value: null, label: formData?.state });

  // }, [formData?.country, formData?.state]);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      fontWeight: 100,
      backgroundColor: "white",
      borderRadius: 10,
      padding: "15px 8px",
      color: "gray",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="p-2">
      <div className="w-full h-96 overflow-y-scroll ">
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">
              <span className="text-red-1">*</span>First Name
            </label>
            <input
              type="text"
              placeholder="Enter firstname"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
            {!formData.firstname ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">Last Name</label>
            <input
              type="text"
              placeholder="Enter lastname"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2  rounded-lg"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
            {!formData.lastname ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Phone Number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {!formData.phone ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2  rounded-lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {!formData.email ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Country</label>
            <Select
              placeholder="Select Country"
              className=" w-full border-0"
              options={countryOptions}
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#BA0913",
                },
              })}
              value={country}
              onChange={(selectedOption) => {
                setFormData({ ...formData, country: selectedOption.label });
                setCountry(selectedOption);
              }}
            />
            {!formData.country ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">State/Province</label>
            <Select
              placeholder="Select State/Province"
              className=" w-full border-0"
              options={stateOptions}
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#BA0913",
                },
              })}
              value={state}
              onChange={(selectedOption) => {
                setFormData({ ...formData, state: selectedOption.label });
                setState(selectedOption);
              }}
            />
            {!formData.state ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Address</label>
            <input
              type="address"
              placeholder="Enter address"
              className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            {!formData.address ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full px-10 flex my-0.5 lg:my-6 ">
        <button className="flex-1 invisible mr-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl  hover:shadow-button-inner-1">
          BACK
        </button>
        <button
          onClick={() => {
            formData.firstname === "" ||
            formData.lastname === "" ||
            formData.phone === "" ||
            formData.email === "" ||
            formData.country === "" ||
            formData.address === "" ||
            formData?.country === "" ||
            formData?.state === ""
              ? setFormNo(4)
              : setFormNo(3);
          }}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl  hover:shadow-button-inner-1"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
