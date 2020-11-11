import * as ACTIONS from "./actions/types";
import React from "react";

export const initialState = {
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
        ...initialState,
        isAuthenticated: false,
      };
    case ACTIONS.LOGIN:
      return {
        isAuthenticated: true,
        username: action.payload.username,
        roles: action.payload.roles,
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        isAuthenticated: false,
        error: true,
        errorMsg: action.payload.message,
      };
    case ACTIONS.REGISTER:
      return {
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.username,
        roles: action.payload.roles,
      };
    case ACTIONS.REGISTER_ERROR:
      return {
        isAuthenticated: false,
        error: true,
        errorMsg: action.payload.message,
      };
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

// Helper function to just unpack state and dispatch
function useState() {
  return [useUserState(), useDispatch()];
}

export { StateProvider, useUserState, useDispatch, useState };
