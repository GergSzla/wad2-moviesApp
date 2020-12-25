import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {PersonsContext} from '../contexts/personContext'
import AddToFollowingButton from '../components/buttons/addToFollowing'

const PersonListPage = () => {
  const context = useContext(PersonsContext);
  const persons = context.persons

  return (
    <PageTemplate
      title="Trending Actors"
      persons = {persons}
      action={(person) => {
        return <AddToFollowingButton person={person} />;
      }}
    />
  );
};

export default PersonListPage;