import React, { useState } from "react";
import Header from "../headerPersonList";
import PersonList from "../personList";
import FilterControls from "../filterControlsPerson";

const PersonListPageTemplate = ({ persons, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  
  let displayedPersons = persons
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header title={title} numPersons={displayedPersons.length} />
      <FilterControls onUserInput={handleChange} numPersons={displayedPersons.length}/>
      <PersonList
       action={action}
       persons={displayedPersons}
      ></PersonList>
    </>
  );
};

export default PersonListPageTemplate ;