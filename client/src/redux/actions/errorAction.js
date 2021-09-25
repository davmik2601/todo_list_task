import { clearMessage } from "./successAction";

export const ERROR_TYPES = {
  VALIDATION_ERRORS: 'VALIDATION_ERRORS',
}

export const setError  = (err) => async (dispatch) => {

  dispatch(clearMessage());

  dispatch({
    type: ERROR_TYPES.VALIDATION_ERRORS,
    payload: {
      errors: err.response.data.errors ? err.response.data.errors : {},
      message: err.response.data.message ? err.response.data.message : '',
    }
  });
}


export const clearError  = () => async (dispatch) => {

  dispatch({
    type: ERROR_TYPES.VALIDATION_ERRORS,
    payload: {errors: {}}
  })
}