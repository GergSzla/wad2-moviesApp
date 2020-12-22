import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {PersonsContext} from '../contexts/personContext'

const PersonListPage = () => {
  const context = useContext(PersonsContext);
  const persons = context.persons

  return (
    <PageTemplate
      title="Trending Actors"
      persons = {persons}
    />
  );
};

export default PersonListPage;