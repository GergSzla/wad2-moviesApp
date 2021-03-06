import React from "react";
import "./personDetails.css";


export default ({ person }) => {
  return (
    <>
      <div className="backg">
        <h2>
          
          <a href={person.homepage}>
          {person.name}
          {"  "}
          </a>
        </h2>
        <div className="row"><h4 className="badge badge-dark">Also Known As</h4>
        <p>{person.also_known_as},&nbsp; </p></div>

        <h1 className="badge badge-dark">Biography</h1>
        <p id="biog">{person.biography}</p>

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