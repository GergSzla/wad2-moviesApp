import { useEffect, useState } from "react";
import {getReqPerson} from '../api/tmdb-api'

const usePerson = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getReqPerson(id).then(person => {
        setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePerson