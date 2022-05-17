import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  getUser,
  updateUser,
} from "../../../../../context/actions/authActions/getUserAction";
import axiosInstance from "../../../../../helpers/axiosInstance";
import { Country, State, City } from "country-state-city";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const ContactDetails = ({ user }) => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = "*Required";
    }
    if (!values.province) {
      errors.province = "*Required";
    }
    if (!values.streetNumber) {
      errors.streetNumber = "*Required";
    }
    if (!values.city) {
      errors.city = "*Required";
    }
    if (!values.street) {
      errors.street = "*Required";
    }
    if (!values.postalCode) {
      errors.postalCode = "*Required";
    }
    if (!values.homePhone) {
      delete errors.homePhone;
    } else if (values.homePhone > 15 && values.homePhone < 6) {
      errors.homePhone = "Number should be in range 6-15";
    }
    if (!values.phone) {
      errors.phone = "*Required";
    } else if (values.phone > 15 && values.phone < 6) {
      errors.phone = "Number should be in range 6-15";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, setFieldValue } =
    useFormik({
      initialValues: {
        country: "",
        province: "",
        streetNumber: "",
        city: "",
        street: "",
        postalCode: "",
        suite: "",
        homePhone: "",
        phone: "",
        email: "",
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        dispatch(
          updateUser(
            resetForm,
            values,
            "Contact Details updated",
            user?.name,
            user?._id
          )
        );
      },
    });
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setCountry({ value: null, label: user?.country });
    setState({ value: null, label: user?.province });
    setCity({ value: null, label: user?.city });

    setValues({
      country: user?.country,
      province: user?.province,
      streetNumber: user?.streetNumber,
      city: user?.city,
      street: user?.street,
      postalCode: user?.postalCode,
      suite: user?.suite,
      homePhone: user?.homePhone,
      phone: user?.phone,
      email: user?.email,
    });
  }, [user, setValues]);

  let countryOptions = [];
  let stateOptions = [];
  let cityOptions = [];

  Country?.getAllCountries()?.forEach((element) => {
    countryOptions.push({ value: element?.isoCode, label: element?.name });
  });

  State?.getStatesOfCountry(country?.value)?.forEach((element) => {
    stateOptions.push({ value: element?.isoCode, label: element?.name });
  });

  City?.getCitiesOfState(country?.value, state?.value)?.forEach((element) => {
    cityOptions.push({ value: element?.isoCode, label: element?.name });
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "gray",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      border: 0,
      borderBottom: "2px solid black",
      fontWeight: 100,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2"
      >
        <div className="flex items-center mt-4 p-2 md:p-4 shadow-forms rounded-t-2xl">
          <span className="flex items-center text-red-1 text-4xl">
            <ContactMailOutlinedIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-xl md:text-3xl font-bold text-gray-3 mx-5">
            Contact Details
          </h1>
        </div>
        <div className="flex flex-col text-gray-2 font-bold placeholder-red-1 h-72 p-2 md:p-4 overflow-y-scroll z-10">
          <div className="flex flex-col">
            <label> Country</label>
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
                setFieldValue("country", selectedOption.label);
                setCountry(selectedOption);
              }}
            />

            {/* <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              {...getFieldProps("country")}
            /> */}
            {errors.country ? (
              <div className="w-full text-xs text-red-400">
                {errors.country}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> State/Province</label>
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
                setFieldValue("province", selectedOption.label);
                setState(selectedOption);
              }}
            />
            {errors.province ? (
              <div className="w-full text-xs text-red-400">
                {errors.province}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> City</label>
            <Select
              placeholder="Select City"
              className=" w-full border-0"
              options={cityOptions}
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
              value={city}
              onChange={(selectedOption) => {
                setFieldValue("city", selectedOption.label);
                setCity(selectedOption);
              }}
            />
            {errors.city ? (
              <div className="w-full text-xs text-red-400">{errors.city}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street Number</label>
            <input
              type="number"
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("streetNumber")}
            />
            {errors.streetNumber ? (
              <div className="w-full text-xs text-red-400">
                {errors.streetNumber}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street Name</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              {...getFieldProps("street")}
            />
            {errors.street ? (
              <div className="w-full text-xs text-red-400">{errors.street}</div>
            ) : null}
          </div>

          <div className="flex flex-col mt-4">
            <label> Suite (Optional)</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("suite")}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label> Postal Code</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              {...getFieldProps("postalCode")}
            />
            {errors.postalCode ? (
              <div className="w-full text-xs text-red-400">
                {errors.postalCode}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Home Phone (Optional)</label>
            <input
              type="number"
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              {...getFieldProps("homePhone")}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label> Cell Phone</label>
            <input
              type="number"
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              {...getFieldProps("phone")}
            />
            {errors.phone ? (
              <div className="w-full text-xs text-red-400">{errors.phone}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Email</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("email")}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-400">{errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="flex shadow-forms-1 z-20 rounded-b-2xl">
          <button
            type="submit"
            className=" mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
