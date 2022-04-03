import { SaveReviewInput, SaveReviewOutput } from "../schema/save";

export const toSave = (input: SaveReviewInput): SaveReviewOutput => {

  return {
    movieReview: {
      title: input.title,
      userReviewerId: input.userId,
      movieId: input.movieId,
      body: input.body,
      rating: input.rating + 0,
    },
  };
};
