import { assoc, compose, dissoc, pick } from "ramda";

import { UpdateReviewInput, UpdateReviewOutput } from "../schema/update";

export const toUpdate = (input: UpdateReviewInput): UpdateReviewOutput => {
  if (!input.id || !input.nodeId) console.log("input", input);

  const cleanId = compose(
    pick(["id", "nodeId"]),
    input.id ? assoc("id", input.id) : assoc("nodeId", input.nodeId)
  )({});

  return {
    ...cleanId,

    movieReviewPatch: {
      ...cleanId,
      title: input.title,
      body: input.body,
      movieId: input.movieId,
      rating: input.rating,
      userReviewerId: input.userId,
    },
  };
};
