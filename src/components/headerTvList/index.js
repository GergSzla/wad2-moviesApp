import React from "react";
import "./headerTvList.css";

const Header = ({ title, numTvs }) => {
    return (
        <div className="row">
            <div>
                <h2 className="pgTitle">
                    {`${title} `}
                    <span className="badge badge-pill">{numTvs}</span>
                </h2>
            </div>
        </div>
    );
};

export default Header;