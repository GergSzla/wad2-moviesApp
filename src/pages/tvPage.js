import React, { useContext } from "react";
import PageTemplate from '../components/templateTvListPage'
import {TvsContext} from '../contexts/tvsContext'
import AddToFavoriteButtonTVS from '../components/buttons/addToFavoritesTV'

const TvListPage = () => {
  const context = useContext(TvsContext);
  const tvs = context.tvs

  return (
    <PageTemplate
      title="No. TV Shows"
      tvs = {tvs}
      action={(tv) => {
        return <AddToFavoriteButtonTVS tv={tv} />;
      }}
    />
  );
};

export default TvListPage;