import { useEffect, useState } from "react";

import { useStateDispatch } from "../../config/useDispatch";
import { useStateSelector } from "../../config/useSelector";
import { actions as directorActions } from "../DirectorSlice";
import { DirectorsVars } from "../schema/directorQuery";

const useDirectors = (vars: DirectorsVars) => {
  const dispatch = useStateDispatch();
  const { fetchDirectors } = directorActions;

  const action = (v: DirectorsVars = {}) =>
    dispatch(fetchDirectors({ ...vars, ...v }));

  useEffect(() => {
    action();
  }, []);

  const stateDirector = useStateSelector((state) => state.director);

  return [stateDirector.fetchedDirector, action, stateDirector];
};

export default useDirectors;
