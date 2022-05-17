import {
  ADDTEAM_LOADING,
  DELETE_TEAM,
  DELETE_TEAMLOADING,
  SETUPDATE_TEAM,
  SET_TEAM,
  TEAM_ALERT,
  TEAM_LOADING,
} from "../../actionTypes";

const initialState = {
  team: [],
  update: {
    state: false,
    data: null,
  },
  loading: false,
  teamalert: {
    success: null,
    message: "",
  },
  addloading: false,
  deleteloading: false,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case DELETE_TEAM:
      return {
        ...state,
        team: [...state.team.filter((c) => c._id !== action.payload)],
      };
    case SETUPDATE_TEAM:
      return {
        ...state,
        update: action.payload,
      };
    case TEAM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TEAM_ALERT:
      return {
        ...state,
        teamalert: action.payload,
      };
    case ADDTEAM_LOADING:
      return {
        ...state,
        addloading: action.payload,
      };
    case DELETE_TEAMLOADING:
      return {
        ...state,
        deleteloading: action.payload,
      };
    default:
      return state;
  }
};

export { teamReducer };
