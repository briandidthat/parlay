import * as ACTIONS from "../actions/types";
import API from "../../utils/API";

export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.LOGIN });
      let response = await API.login(user);

      if (response.status === "200") {
        response = response.json();
        dispatch({
          type: ACTIONS.LOGIN_SUCCESS,
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.LOGIN_ERROR,
        payload: { message: err.message },
      });
    }
  };
};

export const logout = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
};



export const register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.REGISER });
      let response = await API.register(user);

      if (response.status === "200") {
        response = response.json();
        dispatch({
          type: ACTIONS.REGISTER_SUCCESS,
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.REGISTER_ERROR,
        payload: { message: err.message },
      });
    }
  };
};
