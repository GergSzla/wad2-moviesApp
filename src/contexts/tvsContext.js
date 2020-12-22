import React, { useEffect, createContext, useReducer } from "react";
import {getTvs} from "../api/tmdb-api";

export const TvsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {

    case "load":
      return { 
        tvs: action.payload.tvs };
    default:
      return state;
  }
};

const TvsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {tvs: []});

  useEffect(() => {
    getTvs().then((tvs) => {
      dispatch({ type: "load", payload: { tvs } });
    });
  }, []);

  return (
    <TvsContext.Provider
      value={{
        tvs: state.tvs,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider;