import {
  ADD_NOTIFICATION,
  GET_MESSAGE,
  GET_NOTIFICATION,
  MESSAGE_LOADING,
  NOT_LOADING,
} from '../actionTypes';

const initialState = {
  notification: [],
  messages: [],
  messageLoading: false,
  notificationLoading: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case GET_MESSAGE:
      return {
        ...state,
        messages: action.payload,
      };
    case NOT_LOADING:
      return {
        ...state,
        notificationLoading: action.payload,
      };
    case MESSAGE_LOADING:
      return {
        ...state,
        messageLoading: action.payload,
      };
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification: [action.payload, ...state.notification],
      };
    default:
      return state;
  }
};

export default notificationReducer;
