import React from "react";
import Person from "../personCard/viewPerson";
import "./personList.css";

const PersonList = ({persons}) => {
  const personCard = persons.map(m => (
    <Person key={m.id} person={m} />
  ));
  return <div className="row persons">{personCard}</div>;
};

export default PersonList;