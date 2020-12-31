import React from "react";
import "./headerPersonList.css";

const Header = ({ title, numPersons }) => {
    return (
        <div className="row pageTitleBackg">
            <div className="col-md-6">
                <h1 className="pageTitle">
                    {`${title} `}
                    <span className="badge badge-dark">{numPersons}</span>
                </h1>
            </div>
        </div>
    );
};

export default Header;