import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <h4>

    <div className="searchBar">
    <div className="row">
      <div className="col-md-12">
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
        </div>
        </div>
            <div className="row">
            <div className="col-md-12">

          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
          </div>
      </div>
    </div>
    </h4>
  );
};

export default FilterControls;