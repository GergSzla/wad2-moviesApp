import { getTrendingTvs } from "../api/tmdb-api";
import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateTvListPage'

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
      />
  );
};

export default TrendingTvsPage;