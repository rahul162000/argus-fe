import { IS_AUTH, SET_JWT, SET_USERDETAILS } from '../../actionTypes';

const initialState = {
  user: {},
  token: null,
  isAuth: 'loading',
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERDETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case SET_JWT:
      return {
        ...state,
        token: action.payload,
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export { getUserReducer };
