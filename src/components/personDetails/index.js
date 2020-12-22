import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h2 className="pName">{person.name}</h2>
      <h3 className="col-2 bio">Biography</h3>
      <p>{person.biography}</p>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="bday" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>
    </>
  );
};

// TODO: CHANGE PLEASE