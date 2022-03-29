import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { MovieSliceAction, actions } from "../movieSlice";
import MovieRepository from "../../../../repositories/movie/MovieRepository";
import { RootState } from "../../config/schema/store";
import MovieFormatter from "../../../formatation/movies/MovieFormatter";

export const epicFetchMovies: Epic = (
  action$: Observable<MovieSliceAction["fetchMovies"]>,
  state$: StateObservable<RootState>
) => {
  {
    const repository = new MovieRepository();
    const formatter = new MovieFormatter();

    return action$.pipe(
      filter(actions.fetchMovies.match),
      switchMap(async (action) => {
        const { data, error } = await repository.getMany(action.payload);
        if (error)
          return actions.loadMovieError({ error: "Sorry, cannot fetch data" });
        return actions.loadedMovie({ data: formatter.many(data) });
      })
    );
  }
};
