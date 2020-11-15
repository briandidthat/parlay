import React from "react";
import * as ACTIONS from "./actions/types";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  username: "",
  roles: [],
};

const StateContext = React.createContext();
const DispatchContext = React.createContext();

function Reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ACTIONS.LOGIN:
      return {
        isAuthenticated: true,
        ...action.payload,
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        isAuthenticated: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case ACTIONS.REGISTER:
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case ACTIONS.REGISTER_ERROR:
      return {
        isAuthenticated: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case ACTIONS.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("This function must be used within a StateProvider");
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("This function must be used within a StateProvider");
  }
  return context;
}

function useSystemState() {
  return [useUserState(), useDispatch()];
}

export { StateProvider, useUserState, useDispatch, useSystemState };
