import React from "react";
import "./headerMovie.css";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row pageTitleBackg">
      <div className="col-md-6">
        <h1 className = "pageTitle">
          {`${title}  `}
          <span className="badge badge-dark">{numMovies}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;