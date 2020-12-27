import React from "react";
import { Link } from "react-router-dom";
import "./personCard.css";
import "../../globals/fontawesome";

const PersonCard = ({person, action}) => {

  return (
    <div className="col-sm-2">
      <div className="card">
        <div className="container">
          <Link to={`/person/trending/${person.id}`}>
            <img id="imagePerson"
              className="card-img-tag center"
              alt={person.name}
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>
          <div className="card-body">
          <h4 className="card-title">{person.name}</h4>            
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonCard;