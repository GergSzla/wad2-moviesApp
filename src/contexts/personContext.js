import React, { useEffect, createContext, useReducer } from "react";
import {getPerson} from "../api/tmdb-api";

export const PersonsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {

    case "load":
      return { 
        persons: action.payload.persons };
    default:
      return state;
  }
};

const PersonsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {persons: []});

  useEffect(() => {
    getPerson().then((persons) => {
      dispatch({ type: "load", payload: { persons } });
    });
  }, []);

  return (
    <PersonsContext.Provider
      value={{
        persons: state.persons,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;