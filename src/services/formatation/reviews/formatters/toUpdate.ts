import { assoc, compose, dissoc, pick } from "ramda";

import {
  UpdateReviewInput,
  UpdateReviewOutput,
} from "../../schema/reviews/update";

export const toUpdate = (input: UpdateReviewInput): UpdateReviewOutput => {
  if (!input.id || !input.nodeId)
    throw new Error("Ops! This review don't exist");

  const cleanId = compose(
    pick(["id", "nodeId"]),
    input.id ? assoc("id", input.id) : assoc("nodeId", input.nodeId)
  )({});

  return {
    input: {
      ...cleanId,
      movieReviewPatch: {
        title: input.title,
        body: input.body,
        movieId: input.movieId,
        rating: input.rating,
        userReviewerId: input.userId,
      },
    },
  };
};
