import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../config/schema/store";
import { ReviewSliceAction, actions } from "../reviewSlice";
import ReviewRepository from "../../../../repositories/review/ReviewRepository";
import ReviewFormatter from "../../../formatation/reviews/ReviewFormatter";

export const epicSaveReview: Epic = (
  action$: Observable<ReviewSliceAction["saveReview"]>,
  state$: StateObservable<RootState>
) => {
  const repository = new ReviewRepository();
  const formatter = new ReviewFormatter();

  return action$.pipe(
    filter(actions.saveReview.match),
    switchMap(async (action) => {
      const  vars  = action.payload;
      const save = () => repository.save(formatter.toSave(vars));
      const { errors } = await save();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
};
