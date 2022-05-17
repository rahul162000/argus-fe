import {
  ADDREQUIREMENT_LOADING,
  DELETE_REQUIREMENT,
  DELETE_REQUIREMENTLOADING,
  REQUIREMENT_ALERT,
  REQUIREMENT_LOADING,
  SETUPDATE_REQUIREMENT,
  SET_REQUIREMENT,
} from '../../actionTypes';

const initialState = {
  requirement: [],
  update: {
    state: false,
    data: null,
  },
  loading: false,
  requirementalert: {
    success: null,
    message: '',
  },
  addloading: false,
  deleteloading: false,
};

const requirementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUIREMENT:
      return {
        ...state,
        requirement: action.payload,
      };
    case DELETE_REQUIREMENT:
      return {
        ...state,
        requirement: [
          ...state.requirement.filter((c) => c._id !== action.payload),
        ],
      };
    case SETUPDATE_REQUIREMENT:
      return {
        ...state,
        update: action.payload,
      };
    case REQUIREMENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REQUIREMENT_ALERT:
      return {
        ...state,
        requirementalert: action.payload,
      };
    case ADDREQUIREMENT_LOADING:
      return {
        ...state,
        addloading: action.payload,
      };
    case DELETE_REQUIREMENTLOADING:
      return {
        ...state,
        deleteloading: action.payload,
      };
    default:
      return state;
  }
};

export { requirementReducer };
