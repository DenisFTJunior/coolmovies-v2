import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { DeleteReviewVars } from "./schema/reviewMutation";

const DELETE_REVIEW_BY_ID_MUTATION = gql`
  mutation DeleteMovieReviewById($input: DeleteMovieReviewByIdInput) {
    deleteMovieReviewById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_REVIEW_BY_NODEID_MUTATION = gql`
  mutation DeleteMovieReview($input: DeleteMovieReviewInput) {
    deleteMovieReview(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteReview = ({ nodeId, id }: DeleteReviewVars) => {
  const mutation = nodeId
    ? DELETE_REVIEW_BY_NODEID_MUTATION
    : DELETE_REVIEW_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id } },
    refetchQueries: ["MovieReview", "MovieReviews"],
  });
};

export default deleteReview;
