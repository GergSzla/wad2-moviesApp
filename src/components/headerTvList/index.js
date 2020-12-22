import React from "react";
import "./headerTvList.css";

const Header = ({ title, numTvs }) => {
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

export default Header;