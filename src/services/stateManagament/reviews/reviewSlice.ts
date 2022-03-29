import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DeleteReviewVars,
  SaveReviewInput,
  UpdateReviewInput,
} from "./schema/reviewMutation";
import { reviewsVars, ReviewVars } from "./schema/reviewQuery";
import { FormReview, Review } from "../../../entities/review";

interface InitialState {
  fetchedReview?: Review[] | Review | undefined;
  error?: string | undefined;
  form: Object;
}

const initialState: InitialState = {
  fetchedReview: undefined,
  form: {},
};

export const reviewSlice = createSlice({
  initialState,
  name: "review",
  reducers: {
    fetchReview: (state, action: PayloadAction<ReviewVars>) => {},
    fetchReviews: (state, action: PayloadAction<reviewsVars>) => {},
    saveReview: (state, action: PayloadAction<SaveReviewInput>) => {},
    deleteReview: (state, action: PayloadAction<DeleteReviewVars>) => {},
    updateReview: (state, action: PayloadAction<UpdateReviewInput>) => {},
    clearReviewData: (state) => {
      state.fetchedReview = undefined;
      state.error = undefined;
      state.form = {};
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadedReview: (
      state,
      action: PayloadAction<{
        data: Review[] | Review | undefined;
      }>
    ) => {
      state.fetchedReview = action.payload.data;
    },
    loadReviewError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
    fillform: (state, action: PayloadAction<FormReview>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
});

export const { actions } = reviewSlice;
export type ReviewSliceAction = typeof actions;
export default reviewSlice.reducer;
