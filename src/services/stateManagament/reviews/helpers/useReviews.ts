import { useStateDispatch } from "../../config/useDispatch";
import { useStateSelector } from "../../config/useSelector";
import { reviewsVars } from "../schema/reviewQuery";
import { actions as reviewActions } from "../reviewSlice";
import { useEffect, useState } from "react";

const useReviews = (vars: reviewsVars) => {
  const dispatch = useStateDispatch();
  const { fetchReviews } = reviewActions;
  const stateReview = useStateSelector((state) => state.review);

  const action = (v: reviewsVars = {}) =>
    dispatch(fetchReviews({ ...vars, ...v }));

  useEffect(() => {
    action();
  }, []);

  return [stateReview.fetchedReview, action, stateReview];
};

export default useReviews;

export const useReview = (id: string | string[] | undefined) => {
  const dispatch = useStateDispatch();
  const { fetchReview } = reviewActions;
  const stateReview = useStateSelector((state) => state.review);

  const action = (v: string | string[]) => dispatch(fetchReview({ id: v }));

  useEffect(() => {
    if (id) action(id);
  }, []);

  return [id ? stateReview.fetchedReview : undefined, action, stateReview];
};
