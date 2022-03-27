import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DeleteReviewVars,
  UpdateReviewVars,
  SaveReviewVars,
} from "./schema/reviewMutation";
import { reviewsVars, ReviewVars } from "./schema/reviewQuery";
import { Review, UnformattedReview } from "../../../entities/review";

interface InitialState {
  fetchedReview?: UnformattedReview | undefined;
  error?: string | undefined;
}

const initialState: InitialState = {
  fetchedReview: undefined,
};

export const reviewSlice = createSlice({
  initialState,
  name: "review",
  reducers: {
    fetchReview: (state, action: PayloadAction<{ vars: ReviewVars }>) => {},
    fetchReviews: (state, action: PayloadAction<{ vars: reviewsVars }>) => {},
    saveReview: (state, action: PayloadAction<{ vars: SaveReviewVars }>) => {},
    deleteReview: (
      state,
      action: PayloadAction<{ vars: DeleteReviewVars }>
    ) => {},
    updateReview: (
      state,
      action: PayloadAction<{ vars: UpdateReviewVars }>
    ) => {},
    clearReviewData: (state) => {
      state.fetchedReview = undefined;
      state.error = undefined;
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadedReview: (
      state,
      action: PayloadAction<{ data: UnformattedReview | undefined }>
    ) => {
      state.fetchedReview = action.payload.data;
    },
    loadReviewError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = reviewSlice;
export type ReviewSliceAction = typeof actions;
export default reviewSlice.reducer;
