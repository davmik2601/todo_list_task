import { combineReducers } from "redux";
import auth from './authReducer';
import loading from './loadingReducer';
import error from './errorReducer';
import success from './successReducer';
import task from './taskReducer';

export default combineReducers({
  auth,
  loading,
  error,
  success,
  task,
});