import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../config/schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";

export const epicFetchReview: Epic = (
  action$: Observable<ReviewSliceAction["fetchReview"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();
  return action$.pipe(
    filter(actions.fetchReview.match),
    switchMap(async (action) => {
      const { data, error } = await repository.getOne(action.payload.vars);
      if (error)
        return actions.loadReviewError({ error: "Sorry, cannot fetch data" });
      return actions.loadedReview({ data });
    })
  );
};
