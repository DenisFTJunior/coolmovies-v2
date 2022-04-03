import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { DirectorSliceAction, actions } from "../DirectorSlice";
import { RootState } from "../../config/schema/store";
import DirectorRepository from "../../../../repositories/director/DirectorRepository";
import DirectorFormatter from "../../../formatation/directors/DirectorFormatter";

export const epicSaveDirector: Epic = (
  action$: Observable<DirectorSliceAction["saveDirector"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new DirectorRepository();
  const formatter = new DirectorFormatter();

  return action$.pipe(
    filter(actions.saveDirector.match),
    switchMap(async (action) => {
      const save = () => repository.save(formatter.toSave(action.payload));
      const { errors } = await save();
      if (errors)
        return actions.loadDirectorError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
};
