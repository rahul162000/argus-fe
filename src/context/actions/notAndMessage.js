import axiosInstance from '../../helpers/axiosInstance';
import {
  ADD_NOTIFICATION,
  GET_MESSAGE,
  GET_NOTIFICATION,
  MESSAGE_LOADING,
  NOT_LOADING,
} from '../actionTypes';

const setNot = (data) => ({
  type: GET_NOTIFICATION,
  payload: data,
});

const addNot = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data,
});

const setMessage = (data) => ({
  type: GET_MESSAGE,
  payload: data,
});

const notLoading = (data) => ({
  type: NOT_LOADING,
  payload: data,
});

const messageLoading = (data) => ({
  type: MESSAGE_LOADING,
  payload: data,
});

const token = JSON.parse(localStorage.getItem('jwt'));
const getHistory = (data) => {
  return (dispatch) => {
    dispatch(notLoading(true));
    axiosInstance
      .get(`/user-activity/get?page=1&limit=100000`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          setNot(
            res.data.data.activities.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            ),
          ),
        );
        dispatch(notLoading(false));
      })
      .catch((err) => {
        dispatch(notLoading(false));
      });
  };
};

const getMessage = (data) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem('id'));
    dispatch(messageLoading(true));
    axiosInstance
      .get(`/message/get/${user}?page=1&&limit=100000`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          setMessage(
            res.data.data.messages.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            ),
          ),
        );
        dispatch(messageLoading(false));
      })
      .catch((err) => {
        dispatch(messageLoading(false));
      });
  };
};

export { getHistory, addNot, getMessage };
