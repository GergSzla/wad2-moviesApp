import React, { useContext } from "react";
import {PersonsContext} from "../../contexts/personContext";


const AddToFollowingButton = ({ person }) => {
    const context = useContext(PersonsContext);
  
    const handleAddToFollowing = e => {
      e.preventDefault();
      context.addToFollowing(person.id);
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleAddToFollowing}
      >
        Follow
      </button>
    );
  };
  export default AddToFollowingButton;