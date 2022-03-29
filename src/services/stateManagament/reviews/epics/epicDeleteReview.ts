import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../config/schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";

export const epicDeleteReview: Epic = (
  action$: Observable<ReviewSliceAction["deleteReview"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();
  return action$.pipe(
    filter(actions.deleteReview.match),
    switchMap(async (action) => {
      const remove = () => repository.delete(action.payload);
      const { errors } = await remove();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot delete item :(",
        });
      return actions.processedRequest();
    })
  );
};
