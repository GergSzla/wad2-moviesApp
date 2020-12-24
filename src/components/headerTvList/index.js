import React from "react";
import "./headerTvList.css";

const Headerr = ({ title, numTvs }) => {
    return (
        <div className="row">
            <div>
                <h2 className="pageTitle">
                    {`${title} `}
                    <span className="page">{numTvs}</span>
                </h2>
            </div>
        </div>
    );
};

export default Headerr;