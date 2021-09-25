import { SUCCESS_TYPES } from "../actions/successAction";


const initialState = {};

const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SUCCESS_TYPES.SUCCESS_MESSAGE):
      return action.payload;
    default:
      return state;
  }
};

export default successReducer;