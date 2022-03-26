import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { UpdateReviewVars } from "./schema/reviewMutation";

const UPDATE_REVIEW_BY_ID_MUTATION = gql`
  mutation UpdateMovieReviewById($input: UpdateMovieReviewByIdInput) {
    updateMovieReviewById(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_REVIEW_BY_NODEID_MUTATION = gql`
  mutation updateMovieReview($input: UpdateMovieReviewInput) {
    updateMovieReview(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateReview = ({ nodeId, id, movieReviewPatch }: UpdateReviewVars) => {
  const mutation = nodeId
    ? UPDATE_REVIEW_BY_NODEID_MUTATION
    : UPDATE_REVIEW_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id, movieReviewPatch } },
    refetchQueries: ["MovieReview", "MovieReviews"],
  });
};

export default updateReview;
