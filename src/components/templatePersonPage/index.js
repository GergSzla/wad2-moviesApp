import React from "react";
import PersonHeader from '../headerPerson'
import "./personPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TemplatePersonPage = ({ person, children }) => {
    return (
        <>
            <div className="page">
                <PersonHeader person={person} />
                <div className="row">
                    <div className="col-3">
                        <img
                            src={
                                person.profile_path
                                    ? `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                                    : "./film-poster-placeholder.png"
                            }
                            className="person"
                            alt={person.name}
                        />
                    </div>
                    <div className=" mTitle col-8">
                        <h1 className="PName">
                            {person.name}
                            {"  "}
                            <a href={person.homepage}>
                                <FontAwesomeIcon className="homeIcon" icon={["fas", "home"]} size="1x" />
                            </a>
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TemplatePersonPage