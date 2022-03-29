import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { MovieSliceAction, actions } from "../movieSlice";
import { RootState } from "../../config/schema/store";
import MovieRepository from "../../../../repositories/movie/MovieRepository";
import MovieFormatter from "../../../formatation/movies/MovieFormatter";

export const epicSaveMovie: Epic = (
  action$: Observable<MovieSliceAction["saveMovie"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new MovieRepository();
  const formatter = new MovieFormatter();

  return action$.pipe(
    filter(actions.saveMovie.match),
    switchMap(async (action) => {
      const save = () => repository.save(formatter.toSave(action.payload));
      const { errors } = await save();
      if (errors)
        return actions.loadMovieError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
};
