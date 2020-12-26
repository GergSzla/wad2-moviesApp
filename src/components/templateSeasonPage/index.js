import React from "react";
import SeasonHeader from '../headerSeason'
import "./templateSeason.css";

const TemplateSeasonPage = ({ season, children }) => {
  return (
    <>
      <SeasonHeader season={season} />
      <div className="row">
        <div className="col-3">
          <img
            src={
                season.poster_path
                ? `https://image.tmdb.org/t/p/w500/${season.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="season"
            alt={season.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateSeasonPage