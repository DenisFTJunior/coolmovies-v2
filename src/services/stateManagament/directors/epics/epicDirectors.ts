import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { DirectorSliceAction, actions } from "../DirectorSlice";
import { RootState } from "../../config/schema/store";
import DirectorRepository from "../../../../repositories/director/DirectorRepository";
import DirectorFormatter from "../../../formatation/directors/DirectorFormatter";

export const epicFetchDirectors: Epic = (
  action$: Observable<DirectorSliceAction["fetchDirectors"]>,
  state$: StateObservable<RootState>
) => {
  {
    const repository = new DirectorRepository();
    const formatter = new DirectorFormatter();

    return action$.pipe(
      filter(actions.fetchDirectors.match),
      switchMap(async (action) => {
        const { data, error } = await repository.getMany(action.payload);
        if (error)
          return actions.loadDirectorError({
            error: "Sorry, cannot fetch data",
          });
        return actions.loadedDirector({ data: formatter.many(data) });
      })
    );
  }
};
