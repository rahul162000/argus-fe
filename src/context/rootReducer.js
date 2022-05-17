import { combineReducers } from 'redux';
import { clientReducer } from './reducers/adminReducer/clientReducer';
import { teamReducer } from './reducers/adminReducer/teamReducer';
import { contactReducer } from './reducers/adminReducer/contactReducer';
import { eomReducer } from './reducers/adminReducer/eomReducer';
import { testimonialReducer } from './reducers/adminReducer/testimonialReducer';
import { getUserReducer } from './reducers/authReducer/getUserReducer';
import { userReducer } from './reducers/lmsReducer.js/userReducer';
import { classReducer } from './reducers/lmsReducer.js/classReducer';
import { basketReducer } from './reducers/lmsReducer.js/basketReducer';
import { progressReducer } from './reducers/userReducer';
import { requirementReducer } from './reducers/adminReducer/requirementActions';
import notificationReducer from './reducers/notAndMessage';

const rootReducer = combineReducers({
  contact: contactReducer,
  testimonial: testimonialReducer,
  req: requirementReducer,
  eom: eomReducer,
  client: clientReducer,
  team: teamReducer,
  user: getUserReducer,
  users: userReducer,
  class: classReducer,
  basket: basketReducer,
  progress: progressReducer,
  notification: notificationReducer,
});

export default rootReducer;
