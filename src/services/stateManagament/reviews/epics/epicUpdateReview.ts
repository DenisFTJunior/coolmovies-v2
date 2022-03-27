import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";

export const epicUpdateReview: Epic = (
  action$: Observable<ReviewSliceAction["updateReview"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();

  return action$.pipe(
    filter(actions.updateReview.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const update = () => repository.update(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
};
