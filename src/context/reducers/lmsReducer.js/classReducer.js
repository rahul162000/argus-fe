import { ADD_CLASS, GET_CLASSES, GET_CLASSESLOADING } from '../../actionTypes';

const initialState = {
  class: [],
  loading: false,
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        class: action.payload,
      };
    case ADD_CLASS:
      return {
        ...state,
        class: [action.payload, ...state.class],
      };
    case GET_CLASSESLOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export { classReducer };
