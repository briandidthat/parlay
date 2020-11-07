import * as ACTIONS from "../actions/types";
import API from "../../utils/API";
import { clearToken, getUserClaims, storeToken } from "../../utils/Helpers";

// async login function, will set localStorage token if successful
export async function login(user, dispatch) {
  try {
    let response = await API.login(user);
    console.log(response.status);
    if (response.status === 200) {
      let token = response.data.access_token;
      let { username, roles } = getUserClaims(token);
      dispatch({
        type: ACTIONS.LOGIN,
        payload: { username, roles },
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

// logout function will destroy
export const logout = (dispatch) => {
  clearToken();
  dispatch({ type: ACTIONS.LOGOUT });
};

// async registration function, will set localStorage token if successful
export async function register(user, dispatch) {
  try {
    let response = await API.register(user);

    if (response.status === 200) {
      let token = response.data.access_token;
      let { username, roles } = getUserClaims(token);
      dispatch({
        type: ACTIONS.REGISTER,
        payload: { username, roles },
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
