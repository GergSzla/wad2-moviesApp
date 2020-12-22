import { getTrendingMovies } from "../api/tmdb-api";
import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'

const TrendingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);   

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Trending Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default TrendingMoviesPage;