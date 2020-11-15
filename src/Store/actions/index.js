import API from "../../utils/API";
import * as ACTIONS from "../actions/types";
import { clearToken, decodeToken, storeToken } from "../../utils/Helpers";

// async login function, will set localStorage token if successful
export async function login(user, dispatch) {
  try {
    let response = await API.login(user);

    if (response.status === 200) {
      let token = response.data.access_token;

      dispatch({
        type: ACTIONS.LOGIN,
        payload: { ...decodeToken(token) },
      });
      storeToken(token);
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.LOGIN_ERROR,
      payload: { message: error.message },
    });

    alert(JSON.stringify(error.message));
  }
}

// async registration function, will set localStorage token if successful
export async function register(user, dispatch) {
  try {
    let response = await API.register(user);

    if (response.status === 200) {
      let token = response.data.access_token;
      dispatch({
        type: ACTIONS.REGISTER,
        payload: { ...decodeToken(token) },
      });
      storeToken(token);
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.REGISTER_ERROR,
      payload: { message: error.message },
    });

    alert(JSON.stringify(error.message));
  }
}

// logout function will destroy localstorage token
export const logout = (dispatch) => {
  clearToken();
  dispatch({ type: ACTIONS.LOGOUT });
};

// get state values from access token
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("token");
    if (serializedState === null) {
      return undefined;
    }
    return decodeToken(serializedState);
  } catch (error) {
    return undefined;
  }
};
