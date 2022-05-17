import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compressor from 'compressorjs';
import {
  addTeam,
  setupdateteam,
  teamAlert,
  updateTeam,
} from '../../../../../context/actions/adminActions/teamAction';
import Loader from 'react-loader-spinner';
import Alert from '../../../../Components/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TeamControl() {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });
  const dispatch = useDispatch();
  const update = useSelector((state) => state.team.update);
  const teamalert = useSelector((state) => state.team.teamalert);
  const loading = useSelector((state) => state.team.addloading);
  const teamRef = useRef();

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.3,
      maxWidth: 1400,
      success: (compressedResult) => {
        setValues({ ...values, teamImg: compressedResult });
      },
    });
  };

  useEffect(() => {
    if (teamalert.success !== null) {
      if (teamalert.success) {
        setShowAlert({
          show: true,
          message: teamalert.message,
          success: true,
        });
      } else {
        setShowAlert({
          show: true,
          message: teamalert.message,
          success: false,
        });
      }
      dispatch(teamAlert({ success: null, message: '' }));
    }
  }, [dispatch, teamalert]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = '*Required';
    }
    if (!values.description) {
      errors.description = '*Required';
    }
    if (!values.role) {
      errors.role = '*Required';
    }
    if (!update.state) {
      if (!values.teamImg) {
        errors.teamImg = '*Required';
      }
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm, values } =
    useFormik({
      initialValues: {
        name: '',
        description: '',
        role: '',
        teamImg: null,
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        teamRef.current.value = '';
        resetForm();
        const formdata = new FormData();
        formdata.append('name', values.name);
        formdata.append('role', values.role);
        formdata.append('description', values.description);
        formdata.append('photo', values.teamImg);
        if (update.state) {
          dispatch(updateTeam(formdata, update.data._id));
        } else {
          dispatch(addTeam(formdata));
        }
      },
    });

  useEffect(() => {
    if (update.state) {
      setValues({
        name: update.data.name,
        description: update.data.description,
        role: update.data.role,
        teamImg: null,
      });
    }
  }, [setValues, update]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center py-4 px-2 sm:px-4 md:px-8 text-lg text-gray-3"
    >
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}

      <input
        className={`w-full ${
          errors.name ? 'border-b-2 border-red-600' : 'border-b border-client'
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Name of the Team Member"
        {...getFieldProps('name')}
      />
      {errors.name ? (
        <div className="w-full text-xs text-red-400">{errors.name}</div>
      ) : null}
      <input
        className={`w-full ${
          errors.role ? 'border-b-2 border-red-600' : 'border-b border-client'
        } focus:outline-none mt-4 p-1`}
        type="text"
        placeholder="Role of the Team Member"
        {...getFieldProps('role')}
      />
      {errors.role ? (
        <div className="w-full text-xs text-red-400">{errors.role}</div>
      ) : null}
      <textarea
        className={`w-full ${
          errors.description
            ? 'border-b-2 border-red-600'
            : 'border-b border-client'
        } focus:outline-none mt-4 p-1`}
        type="text"
        rows="3"
        placeholder="Description of Team Member"
        {...getFieldProps('description')}
      />
      {errors.description ? (
        <div className="w-full text-xs text-red-400">{errors.description}</div>
      ) : null}
      <div className="flex flex-col items-center mb-4">
        <lable className="text-gray-2 mt-4">
          Upload Image of the Team Member
        </lable>
        <div>
          <input
            className="p-4 mt- border border-client"
            type="file"
            accept="image/png, image/jpeg"
            ref={teamRef}
            onChange={(e) => handleCompressedUpload(e)}
          />
          {values.teamImg ? (
            <button
              onClick={() => {
                teamRef.current.value = '';
                setValues({ ...values, teamImg: null });
              }}
            >
              <FontAwesomeIcon icon="window-close" className="text-2xl ml-2" />
            </button>
          ) : null}
        </div>
        {errors.teamImg ? (
          <div className="w-full text-xs text-red-400">{errors.teamImg}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
      >
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loader type="TailSpin" color="lightgray" height={40} width={40} />
          </div>
        ) : (
          <> {update.state ? 'UPDATE' : 'ADD'}</>
        )}
      </button>
      {update.state ? (
        <button
          className="my-2 p-4 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          onClick={() => {
            teamRef.current.value = '';
            resetForm();
            dispatch(setupdateteam({ state: false, data: null }));
          }}
        >
          ADD NEW
        </button>
      ) : null}
    </form>
  );
}
