import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import "./headerSeason.css";

const SeasonHeader = ({ history }) => {
    return (
        <div className="row">
            <div className="col-2">
                <button onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={["fas", "chevron-circle-left"]} size="2x" color="#ffae00" />
                </button>
            </div>

        </div>
    );
};

export default withRouter(SeasonHeader);