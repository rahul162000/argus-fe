import {
  COURSE_LOADING,
  GETALL_COURSES,
  GETUSERS_COURSE,
  GET_PROGRESS,
  SET_CURRENTCOURSE,
  UPADTE_CURRENTTIMESTAMP,
} from '../actionTypes';

const initialState = {
  course: [],
  courses: [],
  progress: null,
  current: null,
  loading: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_CURRENTCOURSE:
      return {
        ...state,
        current: action.payload,
      };
    case UPADTE_CURRENTTIMESTAMP:
      return {
        ...state,
        current: {
          ...state.current,
          currentChapter: {
            ...state.current.currentChapter,
            currentChapterTimestamp: action.payload,
          },
        },
      };
    case GETUSERS_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case COURSE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export { progressReducer };
