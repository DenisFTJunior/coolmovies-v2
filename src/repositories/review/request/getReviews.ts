import { gql } from "@apollo/client";
import { UnformattedReview } from "../../../entities/review";

import { moviesClient } from "../../config/movieClient";
import { reviewsVars } from "./schema/reviewQuery";

const QUERY = gql`
  query MovieReviews(
    $condition: MovieReviewCondition
    $filter: MovieReviewFilter
    $first: Int
    $last: Int
    $offset: Int
    $orderBy: [MovieReviewsOrderBy!]
  ) {
    allMovieReviews(
      condition: $condition
      filter: $filter
      first: $first
      last: $last
      offset: $offset
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      reviews: nodes {
        commentsByMovieReviewId {
          totalCount
          comments: nodes {
            id
            title
            body
          }
        }
        movie: movieByMovieId {
          id
          title
        }
        body
        id
        nodeId
        rating
        title
        userReviewerId
      }
    }
  }
`;

const getReviewsQuery = (vars: reviewsVars) =>
  moviesClient.query<UnformattedReview, reviewsVars>({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getReviewsQuery;
