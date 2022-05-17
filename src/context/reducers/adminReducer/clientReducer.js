import {
  ADDCLIENT_LOADING,
  CLIENTCAROUSEL_LOADING,
  CLIENT_CAROUSELALERT,
  DELETECLIENT_CAROUSEL,
  DELETECLIENT_CAROUSELLOADING,
  SETCLIENT_CAROUSEL,
  SETUPDATE_TESTIMONIAL,
} from "../../actionTypes";

const initialState = {
  clients: [],
  clientalert: {
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

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCLIENT_CAROUSEL:
      return {
        ...state,
        clients: action.payload,
      };
    case DELETECLIENT_CAROUSEL:
      return {
        ...state,
        clients: [...state.clients.filter((c) => c._id !== action.payload)],
      };
    case CLIENTCAROUSEL_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CLIENT_CAROUSELALERT:
      return {
        ...state,
        clientalert: action.payload,
      };
    case SETUPDATE_TESTIMONIAL:
      return {
        ...state,
        update: action.payload,
      };
    case ADDCLIENT_LOADING:
      return {
        ...state,
        addloading: action.payload,
      };
    case DELETECLIENT_CAROUSELLOADING:
      return {
        ...state,
        deleteloading: action.payload,
      };
    default:
      return state;
  }
};

export { clientReducer };
