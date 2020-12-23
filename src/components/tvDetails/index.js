import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./tvDetails.css";
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

const DropdownExampleMultipleSelection = () => (
    <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)

export default ({ tv }) => {
    return (
        <>
            <h3 className="col-2 overview">Overview</h3>
            <p>{tv.overview}</p>

            <ul className="list-group list-group-horizontal">
                <li key="rdh" className="itemTitle list-group-item list-group-item-dark">
                    <h5>{"TV Show Tagline"}</h5>
                </li>
                <li key="rdv" className="itemList list-group-item">
                    <h5>{tv.tagline}</h5>
                </li>
            </ul>

            <ul className="list-group list-group-horizontal">
                <li key="rdh" className="itemTitle list-group-item list-group-item-dark">
                    Popularity
        </li>
                <li key="rdv" className="bbb itemList list-group-item">
                    {tv.popularity}
                </li>
            </ul>

            <ul className="list-group list-group-horizontal">
                <li key="ruh" className=" itemTitle list-group-item list-group-item-dark">
                    Status
        </li>
                <li key="rut" className="itemList list-group-item ">
                    {tv.status}
                </li>
            </ul>


            <div className="displayGrid">
            {tv.seasons.map(s => (
                <div className="card  bg-white">
                <Link to={`/tv/${tv.id}/season/${s.id}`}>
                  <img
                    className="card-img-tag center "
                    alt={s.name}
                    src={
                        s.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
                        : "./film-poster-placeholder.png"
                    }
                  />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title ">{s.name}</h4>
                    <p>
                      <FontAwesomeIcon icon={["fas", "calendar"]} />
                      <span> {s.air_date}</span>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={["fas", "clone"]} />
                      <span> {s.episode_count}</span>
                    </p>
                  </div>
                  <div className="card-footer">
                     {/* {action(movie)} */}
                  </div>
              </div>
                // <table>
                //     <tr>
                //         <th>Season No.</th>
                //         <th>Name</th>
                //         <th>Ep. Count</th>
                //         <th>Air Date</th>

                //     </tr>
                //     <tr>
                //         <td>{s.season_number}</td>
                //         <td>{s.name}</td>
                //         <td>{s.episode_count}</td>
                //         <td>{s.air_date}</td>

                //     </tr>

                // </table>
            ))}
    </div>
        </>
    );
};