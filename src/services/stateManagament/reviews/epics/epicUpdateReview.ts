import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../config/schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";
import ReviewFormatter from "../../../formatation/reviews/ReviewFormatter";

export const epicUpdateReview: Epic = (
  action$: Observable<ReviewSliceAction["updateReview"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();
  const formatter = new ReviewFormatter();

  return action$.pipe(
    filter(actions.updateReview.match),
    switchMap(async (action) => {
      const update = () =>
        repository.update(formatter.toUpdate(action.payload));
      const { errors } = await update();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
};
