import React from "react";
import "./seasonDetails.css";

export default ({ season }) => {
  return (
    <>
      <div className="backg">

        <h1>{season.name}</h1>
        <h1 className="badge badge-dark">Overview</h1>
        <p>{season.overview}</p>

        <div className="row"><h4 className="badge badge-dark">Season Air Date</h4>
          <p>{season.air_date}</p></div>


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


      </div>
    </>
  );
};