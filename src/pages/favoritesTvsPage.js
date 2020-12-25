import React, {useContext} from "react";
import TvsListPageTemplate from "../components/templateTvListPage";
import {TvsContext} from '../contexts/tvsContext'
import AddReviewButton from '../components/buttons/addReview'


const FavoriteTvsPage = props => {
  const context = useContext(TvsContext);
  const favorites = context.tvs.filter( m => m.favorite )
  return (
    <TvsListPageTemplate
      tvs={favorites}
      title={"Favorite Tvs"}
      action={tv => <AddReviewButton tv={tv} />}
    />
  );
};

export default FavoriteTvsPage;