const {
  SET_EOMADMIN,
  DELETE_EOM,
  SET_EOM,
  SETUPDATE_EOM,
  EOM_LOADING,
  EOM_ALERT,
  ADDEOM_LOADING,
  DELETE_EOMLOADING,
} = require("../../actionTypes");

const initialState = {
  eom: null,
  eomAdmin: [],
  eomalert: {
    success: null,
    message: "",
  },
  update: {
    state: false,
    data: null,
  },
  loading: false,
  addloading: false,
  deleteloading: false,
};

const eomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EOM:
      return {
        ...state,
        eom: action.payload,
      };
    case SET_EOMADMIN:
      return {
        ...state,
        eomAdmin: action.payload,
      };
    case DELETE_EOM:
      return {
        ...state,
        eomAdmin: [...state.eomAdmin.filter((c) => c._id !== action.payload)],
      };
    case SETUPDATE_EOM:
      return {
        ...state,
        update: action.payload,
      };
    case EOM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case EOM_ALERT:
      return {
        ...state,
        eomalert: action.payload,
      };
    case ADDEOM_LOADING:
      return {
        ...state,
        addloading: action.payload,
      };
    case DELETE_EOMLOADING:
      return {
        ...state,
        deleteloading: action.payload,
      };
    default:
      return state;
  }
};

export { eomReducer };
