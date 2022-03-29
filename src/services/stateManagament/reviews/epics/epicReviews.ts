import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../config/schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";
import ReviewFormatter from "../../../formatation/reviews/ReviewFormatter";

export const epicFetchReviews: Epic = (
  action$: Observable<ReviewSliceAction["fetchReviews"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();
  const formatter = new ReviewFormatter();
  return action$.pipe(
    filter(actions.fetchReviews.match),
    switchMap(async (action) => {
      const { data, error } = await repository.getMany(action.payload);
      if (error)
        return actions.loadReviewError({ error: "Sorry, cannot fetch data" });
      return actions.loadedReview({ data: formatter.many(data) });
    })
  );
};
