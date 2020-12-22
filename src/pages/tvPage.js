import React, { useContext } from "react";
import PageTemplate from '../components/templateTvListPage'
import {TvsContext} from '../contexts/tvsContext'

const TvListPage = () => {
  const context = useContext(TvsContext);
  const tvs = context.tvs

  return (
    <PageTemplate
      title="No. TV Shows"
      tvs = {tvs}
    />
  );
};

export default TvListPage;