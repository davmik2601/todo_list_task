import Api from "../../utils/Api";
import { setError } from "./errorAction";
import { GLOBAL_TYPES } from "./globalTypes";
import { setMessage } from "./successAction";


export const TASK_TYPES = {
  GET_LIST: 'GET_LIST',
  ADD_TASK: 'ADD_TASK', 
};


export const getList = () => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });

    const res = await Api.get("get");

    dispatch({
      type: TASK_TYPES.GET_LIST,
      payload: {
        list: res.data.list
      }
    })

    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });

  } catch (err) {
    // console.log(err.response.data);
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
  }
}


export const addTask = (taskData) => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });
    
    const res = await Api.post("create", taskData);

    dispatch({
      type: TASK_TYPES.GET_LIST,
      payload: {
        list: res.data.list
      }
    });

    dispatch(setMessage("You Task Added Successfully !."));

    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });

  } catch (err) {
    // console.log(err.response.data);
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
    dispatch(setError(err));
  }
}


export const deleteTask = (id) => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });
    
    const res = await Api.delete("delete", {_id: id});

    dispatch({
      type: TASK_TYPES.GET_LIST,
      payload: {
        list: res.data.list
      }
    });

    // dispatch(setMessage("You Task Deleted Successfully !."));

    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });

  } catch (err) {
    // console.log(err.response.data);
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
  }
}