import React, { useState } from "react";
import Header from "../headerTvList";
import TvList from "../tvList";
import FilterControls from "../filterControlsTv";

// Template for list movie on a page

const TvListPageTemplate = ({ tvs, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  
  let displayedTvs = tvs
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header title={title} numTvs={displayedTvs.length} />
      <FilterControls onUserInput={handleChange} numTvs={displayedTvs.length}/>
      <TvList
       action={action}
       tvs={displayedTvs}
      ></TvList>
    </>
  );
};

export default TvListPageTemplate ;