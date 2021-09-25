import { clearError } from "./errorAction"

export const SUCCESS_TYPES = {
  SUCCESS_MESSAGE: 'SUCCESS_MESSAGE',
}

export const setMessage  = (msg = 'Successed') => async (dispatch) => {

  dispatch(clearError());

  dispatch({
    type: SUCCESS_TYPES.SUCCESS_MESSAGE,
    payload: {
      message: msg
    }
  })
}


export const clearMessage  = () => async (dispatch) => {

  dispatch({
    type: SUCCESS_TYPES.SUCCESS_MESSAGE,
    payload: {}
  })
}