import {
  ADD_BASKET,
  DELETE_BASKET,
  GET_BASKET,
  UPDATEBASKET_STATUS,
} from '../../actionTypes';

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET:
      return {
        ...state,
        basket: action.payload,
      };
    case ADD_BASKET:
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };

    case UPDATEBASKET_STATUS:
      return {
        ...state,
        basket: state?.basket?.map((b) => {
          if (b?._id === action.payload) {
            return {
              ...b,
              status: 'DOWNLOADED',
            };
          } else {
            return b;
          }
        }),
      };
    case DELETE_BASKET:
      return {
        ...state,
        basket: [...state.basket.filter((f) => f._id !== action.payload)],
      };
    default:
      return state;
  }
};

export { basketReducer };
