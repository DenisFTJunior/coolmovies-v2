import { useStateDispatch } from "../../config/useDispatch";
import { actions as movieActions } from "../movieSlice";
import { SaveMovieInput } from "../schema/movieMutation";

const useSaveMovies = () => {
  const dispatch = useStateDispatch();
  const { saveMovie, fetchMovies } = movieActions;

  const save = (vars: SaveMovieInput) => {
    dispatch(saveMovie(vars));
    dispatch(fetchMovies({}));
  };

  return save;
};

export default useSaveMovies;
