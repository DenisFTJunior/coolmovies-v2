import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { UserSliceAction, actions } from "../userSlice";
import { RootState } from "../../config/schema/store";
import UserRepository from "../../../../repositories/user/UserRepository";
import UserFormatter from "../../../formatation/users/UserFormatter";

export const epicFetchUsers: Epic = (
  action$: Observable<UserSliceAction["fetchUsers"]>,
  state$: StateObservable<RootState>
) => {
  {
    const repository = new UserRepository();
    const formatter = new UserFormatter();

    return action$.pipe(
      filter(actions.fetchUsers.match),
      switchMap(async (action) => {
        const { data, error } = await repository.getMany(action.payload);
        if (error)
          return actions.loadUserError({ error: "Sorry, cannot fetch data" });
        return actions.loadedUser({ data: formatter.many(data) });
      })
    );
  }
};
