import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { SaveReviewVars } from "./schema/reviewMutation";

const SAVE_REVIEW_MUTATION = gql`
  mutation CreateMovieReview($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveReview = (input: SaveReviewVars) =>
  moviesClient.mutate({
    mutation: SAVE_REVIEW_MUTATION,
    variables: { input },
    refetchQueries: ["MovieReview", "MovieReviews"],
  });

export default saveReview;
