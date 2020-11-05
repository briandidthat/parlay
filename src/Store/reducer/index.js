import { getRoles } from "../../utils/Helpers";
import * as ACTIONS from "../actions/types";

export const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  username: "",
  roles: [],
  isLoading: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        isLoading: true,
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        isAuthenticated: false,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.username,
        roles: getRoles(action.payload.token),
      };
    case ACTIONS.LOGOUT:
      return {
        isAuthenticated: false,
        isLoading: false,
      };
    case ACTIONS.REGISTER:
      return {
        isLoading: true,
      };
    case ACTIONS.REGISTER_ERROR:
      return {
        isAuthenticated: false,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case ACTIONS.REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.username,
        roles: getRoles(action.payload.token),
      };
    default:
      return state;
  }
}
