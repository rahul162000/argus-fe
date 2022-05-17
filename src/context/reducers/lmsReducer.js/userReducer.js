import {
  GET_EMPLOYEE,
  GET_INSTRUCTORS,
  GET_STUDENTS,
  GET_USERS,
} from '../../actionTypes';

const initialState = {
  users: [],
  instructors: [],
  students: [],
  employee: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload.filter((s) => s.role === 1),
      };
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload.filter((s) => s.role === 4),
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload.filter((s) => s.role === 3),
      };

    default:
      return state;
  }
};

export { userReducer };
