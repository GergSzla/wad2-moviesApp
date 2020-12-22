import React from "react";
import "./headerPersonList.css";

const Header = ({ title, numPersons }) => {
    return (
        <div className="row">
            <div>
                <h2 className="pageTitle">
                    {`${title} `}
                    <span className="page">{numPersons}</span>
                </h2>
            </div>
        </div>
    );
};

export default Header;