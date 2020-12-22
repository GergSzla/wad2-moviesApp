import React from "react";
import { Link } from "react-router-dom";
import "./tvCard.css";

const TvCard = ({ tv, action }) => {

    return (
        <div className="col-sm-2">
            <div className="container">
                <Link to={`/tv/${tv.id}`}>


                </Link>


                <div class="text-block">
                    <h4 className="card-title">{tv.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default TvCard;