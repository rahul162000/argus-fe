import axiosInstance from '../../../helpers/axiosInstance';
import {
  ADDCLIENT_LOADING,
  CLIENTCAROUSEL_LOADING,
  CLIENT_CAROUSELALERT,
  DELETECLIENT_CAROUSEL,
  DELETECLIENT_CAROUSELLOADING,
  SETCLIENT_CAROUSEL,
  SETUPDATE_TESTIMONIAL,
} from '../../actionTypes';

const setclientcarousel = (data) => ({
  type: SETCLIENT_CAROUSEL,
  payload: data,
});

const deleteclientcarousel = (id) => ({
  type: DELETECLIENT_CAROUSEL,
  payload: id,
});

const clientcarouselAlert = (data) => ({
  type: CLIENT_CAROUSELALERT,
  payload: data,
});

const setupdateclientcarousel = (data) => ({
  type: SETUPDATE_TESTIMONIAL,
  payload: data,
});

const clientcarouselloading = (data) => ({
  type: CLIENTCAROUSEL_LOADING,
  payload: data,
});

const addclientloading = (data) => ({
  type: ADDCLIENT_LOADING,
  payload: data,
});

const deleteloading = (data) => ({
  type: DELETECLIENT_CAROUSELLOADING,
  payload: data,
});

const getClientCarousel = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(clientcarouselloading(true));
    axiosInstance
      .get('/client/get-all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          setclientcarousel(
            res?.data?.data?.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            }),
          ),
        );
        dispatch(clientcarouselloading(false));
      })
      .catch((err) => {
        dispatch(clientcarouselloading(false));
      });
  };
};

const deleteClientCarousel = (id) => {
  return (dispatch) => {
    dispatch(deleteloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));

    axiosInstance
      .delete(`/client/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deleteloading(false));
        dispatch(deleteclientcarousel(id));
      })
      .catch((err) => {
        dispatch(deleteloading(false));
        console.log(err);
      });
  };
};

const addClientCarousel = (data) => {
  return (dispatch) => {
    dispatch(addclientloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));

    axiosInstance
      .post('/client/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addclientloading(false));
        dispatch(getClientCarousel());
        dispatch(
          clientcarouselAlert({
            success: true,
            message: 'Client added successfully',
          }),
        );
      })
      .catch((err) => {
        dispatch(addclientloading(false));
        dispatch(
          clientcarouselAlert({
            success: false,
            message: 'Error adding client',
          }),
        );
      });
  };
};

const updateClientCarousel = (data, id) => {
  return (dispatch) => {
    dispatch(addclientloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .put(`/client/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addclientloading(false));
        dispatch(getClientCarousel());
        dispatch(
          clientcarouselAlert({
            success: true,
            message: 'Client updated successfully',
          }),
        );
        dispatch(setupdateclientcarousel({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(addclientloading(false));
        dispatch(
          clientcarouselAlert({
            success: false,
            message: 'Error updating client',
          }),
        );
        dispatch(setupdateclientcarousel({ state: false, data: null }));
      });
  };
};

export {
  updateClientCarousel,
  addClientCarousel,
  deleteClientCarousel,
  getClientCarousel,
  setupdateclientcarousel,
  clientcarouselAlert,
};
