import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions/types";

export const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  username: "",
  roles: [],
  isLoading: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isLoading: true,
      };
    case LOGIN_ERROR:
      return {
        isAuthenticated: false,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.username,
        roles: action.payload.roles
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        isLoading: false,
      };
    case REGISER:
      return {
        isLoading: true,
      };
    case REGISTER_ERROR:
      return {
        isAuthenticated: false,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.username,
        roles: [...action.payload.roles, "USER"]
      };
    default:
      return state;
  }
}
