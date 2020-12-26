import React from "react";
import "./seasonDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ season }) => {
  return (
    <>
      <h1>{season.name}</h1>
      <h4>Overview</h4>
      <p>{season.overview}</p>
      <ul className="list-group list-group-horizontal">
        {/* <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {season.runtime}
        </li> */}
      </ul>

      <table>
        <tr>
          <th>Episode No.</th>
          <th>Name</th>
          <th>Overview</th>
          <th>Air Date</th>
          <th>Vote Avg.</th>
        </tr>
        {season.episodes.map(e => (
          <tr>
            <td>{e.episode_number}</td>
            <td>{e.name}</td>
            <td>{e.overview}</td>
            <td>{e.air_date}</td>
            <td>{e.vote_average}</td>
          </tr>
        ))}
      </table>



    </>
  );
};