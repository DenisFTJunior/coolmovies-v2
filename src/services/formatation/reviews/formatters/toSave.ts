import { SaveReviewInput, SaveReviewOutput } from "../schema/save";

export const toSave = (input: SaveReviewInput): SaveReviewOutput => {
  return {
    input: {
      movieReview: {
        ...input,
      },
    },
  };
};
