import axiosInstance from '../../../helpers/axiosInstance';
const {
  SET_REQUIREMENT,
  DELETE_REQUIREMENT,
  SETUPDATE_REQUIREMENT,
  REQUIREMENT_LOADING,
  REQUIREMENT_ALERT,
  ADDREQUIREMENT_LOADING,
  DELETE_REQUIREMENTLOADING,
} = require('../../actionTypes');

const setreq = (data) => ({
  type: SET_REQUIREMENT,
  payload: data,
});

const deletereq = (id) => ({
  type: DELETE_REQUIREMENT,
  payload: id,
});

const setupdatereq = (data) => ({
  type: SETUPDATE_REQUIREMENT,
  payload: data,
});

const reqloading = (data) => ({
  type: REQUIREMENT_LOADING,
  payload: data,
});

const reqAlert = (data) => ({
  type: REQUIREMENT_ALERT,
  payload: data,
});

const addreqloading = (data) => ({
  type: ADDREQUIREMENT_LOADING,
  payload: data,
});

const deleteloading = (data) => ({
  type: DELETE_REQUIREMENTLOADING,
  payload: data,
});

const getReq = () => {
  return (dispatch) => {
    dispatch(reqloading(true));
    axiosInstance
      .get('/requirement/get-all')
      .then((res) => {
        dispatch(
          setreq(
            res?.data?.data?.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            }),
          ),
        );
        dispatch(reqloading(false));
      })
      .catch((err) => {
        dispatch(reqloading(false));
      });
  };
};

const deleteReq = (id) => {
  return (dispatch) => {
    dispatch(deleteloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .delete(`/requirement/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deletereq(id));
        dispatch(deleteloading(false));
      })
      .catch((err) => {
        dispatch(deleteloading(false));
      });
  };
};

const addReq = (data) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addreqloading(true));
    axiosInstance
      .post('/requirement/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addreqloading(false));
        dispatch(getReq());
        dispatch(
          reqAlert({
            success: true,
            message: 'Requirement added successfully',
          }),
        );
      })
      .catch((err) => {
        dispatch(addreqloading(false));
        dispatch(
          reqAlert({
            success: false,
            message: 'Error adding requirement',
          }),
        );
      });
  };
};

const updateReq = (data, id) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addreqloading(true));
    axiosInstance
      .put(`/requirement/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addreqloading(false));
        dispatch(getReq());
        dispatch(
          reqAlert({
            success: true,
            message: 'Requirement updated successfully',
          }),
        );
        dispatch(setupdatereq({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(addreqloading(false));
        dispatch(
          reqAlert({
            success: false,
            message: 'Error updating requirement',
          }),
        );
        dispatch(setupdatereq({ state: false, data: null }));
      });
  };
};

export { getReq, deleteReq, addReq, setupdatereq, updateReq, reqAlert };
