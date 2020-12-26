import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { getSeason } from '../../api/tmdb-api'
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./tvDetails.css";


export default ({ tv }) => {
    const [open, setOpen] = React.useState(false)
    
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

            {/* https://stackoverflow.com/questions/60559623/printing-attributes-of-an-object-array-as-a-grid-in-reactjs */}
            <div className="displayGrid">
                {tv.seasons.map(s => (
                    <div className="card  bg-white">
                        <Link to={`/tv/${tv.id}/season/${s.season_number}`}>
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
                    </div>

                ))}


            </div>

        </>

    );

};