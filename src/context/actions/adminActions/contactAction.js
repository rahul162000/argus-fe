import axiosInstance from '../../../helpers/axiosInstance';

const {
  SET_CONTACTS,
  CONTACT_ALERT,
  CONTACT_LOADING,
} = require('../../actionTypes');

const setcontact = (data) => ({
  type: SET_CONTACTS,
  payload: data,
});

const contactAlert = (data) => ({
  type: CONTACT_ALERT,
  payload: data,
});

const loading = (data) => ({
  type: CONTACT_LOADING,
  payload: data,
});

const getContact = () => {
  return (dispatch) => {
    axiosInstance
      .get('/contact/get')
      .then((response) => {
        dispatch(setcontact(response.data.data));
      })
      .catch((err) => {});
  };
};

const updateContact = (data) => {
  return (dispatch) => {
    dispatch(loading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .put('/contact/update', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(
          contactAlert({
            success: true,
            message: 'Contact updated successfully',
          }),
        );
        dispatch(setcontact(data));
        dispatch(loading(false));
      })
      .catch((error) => {
        dispatch(
          contactAlert({ success: false, message: 'Error updating contact' }),
        );
        dispatch(loading(false));
      });
  };
};

export { getContact, updateContact, contactAlert };
