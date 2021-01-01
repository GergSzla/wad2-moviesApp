import { getTrendingTvs } from "../api/tmdb-api";
import React, { useState, useEffect } from "react";
// import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateTvListPage'
import AddToFavoriteButtonTVS from '../components/buttons/addToFavoritesTV'

const TrendingTvsPage = () => {
  const [tvs, setTvs] = useState([]);
  
  useEffect(() => {
    getTrendingTvs().then(tvs => {
        setTvs(tvs);
    });
  }, []);   

  
  return (
      <PageTemplate
        title='Trending TV Shows'
        tvs={tvs}
        action={(tv) => {
          return <AddToFavoriteButtonTVS tv={tv} />;
        }}
      />
  );
};

export default TrendingTvsPage;