import React from "react";
import "./headerTvList.css";

const Headerr = ({ title, numTvs }) => {
    return (
        <div className="row pageTitleBackg">
            <div className="col-md-6">
                <h1 className="pageTitle">
                    {`${title} `}
                    <span className="badge badge-dark">{numTvs}</span>
                </h1>
            </div>
        </div>
    );
};

export default Headerr;