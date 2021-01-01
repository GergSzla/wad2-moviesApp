import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "semantic-ui-css/semantic.min.css";
import "./tvDetails.css";


export default ({ tv, action }) => {
    // const [open, setOpen] = React.useState(false)

    return (
        <>
            <div className="backg">
                <h2>
                    
                    <a href={tv.homepage}>
                    {tv.name}
                    {"  "}                    </a>
                </h2>

                <h1 className="badge badge-dark">Overview</h1>
                <p>{tv.overview}</p>

                <div className="row"><h4 className="badge badge-dark">TV Show Tagline</h4>
                    <p>{tv.tagline}</p></div>

                <div className="row"><h4 className="badge badge-dark">First Aired</h4>
                    <p>{tv.first_air_date}</p></div>

                <div className="row"><h4 className="badge badge-dark">Popularity</h4>
                    <p>{tv.popularity}</p></div>

                <div className="row"><h4 className="badge badge-dark">Status</h4>
                    <p>{tv.status}</p></div>

                <div className="row"><h4 className="badge badge-dark">Genres</h4>
                    {tv.genres.map(g => (
                        <p>{g.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Spoken Languages</h4>
                    {tv.spoken_languages.map(lang => (
                        <p>{lang.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Production Companies</h4>
                    {tv.production_companies.map(pc => (
                        <p>{pc.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Production Countries</h4>
                    {tv.production_countries.map(pc => (
                        <p>{pc.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Vote Average</h4>
                    <p>{tv.vote_average}</p></div>

                <div className="row"><h4 className="badge badge-dark">Vote Count</h4>
                    <p>{tv.vote_count}</p></div>
                {/* <ul className="list-group list-group-horizontal">
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
                </ul> */}

                {/* https://stackoverflow.com/questions/60559623/printing-attributes-of-an-object-array-as-a-grid-in-reactjs */}
                <div className="displayGrid">
                    {tv.seasons.map(s => (
                        <div className="card">
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


                {action(tv)}
            </div>
        </>

    );

};