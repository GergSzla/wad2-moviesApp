import React, { useEffect, createContext, useReducer } from "react";
import { getPerson } from "../api/tmdb-api";

export const PersonsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-following":
      return {
        persons: state.persons.map((m) =>
          m.id === action.payload.person.id ? { ...m, following: true } : m
        ),
      };
    case "load":
      return {
        persons: action.payload.persons
      };
    default:
      return state;
  }
};

const PersonsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { persons: [] });

  const addToFollowing = (personId) => {
    const index = state.persons.map((m) => m.id).indexOf(personId);
    dispatch({ type: "add-following", payload: { person: state.persons[index] } });
  };

  useEffect(() => {
    getPerson().then((persons) => {
      dispatch({ type: "load", payload: { persons } });
    });
  }, []);

  return (
    <PersonsContext.Provider
      value={{
        persons: state.persons,
        following: state.following,
        addToFollowing: addToFollowing,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;