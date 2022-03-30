import { useStateDispatch } from "../../config/useDispatch";
import { useStateSelector } from "../../config/useSelector";
import { actions as movieActions } from "../movieSlice";
import { useEffect, useState } from "react";
import { MoviesVars } from "../schema/movieQuery";

const useMovies = (vars: MoviesVars) => {
  const dispatch = useStateDispatch();
  const { fetchMovies } = movieActions;

  const action = (v: MoviesVars = {}) =>
    dispatch(fetchMovies({ ...vars, ...v }));

  useEffect(() => {
    action();
  }, []);

  const stateMovie = useStateSelector((state) => state.movie);

  return [stateMovie.fetchedMovies, action, stateMovie];
};

export default useMovies;
