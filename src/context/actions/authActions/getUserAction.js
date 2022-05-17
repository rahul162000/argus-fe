import axiosInstance from '../../../helpers/axiosInstance';
import { IS_AUTH, SET_USERDETAILS } from '../../actionTypes';
import { addNot } from '../notAndMessage';
import { clearStorage } from './setStorageAction';

const setUser = (data) => ({
  type: SET_USERDETAILS,
  payload: data,
});

const isAuthenticated = (data) => ({
  type: IS_AUTH,
  payload: data,
});

const getUser = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const id = JSON.parse(localStorage.getItem('id'));
    dispatch(isAuthenticated('loading'));
    axiosInstance
      .get(`/user/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.data?.data?.blocked) {
          dispatch(isAuthenticated('false'));
          dispatch(clearStorage());
        } else {
          dispatch(setUser(res.data.data));
          dispatch(isAuthenticated('true'));
          dispatch(lastLoggedIn());
        }
      })
      .catch(() => {
        dispatch(isAuthenticated('false'));
        dispatch(clearStorage());
      });
  };
};

const updateUser = (resetForm, values, activityDetails, userName, id) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .put('/user/update', values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getUser());
        dispatch(userActivity(activityDetails, userName, id));
        dispatch(
          addNot({
            userId: id,
            userName: userName,
            createdBy: userName,
            activityDetails,
            createdAt: new Date(),
          }),
        );
        resetForm();
      })
      .catch((err) => {});
  };
};

const userActivity = (activityDetails, userName, id) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .post(
        `/user-activity/create/${id}`,
        {
          activityDetails: activityDetails,
          createdBy: userName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {})
      .catch((err) => {});
  };
};

const lastLoggedIn = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .put(
        `/user/lastLoggedIn`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {})
      .catch(() => {});
  };
};

export {
  getUser,
  setUser,
  isAuthenticated,
  updateUser,
  userActivity,
  lastLoggedIn,
};
