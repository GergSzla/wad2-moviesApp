export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPerson = () => { //new
    return fetch(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTvs = () => { //new
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
       )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getReqPerson = id => { //new
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getTv = id => { //new
    return fetch(
      ` https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
       )
      .then(res => res.json())
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTvReviews = id => { //new
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
       )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTrendingMovies = () => { //new
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
       )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTrendingTvs = () => { //new
    return fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
       )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getSeason = (tv_id,season_number) => { //new
    return fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
       )
      .then(res => res.json())
  };