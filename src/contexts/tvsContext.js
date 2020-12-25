import React, { useEffect, createContext, useReducer } from "react";
import { getTvs } from "../api/tmdb-api";

export const TvsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        tvs: state.tvs.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return {
        tvs: action.payload.tvs
      };
    case "add-review":
      return {
        tvs: state.tvs.map((m) =>
          m.id === action.payload.tv.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
    default:
      return state;
  }
};

const TvsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvs: [] });

  const addToFavoritesTv = (tvId) => {
    const index = state.tvs.map((m) => m.id).indexOf(tvId);
    dispatch({ type: "add-favorite", payload: { tv: state.tvs[index] } });
  };

  useEffect(() => {
    getTvs().then((tvs) => {
      dispatch({ type: "load", payload: { tvs } });
    });
  }, []);

  return (
    <TvsContext.Provider
      value={{
        tvs: state.tvs,
        favorites: state.favorites,
        addToFavoritesTv: addToFavoritesTv,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider;