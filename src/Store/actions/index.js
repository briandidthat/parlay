import * as ACTIONS from "../actions/types";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: ACTIONS.LOGIN });

    let login = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (login.status === "200") {
        dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: login.json() });
    }
  };
};
