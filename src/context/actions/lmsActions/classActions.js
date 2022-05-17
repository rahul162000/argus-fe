import axiosInstance from '../../../helpers/axiosInstance';
import {
  ADD_CLASS,
  DELETE_CLASS,
  ENROLL_CLASS,
  GET_CLASSES,
  GET_CLASSESLOADING,
} from '../../actionTypes';

const getClass = (data) => ({
  type: GET_CLASSES,
  payload: data,
});

const addClass = (data) => ({
  type: ADD_CLASS,
  payload: data,
});

const enrollClass = (data) => ({
  type: ENROLL_CLASS,
  payload: data,
});

const deleteClass = (data) => ({
  type: DELETE_CLASS,
  payload: data,
});
const getClassLoading = (data) => ({
  type: GET_CLASSESLOADING,
  payload: data,
});

const token = JSON.parse(localStorage.getItem('jwt'));

const get_Class = () => {
  return (dispatch) => {
    dispatch(getClassLoading(true));
    axiosInstance
      .get('/class/get-all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getClass(res?.data?.data));
        dispatch(getClassLoading(false));
      })
      .catch((err) => {
        dispatch(getClassLoading(false));
      });
  };
};

export { get_Class, addClass };
