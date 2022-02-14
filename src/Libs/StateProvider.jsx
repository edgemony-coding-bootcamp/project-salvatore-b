import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => (
  // Hook useReducer
  <StateContext.Provider value={useReducer(reducer, initialState)}>
 
    {children}
  </StateContext.Provider>
);

// Using inside a component
export const useStateValue = () => useContext(StateContext);