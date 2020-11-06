import * as ACTIONS from "../actions/types";
import API from "../../utils/API";
import { getUserClaims } from "../../utils/Helpers";

// async login function, will set localStorage token if successful
export async function login(user, dispatch) {
  dispatch({ type: ACTIONS.LOGIN });

  try {
    let response = await API.login(user);
    console.log(response.status);
    if (response.status === 200) {
      let token = response.data.access_token;
      let { username, roles } = getUserClaims(token);
      dispatch({
        type: ACTIONS.LOGIN_SUCCESS,
        payload: { username, roles },
      });
      localStorage.setItem("token", token);
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.LOGIN_ERROR,
      payload: { message: error.message },
    });

    alert(JSON.stringify(error.message));
  }
}

// logout function will destroy 
export const logout = (dispatch) => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  dispatch({ type: ACTIONS.LOGOUT });
};

// async registration function, will set localStorage token if successful
export async function register(user, dispatch) {
  dispatch({ type: ACTIONS.REGISTER });

  try {
    let response = await API.register(user);

    if (response.status === 200) {
      let token = response.data.access_token;
      let { username, roles } = getUserClaims(token);
      dispatch({
        type: ACTIONS.REGISTER_SUCCESS,
        payload: { username, roles },
      });
      localStorage.setItem("token", token);
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.REGISTER_ERROR,
      payload: { message: error.message },
    });

    alert(JSON.stringify(error.message));
  }
}
