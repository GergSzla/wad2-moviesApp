import React from "react";
import TV from "../tvCard";
import "./tvList.css";

const TvList = ({tvs, action}) => {
  const tvCards = tvs.map(m => (
    <TV key={m.id} tv={m} action={action} />
  ));
  return <div className="row tvs">{tvCards}</div>;
};

export default TvList;