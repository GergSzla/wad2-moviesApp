import React from "react";
import "./personDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({ person }) => {
  return (
    <>
      <div className="backg">
        <h2>
          {person.name}
          {"  "}
          <a href={person.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
        <div className="row"><h4 className="badge badge-dark">Also Known As</h4>
        <p>{person.also_known_as},&nbsp; </p></div>

        <h1 className="badge badge-dark">Biography</h1>
        <p>{person.biography}</p>

        <div className="row"><h4 className="badge badge-dark">Birthday</h4>
        <p>{person.birthday}</p></div>

        <div className="row"><h4 className="badge badge-dark">Gender</h4>
        <p>{person.gender}</p></div>

        <div className="row"><h4 className="badge badge-dark">Popularity</h4>
        <p>{person.popularity}</p></div>

        <div className="row"><h4 className="badge badge-dark">Place Of Birth</h4>
        <p>{person.place_of_birth}</p></div>



      </div>
    </>
  );
};

// TODO: CHANGE PLEASE