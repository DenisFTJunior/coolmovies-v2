import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { UserSliceAction, actions } from "../userSlice";
import { RootState } from "../../config/schema/store";
import UserRepository from "../../../../repositories/user/UserRepository";
import UserFormatter from "../../../formatation/users/UserFormatter";

export const epicSaveUser: Epic = (
  action$: Observable<UserSliceAction["saveUser"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new UserRepository();
  const formatter = new UserFormatter();

  return action$.pipe(
    filter(actions.saveUser.match),
    switchMap(async (action) => {
      const save = () => repository.save(formatter.toSave(action.payload));
      const { errors } = await save();
      if (errors)
        return actions.loadUserError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
};
