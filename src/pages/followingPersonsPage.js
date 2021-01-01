import React, {useContext} from "react";
import PersonListPageTemplate from "../components/templatePersonListPage/viewPerson";
import {PersonsContext} from '../contexts/personContext'
// import AddReviewButton from '../components/buttons/addReview'


const FollowingPersonsPage = props => {
  const context = useContext(PersonsContext);
  const following = context.persons.filter( m => m.following )
  return (
    <PersonListPageTemplate
      persons={following}
      title={"Followed Actors"}
    />
  );
};

export default FollowingPersonsPage;