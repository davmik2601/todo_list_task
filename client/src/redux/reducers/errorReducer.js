import { ERROR_TYPES } from "../actions/errorAction";


const initialState = {errors: {}};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ERROR_TYPES.VALIDATION_ERRORS):
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;