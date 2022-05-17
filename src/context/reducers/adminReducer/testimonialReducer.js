import {
  ADDTESTIMONIAL_LOADING,
  DELETE_TESTIMONIAL,
  DELETE_TESTIMONIALLOADING,
  SETUPDATE_TESTIMONIAL,
  SET_TESTIMONIAL,
  TESTIMONIAL_ALERT,
  TESTIMONIAL_LOADING,
} from "../../actionTypes";

const initialState = {
  testimonial: [],
  update: {
    state: false,
    data: null,
  },
  loading: false,
  testimonialalert: {
    success: null,
    message: "",
  },
  addloading: false,
  deleteloading: false,
};

const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTIMONIAL:
      return {
        ...state,
        testimonial: action.payload,
      };
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        testimonial: [
          ...state.testimonial.filter((c) => c._id !== action.payload),
        ],
      };
    case SETUPDATE_TESTIMONIAL:
      return {
        ...state,
        update: action.payload,
      };
    case TESTIMONIAL_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TESTIMONIAL_ALERT:
      return {
        ...state,
        testimonialalert: action.payload,
      };
    case ADDTESTIMONIAL_LOADING:
      return {
        ...state,
        addloading: action.payload,
      };
    case DELETE_TESTIMONIALLOADING:
      return {
        ...state,
        deleteloading: action.payload,
      };
    default:
      return state;
  }
};

export { testimonialReducer };
