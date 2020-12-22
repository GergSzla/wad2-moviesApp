import React from "react";
import Person from "../personCard";
import "./personList.css";

const PersonList = ({persons, action}) => {
  const personCard = persons.map(m => (
    <Person key={m.id} person={m} action={action} />
  ));
  return <div className="row persons">{personCard}</div>;
};

export default PersonList;