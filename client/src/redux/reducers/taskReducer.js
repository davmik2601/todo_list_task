import { TASK_TYPES } from "../actions/taskAction";


const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case TASK_TYPES.GET_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default taskReducer;