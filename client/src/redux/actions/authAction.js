import { GLOBAL_TYPES } from "./globalTypes";
import Api from '../../utils/Api';
import { setError } from "./errorAction";
import { setMessage } from "./successAction";



export const register = (userData) => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });

    const res = await Api.post('register', userData);
    
    dispatch(setMessage("You Registered Successfully ! Please Login Now"));

    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      }
    })
    
    // window.location.replace('/login');

  } catch (err) {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
    dispatch(setError(err));
  }
};


export const login = (userData) => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });

    const res = await Api.post('login', userData);
    
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      }
    });

    sessionStorage.setItem('access_token', res.data.token);

    window.location.replace('/');

  } catch (err) {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
    dispatch(setError(err));
  }
};


export const logout = () => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {}
    });

    sessionStorage.removeItem("access_token");
    window.location.replace("/");
  } catch (err) {
    // console.log(err.response.data)
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
  }
}


export const checkAuth = () => async (dispatch) => {

  try {
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: true });

    const res = await Api.get('check_auth');

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      }
    });

    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });

  } catch (err) {
    // console.log(err.response.data);
    dispatch(setError(err));
    dispatch({ type: GLOBAL_TYPES.LOADING, payload: false });
  }
}