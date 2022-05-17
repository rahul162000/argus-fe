import React, { useState } from 'react';
import axiosInstance from '../../../helpers/axiosInstance';
import Alert from '../../Components/Alert';

function ChangePassword() {
  const token = JSON.parse(localStorage.getItem('jwt'));

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const changePass = (e) => {
    e.preventDefault();
    if (newPass?.trim().length < 6) {
      setShowAlert({
        show: true,
        message: 'Minimun length is 6',
        success: false,
      });
    } else if (newPass?.trim() !== confirmPass?.trim()) {
      setShowAlert({
        show: true,
        message: 'Confirm password not same',
        success: false,
      });
    } else {
      axiosInstance
        .post(
          '/change-password',
          { oldPassword: oldPass?.trim(), newPassword: newPass?.trim() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          setShowAlert({
            show: true,
            message: 'Password changed successfully',
            success: true,
          });
          setNewPass('');
          setOldPass('');
          setConfirmPass('');
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: err?.response?.data?.error,
            success: false,
          });
        });
    }
  };

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        CHANGE PASSWORD
      </h1>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}

      <form className="w-full md:w-1/2 mx-auto">
        <input
          className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
          type="name"
          placeholder="Enter Old Password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
        />
        <input
          className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
          type="name"
          placeholder="Enter New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <input
          className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
          type="name"
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button
          onClick={(e) => {
            changePass(e);
          }}
          className="w-full mx-auto flex justify-center font-bold text-white bg-red-1 py-4 px-6 md:px-10 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl my-3 hover:shadow-button-inner-1"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
