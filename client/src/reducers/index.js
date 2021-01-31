import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: AuthReducer,
  errors: errorReducer,
  profile: profileReducer
});
