import { useEffect, useState } from "react";
import {getSeason} from '../api/tmdb-api'

const useSeason = (tv_id,season_number) => {
  const [season, setSeason] = useState(null);
  useEffect(() => {
    getSeason(tv_id,season_number).then(season => {
        setSeason(season);
    });
  }, [tv_id,season_number]);
  return [season, setSeason];
};

export default useSeason