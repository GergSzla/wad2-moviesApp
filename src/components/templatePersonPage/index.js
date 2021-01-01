import React from "react";
import PersonHeader from '../headerPerson'
import "./personPage.css";


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
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TemplatePersonPage