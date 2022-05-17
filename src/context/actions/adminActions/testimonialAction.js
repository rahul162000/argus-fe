import axiosInstance from '../../../helpers/axiosInstance';
const {
  SET_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  SETUPDATE_TESTIMONIAL,
  TESTIMONIAL_LOADING,
  TESTIMONIAL_ALERT,
  ADDTESTIMONIAL_LOADING,
  DELETE_TESTIMONIALLOADING,
} = require('../../actionTypes');

const settestimonial = (data) => ({
  type: SET_TESTIMONIAL,
  payload: data,
});

const deletetestimonial = (id) => ({
  type: DELETE_TESTIMONIAL,
  payload: id,
});

const setupdatetestimonial = (data) => ({
  type: SETUPDATE_TESTIMONIAL,
  payload: data,
});

const testimonialloading = (data) => ({
  type: TESTIMONIAL_LOADING,
  payload: data,
});

const testimonailAlert = (data) => ({
  type: TESTIMONIAL_ALERT,
  payload: data,
});

const addtestimonialloading = (data) => ({
  type: ADDTESTIMONIAL_LOADING,
  payload: data,
});

const deleteloading = (data) => ({
  type: DELETE_TESTIMONIALLOADING,
  payload: data,
});

const getTestimonial = () => {
  return (dispatch) => {
    dispatch(testimonialloading(true));
    axiosInstance
      .get('/testimonial/get-all')
      .then((res) => {
        dispatch(
          settestimonial(
            res?.data?.data?.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            }),
          ),
        );
        dispatch(testimonialloading(false));
      })
      .catch((err) => {
        dispatch(testimonialloading(false));
      });
  };
};

const deleteTestimonial = (id) => {
  return (dispatch) => {
    dispatch(deleteloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .delete(`/testimonial/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deletetestimonial(id));
        dispatch(deleteloading(false));
      })
      .catch((err) => {
        dispatch(deleteloading(false));
      });
  };
};

const addTestimonial = (data) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addtestimonialloading(true));
    axiosInstance
      .post('/testimonial/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addtestimonialloading(false));
        dispatch(getTestimonial());
        dispatch(
          testimonailAlert({
            success: true,
            message: 'Testimonial added successfully',
          }),
        );
      })
      .catch((err) => {
        dispatch(addtestimonialloading(false));
        dispatch(
          testimonailAlert({
            success: false,
            message: 'Error adding testimonial',
          }),
        );
      });
  };
};

const updateTestimonial = (data, id) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addtestimonialloading(true));
    axiosInstance
      .put(`/testimonial/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addtestimonialloading(false));
        dispatch(getTestimonial());
        dispatch(
          testimonailAlert({
            success: true,
            message: 'Testimonial updated successfully',
          }),
        );
        dispatch(setupdatetestimonial({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(addtestimonialloading(false));
        dispatch(
          testimonailAlert({
            success: false,
            message: 'Error updating testimonial',
          }),
        );
        dispatch(setupdatetestimonial({ state: false, data: null }));
      });
  };
};

export {
  getTestimonial,
  deleteTestimonial,
  addTestimonial,
  setupdatetestimonial,
  updateTestimonial,
  testimonailAlert,
};
