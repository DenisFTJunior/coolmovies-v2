import { SaveReviewInput, SaveReviewOutput } from "../../schema/reviews/save";

export const toSave = (input: SaveReviewInput): SaveReviewOutput => {
  return {
    input: {
      movieReview: {
        ...input,
      },
    },
  };
};
