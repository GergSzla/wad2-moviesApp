import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTvReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import "./tvReviews.css";


export default ({ tv }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTvReviews(tv.id).then(reviews => {
      setReviews(reviews);
    });
  });
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link className="fullReview"
                    to={{
                      pathname: `/tvs/reviews/${r.id}`,
                      state: {
                        review: r,
                        tv: tv
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};