import axiosInstance from '../../../helpers/axiosInstance';
import {
  GET_EMPLOYEE,
  GET_INSTRUCTORS,
  GET_STUDENTS,
  GET_USERS,
} from '../../actionTypes';

const setUsers = (data) => ({
  type: GET_USERS,
  payload: data,
});

const setStudent = (data) => ({
  type: GET_STUDENTS,
  payload: data,
});
const setInstructors = (data) => ({
  type: GET_INSTRUCTORS,
  payload: data,
});
const setEmployee = (data) => ({
  type: GET_EMPLOYEE,
  payload: data,
});

const getUsers = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/user/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setUsers(res.data.data));
        dispatch(setStudent(res.data.data));
        dispatch(setInstructors(res.data.data));
        dispatch(setEmployee(res.data.data));
      })
      .catch((err) => {});
  };
};

export { getUsers };
