const {
  SET_CONTACTS,
  CONTACT_ALERT,
  CONTACT_LOADING,
} = require("../../actionTypes");

const initialState = {
  email: "",
  phoneNumber: "",
  address: "",
  mapLocation: "",
  contactalert: {
    success: null,
    message: "",
  },
  loading: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
        mapLocation: action.payload.mapLocation,
      };
    case CONTACT_ALERT:
      return {
        ...state,
        contactalert: action.payload,
      };
    case CONTACT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export { contactReducer };
