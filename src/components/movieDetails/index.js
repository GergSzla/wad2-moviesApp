import React from "react";
import "./movieDetails.css";

export default ({ movie, action }) => {
  return (
    <>
      <div className="backg">
        <h2>
          {movie.title}
          {"  "}
          <a href={movie.homepage}>
          {movie.title}
          {"  "}
          </a>
        </h2>
        <h1 className="badge badge-dark">Overview</h1>
        <p>{movie.overview}</p>

        <div className="row"><h4 className="badge badge-dark">Tagline</h4>
          <p>{movie.tagline} Minutes</p></div>

        <div className="row"><h4 className="badge badge-dark">Runtime</h4>
          <p>{movie.runtime} Minutes</p></div>

        <div className="row"><h4 className="badge badge-dark">
          Release Date
        </h4>
          <p>{movie.release_date}</p></div>

        <div className="row"><h4 className="badge badge-dark">
          Status</h4>
          <p>{movie.status}</p></div>

          <div className="row"><h4 className="badge badge-dark">
          Budget</h4>
          <p>{movie.budget}</p></div>

          <div className="row"><h4 className="badge badge-dark">
          Status</h4>
          <p>{movie.status}</p></div>

          <div className="row"><h4 className="badge badge-dark">
          Popularity</h4>
          <p>{movie.popularity}</p></div>

          <div className="row"><h4 className="badge badge-dark">
          Vote Average</h4>
          <p>{movie.vote_average}</p></div>

          <div className="row"><h4 className="badge badge-dark">
          Vote Count</h4>
          <p>{movie.vote_count}</p></div>

        <div className="row"><h4 className="badge badge-dark">Genres</h4>
          {movie.genres.map(g => (
            <p>{g.name},&nbsp;</p>
          ))}</div>

        <div className="row"><h4 className="badge badge-dark">Spoken Languages</h4>
          {movie.spoken_languages.map(lang => (
            <p>{lang.name},&nbsp;</p>
          ))}</div>

        <div className="row"><h4 className="badge badge-dark">Production Companies</h4>
          {movie.production_companies.map(pc => (
            <p>{pc.name},&nbsp;</p>
          ))}</div>

        <div className="row"><h4 className="badge badge-dark">Production Countries</h4>
          {movie.production_countries.map(pc => (
            <p>{pc.name},&nbsp;</p>
          ))}</div>


        {/* <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pconth" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul> */}

        {action(movie)}
      </div>
    </>
  );
};