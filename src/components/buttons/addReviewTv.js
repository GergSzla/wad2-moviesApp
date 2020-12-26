import React from "react";
import { Link } from "react-router-dom";

const ReviewButtonTv = ({ tv }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          tv: tv
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButtonTv;