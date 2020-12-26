import React from "react";
import { withRouter } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import PageTemplate from "../components/templateSeasonPage";
import useSeason from "../hooks/useSeason";

const SeasonPage = props => {
  const { tv_id,season_number } = props.match.params;
  const [season] = useSeason(tv_id,season_number)  // NEW
  return (
    <>
    {season ? (
      <>
        <PageTemplate season={season}>
          <SeasonDetails season={season} />
        </PageTemplate>
        
      </>
    ) : (
      <p>Waiting for season details</p>
    )}
  </>
  );
};

export default withRouter(SeasonPage);