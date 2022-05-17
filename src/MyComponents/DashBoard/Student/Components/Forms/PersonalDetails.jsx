import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../../context/actions/authActions/getUserAction";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const PersonalDetails = ({ user }) => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.gender) {
      errors.gender = "*Required";
    }
    if (!values.weight) {
      errors.weight = "*Required";
    }
    if (!values.height) {
      errors.height = "*Required";
    }
    if (!values.eyeColor) {
      errors.eyeColor = "*Required";
    }
    if (!values.hairColor) {
      errors.hairColor = "*Required";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, values } = useFormik({
    initialValues: {
      gender: "",
      weight: "",
      height: "",
      eyeColor: "",
      hairColor: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(
        updateUser(
          resetForm,
          values,
          "Personal Details updated",
          user?.name,
          user?._id
        )
      );
    },
  });

  useEffect(() => {
    setValues({
      name: user?.name,
      lastname: user?.lastname,
      dateOfBirth: user?.dateOfBirth,
      gender: user?.gender,
      weight: user?.weight,
      height: user?.height,
      eyeColor: user?.eyeColor,
      hairColor: user?.hairColor,
    });
  }, [user, setValues]);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white mx-4 md:mx-8 my-4 shadow-button-shadow-2"
      >
        <div className="flex items-center mt-4 p-2 md:p-4 bg-white rounded-t-2xl shadow-forms">
          <span className="flex items-center text-red-1 text-4xl">
            <AccountBoxOutlinedIcon fontSize="inherit" />
          </span>
          <h1 className="leading-tight text-xl md:text-3xl font-bold text-gray-3 mx-5">
            Personal Details
          </h1>
        </div>

        <div className="flex flex-col text-gray-2 font-bold placeholder-red-1 h-72 p-2 md:p-4 overflow-y-scroll z-10">
          <div className="flex flex-col">
            <label> First Name (Not Updatable by student only by admin)</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              type="name"
              placeholder="Firstname Here"
              value={values?.name}
              disabled
            />
          </div>
          <div className="flex flex-col mt-4">
            <label>Last Name (Not Updatable by student only by admin)</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              type="name"
              placeholder="Lastname Here"
              value={values?.lastname}
              disabled
            />
          </div>
          <div className="flex flex-col mt-4">
            <label>
              Date of Birth (Not Updatable by student only by admin)
            </label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              type="date"
              value={values?.dateOfBirth}
              disabled
            />
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-col w-5/12">
              <label> Height (In cm)</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="180 cm"
                type="number"
                min="0"
                max="280"
                {...getFieldProps("height")}
              />
              {errors.height ? (
                <div className="w-full text-xs text-red-400">
                  {errors.height}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col w-5/12">
              <label> Weight (In lbs)</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="160 lbs"
                type="number"
                min="0"
                max="500"
                {...getFieldProps("weight")}
              />
              {errors.weight ? (
                <div className="w-full text-xs text-red-400">
                  {errors.weight}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label> Eye Color</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("eyeColor")}
            >
              <option value="" disabled selected>
                Select Eye Color
              </option>
              <option value="brown">Brown</option>
              <option value="hazel">Hazel</option>
              <option value="gray">Gray</option>
              <option value="amber">Amber</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="others">Others</option>
            </select>
            {errors.eyeColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.eyeColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Hair Color</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("hairColor")}
            >
              <option value="" disabled selected>
                Select Hair Color
              </option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="blond">Blond</option>
              <option value="red">Red</option>
              <option value="white/gray">White / Gray</option>
              <option value="others">Others</option>
            </select>
            {errors.hairColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.hairColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Gender</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("gender")}
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>

              <option value="others">Others</option>
            </select>
            {errors.gender ? (
              <div className="w-full text-xs text-red-400">{errors.gender}</div>
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

export default PersonalDetails;
