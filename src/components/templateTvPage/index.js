import React from "react";
import TvHeader from '../headerTv'
import "./tvPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TemplateTvPage = ({ tv, children }) => {
  return (
    <>
      <div className="page">
        <TvHeader tv={tv} />
        <div className="row">
          <div className="col-3">
            <img
              src={
                tv.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${tv.poster_path}`
                  : "./film-poster-placeholder.png"
              }
              className="tv"
              alt={tv.name}
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

export default TemplateTvPage