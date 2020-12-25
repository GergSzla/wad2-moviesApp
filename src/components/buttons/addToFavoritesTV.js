import React, { useContext } from "react";
import {TvsContext} from "../../contexts/tvsContext";


const AddToFavoriteButtonTVS = ({ tv }) => {
    const context = useContext(TvsContext);
  
    const handleAddToFavorite = e => {
      e.preventDefault();
      context.addToFavoritesTv(tv.id);
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleAddToFavorite}
      >
        Add to Favorites
      </button>
    );
  };
  export default AddToFavoriteButtonTVS;