import { GLOBAL_TYPES } from "../actions/globalTypes";


const initialState = {token: sessionStorage.getItem('access_token')};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case GLOBAL_TYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;