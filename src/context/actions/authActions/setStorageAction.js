import axiosInstance from '../../../helpers/axiosInstance';
import { SET_JWT } from '../../actionTypes';

const setJWT = (data) => ({
  type: SET_JWT,
  payload: data,
});

const setToken = (token) => {
  return (dispatch) => {
    if (window !== undefined) {
      localStorage.setItem('jwt', JSON.stringify(token));
    }
  };
};

const getToken = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(setJWT(token));
  };
};

const setUserID = (id) => {
  return (dispatch) => {
    if (window !== undefined) {
      localStorage.setItem('id', JSON.stringify(id));
    }
  };
};

const clearStorage = () => {
  return (dispatch) => {
    localStorage.clear();
    axiosInstance.get('/signout');
  };
};

export { setToken, getToken, setUserID, clearStorage };
